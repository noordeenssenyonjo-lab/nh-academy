import bcrypt from 'bcrypt'
import prisma from '../lib/prisma'
import { signToken } from '../lib/auth'

export default async function handler(req: any, res: any){
  if (req.method !== 'POST') return res.status(405).end()
  const { fullName, email, password } = req.body
  if (!fullName || !email || !password) return res.status(400).json({ message: 'Missing fields' })

  // check if admin exists
  const existing = await prisma.user.findFirst({ where: { role: 'ADMIN' } })
  if (existing) return res.status(400).json({ message: 'Admin already exists' })

  const hashed = await bcrypt.hash(password, 10)
  const user = await prisma.user.create({ data: { fullName, email, password: hashed, role: 'ADMIN' } })

  // Sign token and set cookie
  const token = signToken({ userId: user.id, role: 'ADMIN' })
  res.setHeader('Set-Cookie', `token=${token}; HttpOnly; Path=/; Max-Age=${60*60*24*7}`)
  return res.json({ ok: true })
}

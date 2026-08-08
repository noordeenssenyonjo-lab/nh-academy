import bcrypt from 'bcrypt'
import prisma from '../../../lib/prisma'
import { signToken } from '../../../lib/auth'

export default async function handler(req: any, res: any){
  if (req.method !== 'POST') return res.status(405).end()
  const { email, password } = req.body
  if (!email || !password) return res.status(400).json({ message: 'Missing fields' })

  const user = await prisma.user.findUnique({ where: { email } })
  if (!user) return res.status(401).json({ message: 'Invalid credentials' })

  const ok = await bcrypt.compare(password, user.password)
  if (!ok) return res.status(401).json({ message: 'Invalid credentials' })

  const token = signToken({ userId: user.id, role: user.role })
  res.setHeader('Set-Cookie', `token=${token}; HttpOnly; Path=/; Max-Age=${60*60*24*7}`)
  return res.json({ ok: true })
}

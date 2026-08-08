import bcrypt from 'bcrypt'
import prisma from '../../../lib/prisma'
import { signToken } from '../../../lib/auth'

export default async function handler(req: any, res: any){
  if (req.method !== 'POST') return res.status(405).end()
  const { fullName, email, phone, language, course, level, password } = req.body
  if (!fullName || !email || !password) return res.status(400).json({ message: 'Missing fields' })

  const existing = await prisma.user.findUnique({ where: { email } })
  if (existing) return res.status(400).json({ message: 'User already exists' })

  const hashed = await bcrypt.hash(password, 10)
  const user = await prisma.user.create({ data: { fullName, email, phone, language: language || 'en', password: hashed } })

  // Optionally enroll user in selected course (if present)
  if (course) {
    const courseRec = await prisma.course.findUnique({ where: { slug: course } })
    if (courseRec) {
      await prisma.enrollment.create({ data: { userId: user.id, courseId: courseRec.id } })
    }
  }

  // Sign token and set cookie
  const token = signToken({ userId: user.id, role: 'STUDENT' })
  res.setHeader('Set-Cookie', `token=${token}; HttpOnly; Path=/; Max-Age=${60*60*24*7}`)
  return res.json({ ok: true })
}

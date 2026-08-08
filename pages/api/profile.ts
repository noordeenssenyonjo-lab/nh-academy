import prisma from '../../lib/prisma'
import { verifyToken } from '../../lib/auth'

export default async function handler(req: any, res: any){
  const token = req.cookies?.token || ''
  const payload: any = token ? verifyToken(token) : null
  if (!payload) return res.status(401).json({ message: 'Not authenticated' })
  const user = await prisma.user.findUnique({ where: { id: payload.userId } })
  if (!user) return res.status(404).json({ message: 'Not found' })
  // Do not return password
  const { password, ...rest } = (user as any)
  res.json({ user: rest })
}

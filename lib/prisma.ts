import { PrismaClient } from '@prisma/client'

let prisma: PrismaClient

if (!globalThis.prisma) {
  prisma = new PrismaClient()
  ;(globalThis as any).prisma = prisma
} else {
  prisma = (globalThis as any).prisma
}

export default prisma

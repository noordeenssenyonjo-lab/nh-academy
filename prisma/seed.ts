import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

async function main(){
  // Create sample courses
  await prisma.course.createMany({
    data: [
      { title: "Qur'an Reading & Memorization", slug: 'quran-reading', description: 'Learn to read and memorize the Qur\'an', level: 'All', teacher: 'Ustadh Bilal', schedule: 'Tue & Thu 6:00 PM', duration: '12 weeks', lessons: 24 },
      { title: 'Tajweed', slug: 'tajweed', description: 'Master the rules of Tajweed', level: 'Beginner', teacher: 'Ustadh Ali', schedule: 'Sat 4:00 PM', duration: '8 weeks', lessons: 16 },
      { title: 'Arabic Language', slug: 'arabic-language', description: 'Beginner to advanced Arabic learning', level: 'Beginner', teacher: 'Ustadh Ahmed', schedule: 'Sun 10:00 AM', duration: '16 weeks', lessons: 32 }
    ]
  })

  // Create sample reading groups
  await prisma.readingGroup.createMany({
    data: [
      { name: 'Al-Furqan', arabic: 'الفرقان', level: 'Beginner', description: 'Qur\'anic reading', schedule: 'Mon 6:00 PM', learners: 12 },
      { name: 'Ihsan', arabic: 'الإحسان', level: 'Intermediate', description: 'Advanced recitation', schedule: 'Wed 6:00 PM', learners: 8 }
    ]
  })

  console.log('Seed finished.')
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

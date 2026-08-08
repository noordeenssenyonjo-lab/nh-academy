import { useRouter } from 'next/router'
import Header from '../../../components/Header'

const details: any = {
  'quran-reading': {
    title: "Qur'an Reading & Memorization",
    description: 'Learn to read and memorize the Qur\'an with Tajweed.',
    level: 'Beginner', teacher: 'Ustadh Bilal', duration: '12 weeks', lessons: 24
  },
  'tajweed': {
    title: 'Tajweed', description: 'Master the rules of Tajweed.', level: 'Intermediate', teacher: 'Ustadh Ali', duration: '10 weeks', lessons: 20
  }
}

export default function CoursePage({ setLang, lang }: any) {
  const router = useRouter()
  const { slug } = router.query as any
  const c = slug ? details[slug] : null

  if (!c) return (
    <div className="p-4">
      <Header setLang={setLang} lang={lang} />
      <div className="mt-6">Course not found.</div>
    </div>
  )

  return (
    <div className="p-4">
      <Header setLang={setLang} lang={lang} />
      <h1 className="text-2xl font-bold">{c.title}</h1>
      <p className="mt-2 text-gray-700">{c.description}</p>
      <div className="mt-4 space-y-2">
        <div><strong>Level:</strong> {c.level}</div>
        <div><strong>Teacher:</strong> {c.teacher}</div>
        <div><strong>Duration:</strong> {c.duration}</div>
        <div><strong>Lessons:</strong> {c.lessons}</div>
      </div>

      <div className="mt-6">
        <a className="px-4 py-2 bg-nhgreen text-white rounded">Enroll</a>
        <a className="ml-3 px-4 py-2 border rounded">View Schedule</a>
      </div>
    </div>
  )
}

import { useRouter } from 'next/router'
import Header from '../../../components/Header'
import { COURSES } from '../../../lib/data'

export default function CoursePage({ setLang, lang }: any) {
  const router = useRouter()
  const { slug } = router.query as any
  const c = slug ? COURSES.find(x => x.slug === slug) : null

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
        <a href="/register" className="px-4 py-2 bg-nhgreen text-white rounded">Enroll</a>
        <a href="/schedule" className="ml-3 px-4 py-2 border rounded">View Schedule</a>
      </div>
    </div>
  )
}

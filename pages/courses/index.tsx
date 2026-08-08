import Link from 'next/link'
import Header from '../../components/Header'

const courses = [
  { slug: 'quran-reading', title: "Qur'an Reading & Memorization", level: 'Beginner', teacher: 'Ustadh Bilal' },
  { slug: 'tajweed', title: 'Tajweed', level: 'Intermediate', teacher: 'Ustadh Ali' },
  { slug: 'arabic-language', title: 'Arabic Language', level: 'Beginner', teacher: 'Ustadh Sara' }
]

export default function Courses({ setLang, lang }: any) {
  return (
    <div className="p-4">
      <Header setLang={setLang} lang={lang} />
      <h2 className="text-xl font-semibold">Courses</h2>
      <div className="mt-3 space-y-3">
        {courses.map(c => (
          <Link key={c.slug} href={`/courses/${c.slug}`}>
            <a className="block p-3 border rounded-lg">
              <div className="flex justify-between">
                <div>
                  <div className="font-semibold">{c.title}</div>
                  <div className="text-sm text-gray-600">{c.level} • {c.teacher}</div>
                </div>
                <div className="text-sm text-nhgreen">View</div>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  )
}

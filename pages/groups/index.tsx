import Link from 'next/link'
import Header from '../../components/Header'

const groups = [
  { slug: 'al-furqan', title: 'Al-Furqan', arabic: 'الفرقان', level: 'All', desc: 'Focused Qur\'an reading and tafsir sessions', schedule: 'Tues & Thu, 6:00 PM', learners: 124 },
  { slug: 'ihsan', title: 'Ihsan', arabic: 'الإحسان', level: 'Intermediate', desc: 'Spirituality and tajweed practice', schedule: 'Sat, 4:00 PM', learners: 87 },
  { slug: 'salam', title: 'Salam', arabic: 'السلام', level: 'Beginner', desc: 'Beginner reading group', schedule: 'Sun, 10:00 AM', learners: 56 },
  { slug: 'al-huda', title: 'Al-Huda', arabic: 'الهدى', level: 'Mixed', desc: 'Mixed-level reading and revision', schedule: 'Wed, 7:00 PM', learners: 70 },
  { slug: 'an-noor', title: 'An-Noor', arabic: 'النور', level: 'Advanced', desc: 'Advanced recitation and memorization', schedule: 'Fri, 5:00 PM', learners: 35 },
  { slug: 'al-ilm', title: 'Al-Ilm', arabic: 'العلم', level: 'All', desc: 'Study circles and lessons', schedule: 'Mon, 6:30 PM', learners: 90 }
]

export default function Groups({ setLang, lang }: any) {
  return (
    <div className="p-4">
      <Header setLang={setLang} lang={lang} />
      <h1 className="text-xl font-semibold mt-4">Reading Groups</h1>
      <div className="mt-4 space-y-3">
        {groups.map(g => (
          <Link key={g.slug} href={`/groups/${g.slug}`}>
            <a className="block p-3 border rounded">
              <div className="flex justify-between">
                <div>
                  <div className="font-semibold">{g.title} — <span className="text-sm text-gray-600">{g.arabic}</span></div>
                  <div className="text-sm text-gray-600">{g.desc}</div>
                </div>
                <div className="text-sm text-nhgreen">Join</div>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  )
}

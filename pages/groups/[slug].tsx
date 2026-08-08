import { useRouter } from 'next/router'
import Header from '../../components/Header'
import { groups as groupData } from './_data'

// simple approach: include group data inline or import
const groups: any = {
  'al-furqan': { title: 'Al-Furqan', arabic: 'الفرقان', level: 'All', desc: 'Focused Qur\'an reading and tafsir sessions', schedule: 'Tues & Thu, 6:00 PM', learners: 124 },
  'al-huda': { title: 'Al-Huda', arabic: 'الهدى', level: 'Mixed', desc: 'Mixed-level reading and revision', schedule: 'Wed, 7:00 PM', learners: 70 }
}

export default function GroupPage({ setLang, lang }: any) {
  const router = useRouter()
  const { slug } = router.query as any
  const g = slug ? groups[slug] : null
  if (!g) return (
    <div className="p-4">
      <Header setLang={setLang} lang={lang} />
      <div className="mt-4">Group not found.</div>
    </div>
  )

  return (
    <div className="p-4">
      <Header setLang={setLang} lang={lang} />
      <h1 className="text-2xl font-bold">{g.title} <span className="text-sm text-gray-600">{g.arabic}</span></h1>
      <p className="mt-2">{g.desc}</p>
      <div className="mt-4 space-y-2">
        <div><strong>Level:</strong> {g.level}</div>
        <div><strong>Schedule:</strong> {g.schedule}</div>
        <div><strong>Learners:</strong> {g.learners}</div>
      </div>
      <div className="mt-4">
        <button className="px-4 py-2 bg-nhgreen text-white rounded">Join Group</button>
      </div>
    </div>
  )
}

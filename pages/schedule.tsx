import Header from '../components/Header'

export default function Schedule({ setLang, lang }: any) {
  const meetUrl = process.env.NEXT_PUBLIC_MEET_URL || ''
  const classes = [
    { title: 'Tajweed Foundations', date: 'Today', time: '6:30 PM', teacher: 'Ustadh Bilal', meet: '' },
    { title: "Qur'an Reading", date: 'Tomorrow', time: '5:00 PM', teacher: 'Ustadh Sara', meet: '' }
  ]

  return (
    <div className="p-4">
      <Header setLang={setLang} lang={lang} />
      <h1 className="text-xl font-semibold mt-4">Schedule</h1>
      <div className="mt-4 space-y-3">
        {classes.map((c, i) => (
          <div key={i} className="p-3 border rounded flex justify-between items-center">
            <div>
              <div className="font-semibold">{c.title}</div>
              <div className="text-sm text-gray-600">{c.date} • {c.time} — {c.teacher}</div>
            </div>
            <div>
              <a className={`px-3 py-2 rounded text-white ${meetUrl || c.meet ? 'bg-nhgreen' : 'bg-gray-300'}`} href={meetUrl || c.meet || '#'} target="_blank" rel="noreferrer`">Join</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

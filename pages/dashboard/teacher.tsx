import Header from '../../components/Header'

export default function TeacherDashboard({ setLang, lang }: any) {
  return (
    <div className="p-4">
      <Header setLang={setLang} lang={lang} />
      <h1 className="text-xl font-semibold mt-4">Teacher Dashboard</h1>
      <div className="mt-4 space-y-3">
        <div className="p-3 border rounded">My Classes</div>
        <div className="p-3 border rounded">My Students</div>
        <div className="p-3 border rounded">Schedule</div>
      </div>
    </div>
  )
}

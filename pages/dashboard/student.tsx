import Header from '../../components/Header'
import { useEffect, useState } from 'react'
import { initFirebase } from '../../lib/firebase'
import { doc, getDoc } from 'firebase/firestore'

export default function StudentDashboard({ setLang, lang }: any) {
  const [profile, setProfile] = useState<any>(null)

  useEffect(() => {
    const fb = initFirebase()
    if (!fb) return
    const { auth, db } = fb
    const unsub = auth.onAuthStateChanged(async user => {
      if (!user) return
      const snap = await getDoc(doc(db, 'users', user.uid))
      setProfile(snap.exists() ? snap.data() : null)
    })
    return () => unsub()
  }, [])

  return (
    <div className="p-4">
      <Header setLang={setLang} lang={lang} />
      <h1 className="text-xl font-semibold mt-4">My Learning</h1>

      {!profile && <div className="mt-4">Loading...</div>}

      {profile && (
        <div className="mt-4 space-y-3">
          <div className="p-3 border rounded">
            <div className="font-semibold">My Courses</div>
            <div className="text-sm text-gray-600">{profile.course || 'No courses yet'}</div>
          </div>

          <div className="p-3 border rounded">
            <div className="font-semibold">My Reading Group</div>
            <div className="text-sm text-gray-600">—</div>
          </div>

          <div className="p-3 border rounded">
            <div className="font-semibold">Upcoming Class</div>
            <div className="text-sm text-gray-600">Tajweed Foundations — Today, 6:30 PM</div>
          </div>

          <div className="p-3 border rounded">
            <div className="font-semibold">Study Materials</div>
            <div className="text-sm text-gray-600">PDFs and notes will appear here</div>
          </div>
        </div>
      )}

    </div>
  )
}

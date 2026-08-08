import Link from 'next/link'
import Header from '../../components/Header'
import { useEffect, useState } from 'react'
import { initFirebase } from '../../lib/firebase'
import { doc, getDoc } from 'firebase/firestore'

export default function Dashboard({ setLang, lang }: any) {
  const [role, setRole] = useState<string | null>(null)

  useEffect(() => {
    const fb = initFirebase()
    if (!fb) return
    const { auth, db } = fb
    const unsub = auth.onAuthStateChanged(async user => {
      if (!user) return
      const snap = await getDoc(doc(db, 'users', user.uid))
      setRole(snap.exists() ? (snap.data() as any).role : 'student')
    })
    return () => unsub()
  }, [])

  return (
    <div className="p-4">
      <Header setLang={setLang} lang={lang} />
      <h1 className="text-xl font-semibold mt-4">Dashboard</h1>
      <div className="mt-4 space-y-3">
        <Link href="/dashboard/student"><a className="block p-3 border rounded">Student Dashboard</a></Link>
        <Link href="/dashboard/teacher"><a className="block p-3 border rounded">Teacher Dashboard</a></Link>
        <Link href="/admin"><a className="block p-3 border rounded">Admin Area</a></Link>
      </div>
      <div className="mt-4 text-sm text-gray-600">Your role: {role || 'loading...'}</div>
    </div>
  )
}

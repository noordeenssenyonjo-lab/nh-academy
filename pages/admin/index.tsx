import { useEffect, useState } from 'react'
import Header from '../../components/Header'
import { initFirebase } from '../../lib/firebase'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { useRouter } from 'next/router'

export default function AdminIndex({ setLang, lang }: any) {
  const [isAdmin, setIsAdmin] = useState(false)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const fb = initFirebase()
    if (!fb) return
    const { auth, db } = fb
    const unsub = auth.onAuthStateChanged(async user => {
      if (!user) {
        router.push('/login')
        return
      }
      const snap = await getDoc(doc(db, 'users', user.uid))
      const role = snap.exists() ? (snap.data() as any).role : 'student'
      setIsAdmin(role === 'admin')
      setLoading(false)
    })
    return () => unsub()
  }, [])

  if (loading) return <div className="p-4">Loading...</div>
  if (!isAdmin) return (
    <div className="p-4">
      <Header setLang={setLang} lang={lang} />
      <div className="mt-4">You are not an administrator. If you need to create the first admin, visit <a href="/admin/setup" className="text-nhgreen">Admin Setup</a> and follow the instructions.</div>
    </div>
  )

  return (
    <div className="p-4">
      <Header setLang={setLang} lang={lang} />
      <h1 className="text-xl font-semibold mt-4">Admin Dashboard</h1>
      <div className="mt-4 space-y-3">
        <div className="p-3 border rounded">Manage Students</div>
        <div className="p-3 border rounded">Manage Teachers</div>
        <div className="p-3 border rounded">Manage Courses</div>
        <div className="p-3 border rounded">Manage Reading Groups</div>
      </div>
    </div>
  )
}

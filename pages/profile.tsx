import { useEffect, useState } from 'react'
import Header from '../components/Header'
import { initFirebase } from '../lib/firebase'
import { doc, getDoc } from 'firebase/firestore'
import { signOut } from 'firebase/auth'
import { useRouter } from 'next/router'

export default function Profile({ setLang, lang }: any) {
  const [profile, setProfile] = useState<any>(null)
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
      const docRef = doc(db, 'users', user.uid)
      const snap = await getDoc(docRef)
      setProfile(snap.exists() ? snap.data() : { email: user.email })
    })
    return () => unsub()
  }, [])

  const handleLogout = async () => {
    const fb = initFirebase()
    if (!fb) return
    await signOut(fb.auth)
    router.push('/')
  }

  return (
    <div className="p-4">
      <Header setLang={setLang} lang={lang} />
      <h1 className="text-xl font-semibold mt-4">Profile</h1>
      {!profile && <div className="mt-4">Loading profile...</div>}
      {profile && (
        <div className="mt-4">
          <div><strong>Name:</strong> {profile.fullName || '—'}</div>
          <div><strong>Email:</strong> {profile.email}</div>
          <div><strong>Phone:</strong> {profile.phone || '—'}</div>
          <div><strong>Language:</strong> {profile.language || '—'}</div>
          <div><strong>Course:</strong> {profile.course || '—'}</div>
          <div className="mt-4">
            <button onClick={handleLogout} className="px-3 py-2 bg-nhblue text-white rounded">Logout</button>
          </div>
        </div>
      )}
    </div>
  )
}

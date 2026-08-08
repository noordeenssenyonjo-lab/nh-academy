import { useEffect, useState } from 'react'
import Header from '../../components/Header'
import { initFirebase } from '../../lib/firebase'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { useRouter } from 'next/router'

export default function AdminSetup({ setLang, lang }: any) {
  const [status, setStatus] = useState<string | null>(null)
  const router = useRouter()

  useEffect(() => {
    // nothing
  }, [])

  const handleClaim = async () => {
    const fb = initFirebase()
    if (!fb) return setStatus('Firebase not configured')
    const { auth, db } = fb
    const user = auth.currentUser
    if (!user) return router.push('/login')
    // check admin contact matches env
    const allowed = process.env.NEXT_PUBLIC_ADMIN_CONTACT || ''
    if (allowed && user.email !== allowed) {
      setStatus('Your account email does not match the configured admin contact. Contact the project owner.')
      return
    }
    // set role to admin
    await setDoc(doc(db, 'users', user.uid), { role: 'admin' }, { merge: true })
    setStatus('You are now an admin. Go to /admin')
  }

  return (
    <div className="p-4">
      <Header setLang={setLang} lang={lang} />
      <h1 className="text-xl font-semibold mt-4">Admin Setup</h1>
      <p className="mt-2">This page allows the first administrator (the address set in NEXT_PUBLIC_ADMIN_CONTACT) to claim admin rights. If you are not the configured admin email, please use the Firebase Console to set roles instead.</p>
      <div className="mt-4">
        <button onClick={handleClaim} className="px-3 py-2 bg-nhgold text-white rounded">Claim admin (if you are the admin contact)</button>
      </div>
      {status && <div className="mt-3">{status}</div>}
    </div>
  )
}

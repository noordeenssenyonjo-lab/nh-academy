import { useState } from 'react'
import { useRouter } from 'next/router'
import Header from '../components/Header'
import { initFirebase } from '../lib/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'

export default function Register({ setLang, lang }: any) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    const form = new FormData(e.target)
    const fullName = form.get('fullName') as string
    const email = form.get('email') as string
    const phone = form.get('phone') as string
    const language = form.get('language') as string
    const course = form.get('course') as string
    const level = form.get('level') as string
    const password = form.get('password') as string

    const fb = initFirebase()
    if (!fb) {
      setError('Firebase not configured. Add env values in .env.local')
      setLoading(false)
      return
    }

    try {
      const { auth, db } = fb
      const cred = await createUserWithEmailAndPassword(auth, email, password)
      const uid = cred.user.uid
      await setDoc(doc(db, 'users', uid), {
        fullName,
        email,
        phone,
        language,
        course,
        level,
        role: 'student',
        createdAt: new Date().toISOString()
      })
      router.push('/dashboard')
    } catch (err: any) {
      setError(err.message || 'Registration failed')
      setLoading(false)
    }
  }

  return (
    <div className="p-4">
      <Header setLang={setLang} lang={lang} />
      <h1 className="text-xl font-semibold mt-4">Create your account</h1>
      <form onSubmit={handleSubmit} className="mt-4 space-y-3">
        <input name="fullName" required placeholder="Full name" className="w-full p-2 border rounded" />
        <input name="email" type="email" required placeholder="Email" className="w-full p-2 border rounded" />
        <input name="phone" required placeholder="Phone number" className="w-full p-2 border rounded" />
        <select name="language" defaultValue={lang} className="w-full p-2 border rounded">
          <option value="en">English</option>
          <option value="ar">العربية</option>
          <option value="lg">Luganda</option>
        </select>
        <select name="course" defaultValue="quran-reading" className="w-full p-2 border rounded">
          <option value="quran-reading">Qur'an Reading &amp; Memorization</option>
          <option value="tajweed">Tajweed</option>
          <option value="arabic-language">Arabic Language</option>
        </select>
        <select name="level" defaultValue="beginner" className="w-full p-2 border rounded">
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
        <input name="password" type="password" required placeholder="Create a password" className="w-full p-2 border rounded" />

        {error && <div className="text-red-600">{error}</div>}
        <button className="w-full p-2 bg-nhgreen text-white rounded" disabled={loading}>{loading ? 'Creating...' : 'Register'}</button>
      </form>
    </div>
  )
}

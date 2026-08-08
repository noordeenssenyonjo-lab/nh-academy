import { useState } from 'react'
import { useRouter } from 'next/router'
import Header from '../components/Header'
import { initFirebase } from '../lib/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'

export default function Login({ setLang, lang }: any) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    const form = new FormData(e.target)
    const email = form.get('email') as string
    const password = form.get('password') as string

    const fb = initFirebase()
    if (!fb) {
      setError('Firebase not configured. Add env values in .env.local')
      setLoading(false)
      return
    }

    try {
      const { auth } = fb
      await signInWithEmailAndPassword(auth, email, password)
      router.push('/dashboard')
    } catch (err: any) {
      setError(err.message || 'Login failed')
      setLoading(false)
    }
  }

  return (
    <div className="p-4">
      <Header setLang={setLang} lang={lang} />
      <h1 className="text-xl font-semibold mt-4">Welcome back</h1>
      <form onSubmit={handleSubmit} className="mt-4 space-y-3">
        <input name="email" type="email" required placeholder="Email" className="w-full p-2 border rounded" />
        <input name="password" type="password" required placeholder="Password" className="w-full p-2 border rounded" />
        {error && <div className="text-red-600">{error}</div>}
        <button className="w-full p-2 bg-nhgreen text-white rounded" disabled={loading}>{loading ? 'Signing in...' : 'Login'}</button>
      </form>
    </div>
  )
}

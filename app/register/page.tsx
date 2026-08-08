import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Register(){
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [language, setLanguage] = useState('en')
  const [course, setCourse] = useState('quran-reading')
  const [level, setLevel] = useState('Beginner')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const router = useRouter()

  async function handleSubmit(e: any){
    e.preventDefault()
    const res = await fetch('/api/auth/register', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ fullName, email, phone, language, course, level, password }) })
    const data = await res.json()
    if (res.ok) router.push('/login')
    else setMessage(data.message)
  }

  return (
    <div className="max-w-md mx-auto p-6 border rounded-md">
      <h2 className="text-xl font-semibold">Create your account</h2>
      <form onSubmit={handleSubmit} className="mt-4 space-y-3">
        <input value={fullName} onChange={e=>setFullName(e.target.value)} placeholder="Full name" className="w-full border rounded px-3 py-2" />
        <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" className="w-full border rounded px-3 py-2" />
        <input value={phone} onChange={e=>setPhone(e.target.value)} placeholder="Phone" className="w-full border rounded px-3 py-2" />
        <select value={language} onChange={e=>setLanguage(e.target.value)} className="w-full border rounded px-3 py-2">
          <option value="en">English</option>
          <option value="ar">العربية</option>
          <option value="lg">Luganda</option>
        </select>
        <input value={password} onChange={e=>setPassword(e.target.value)} type="password" placeholder="Password" className="w-full border rounded px-3 py-2" />
        <div>
          <button className="w-full px-4 py-2 bg-brandBlue text-white rounded">Register</button>
        </div>
        {message && <div className="text-sm text-red-600">{message}</div>}
      </form>
    </div>
  )
}

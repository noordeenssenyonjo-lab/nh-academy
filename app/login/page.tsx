import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Login(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const router = useRouter()

  async function handleSubmit(e: any){
    e.preventDefault()
    const res = await fetch('/api/auth/login', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email, password }) })
    const data = await res.json()
    if (res.ok) router.push('/dashboard')
    else setMessage(data.message)
  }

  return (
    <div className="max-w-md mx-auto p-6 border rounded-md">
      <h2 className="text-xl font-semibold">Welcome back!</h2>
      <form onSubmit={handleSubmit} className="mt-4 space-y-3">
        <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" className="w-full border rounded px-3 py-2" />
        <input value={password} onChange={e=>setPassword(e.target.value)} type="password" placeholder="Password" className="w-full border rounded px-3 py-2" />
        <div>
          <button className="w-full px-4 py-2 bg-brandGreen text-white rounded">Login</button>
        </div>
        {message && <div className="text-sm text-red-600">{message}</div>}
      </form>
    </div>
  )
}

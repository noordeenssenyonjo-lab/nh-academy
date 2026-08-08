import { cookies } from 'next/headers'
import { useState } from 'react'

export default function SetupPage(){
  const [fullName, setFullName] = useState('muhammad abdulnoor')
  const [email, setEmail] = useState('nharabicacademy@gmail.com')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  async function handleSubmit(e: any){
    e.preventDefault()
    const res = await fetch('/api/setup/create-admin', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ fullName, email, password }) })
    const data = await res.json()
    if (res.ok) setMessage('Admin account created. Please login.')
    else setMessage(data.message || 'Failed')
  }

  return (
    <div className="max-w-md mx-auto p-6 border rounded-md">
      <h2 className="text-xl font-semibold">Initial Admin Setup</h2>
      <p className="text-sm text-gray-600 mt-2">Create the initial administrator for the academy. This page will be disabled once an admin exists.</p>
      <form onSubmit={handleSubmit} className="mt-4 space-y-3">
        <div>
          <label className="text-sm">Full name</label>
          <input value={fullName} onChange={e => setFullName(e.target.value)} className="w-full mt-1 border rounded px-3 py-2" />
        </div>
        <div>
          <label className="text-sm">Email</label>
          <input value={email} onChange={e => setEmail(e.target.value)} className="w-full mt-1 border rounded px-3 py-2" />
        </div>
        <div>
          <label className="text-sm">Password</label>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="w-full mt-1 border rounded px-3 py-2" />
        </div>
        <div>
          <button className="w-full px-4 py-2 bg-brandGreen text-white rounded">Create Admin</button>
        </div>
        {message && <div className="text-sm mt-2">{message}</div>}
      </form>
    </div>
  )
}

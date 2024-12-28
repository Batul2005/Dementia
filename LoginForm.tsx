'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginForm() {
  const [email, setEmail] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const response = await fetch('/api/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    })

    if (response.ok) {
      router.push('/dashboard')
    } else {
      alert('Login failed')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xs">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
        className="w-full px-3 py-2 border rounded-md mb-4"
      />
      <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md">
        Login
      </button>
    </form>
  )
}


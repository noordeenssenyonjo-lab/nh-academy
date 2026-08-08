// lightweight auth helpers
import { useEffect, useState } from 'react'
import { initFirebase } from './firebase'

export function useCurrentUser() {
  const [user, setUser] = useState<any>(null)
  useEffect(() => {
    const fb = initFirebase()
    if (!fb) return
    const { auth, db } = fb
    const unsub = auth.onAuthStateChanged(u => setUser(u))
    return () => unsub()
  }, [])
  return user
}

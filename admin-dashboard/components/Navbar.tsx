'use client'
import { useDispatch } from 'react-redux'
import { logout } from '@/store/authSlice'

export default function Navbar() {
  const dispatch = useDispatch()

  return (
    <header className="flex justify-between items-center p-4 border-b">
      <h1 className="font-semibold">Admin Dashboard</h1>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </header>
  )
}
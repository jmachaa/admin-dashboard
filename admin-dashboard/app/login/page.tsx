'use client'
import { useRouter } from 'next/navigation'

export default function Login() {
  const router = useRouter()

  return (
    <div className="h-screen flex items-center justify-center">
      <button
        onClick={() => router.push('/dashboard')}
        className="px-6 py-2 bg-black text-white rounded"
      >
        Login
      </button>
    </div>
  );
}
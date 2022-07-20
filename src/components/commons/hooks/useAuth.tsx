import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function useAuth() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (!localStorage.getItem('accessToken')) {
      alert('로그인을 먼저 해 주세요!!')
      router.push('/fleamarket/login')
    } else {
      setIsLoading(false)
    }
  }, [])
  return {
    isLoading: isLoading,
  }
}

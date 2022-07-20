import { useRouter } from 'next/router'
import { useEffect } from 'react'

export const withAuth = (Component: any) => (props: any) => {
  const router = useRouter()
  useEffect(() => {
    if (!document.cookie) {
      alert('로그인이 필요한 서비스 입니다.')
      router.push('/fleamarket/login')
    }
  }, [])
  return <Component {...props} />
}

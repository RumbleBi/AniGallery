import { useApolloClient, useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import { ChangeEvent, MouseEvent, useContext, useState } from 'react'
import { GlobalContext } from '../../../../../pages/_app'
import {
  IMutation,
  IMutationLoginUserArgs,
} from '../../../../commons/types/generated/types'
import FleaMarketLoginUI from './fleamarketLogin.presenter'
import { FETCH_USER_LOGGED_IN, LOGIN_USER } from './fleamarketLogin.queries'

export default function FleaMarketLogin() {
  const router = useRouter()
  const [isActive, setIsActive] = useState(false)
  const [loginUser] = useMutation<
    Pick<IMutation, 'loginUser'>,
    IMutationLoginUserArgs
  >(LOGIN_USER)

  const { setAccessToken, setUserInfo, isLoggedIn, setIsLoggedIn } =
    useContext(GlobalContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const client = useApolloClient()

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
    if (event.target.value && email && password) {
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
    if (event.target.value && email && password) {
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }
  const onClickBtn = async () => {
    try {
      const result = await loginUser({
        variables: {
          email,
          password,
        },
      })
      const accessToken = result.data?.loginUser.accessToken || ''
      if (setAccessToken) {
        setAccessToken(accessToken || '')
        const resultUserInfo = await client.query({
          query: FETCH_USER_LOGGED_IN,
          context: {
            headers: { authorization: `Bearer ${accessToken}` },
          },
        })

        const userInfo = resultUserInfo.data.fetchUserLoggedIn
        if (setAccessToken) setAccessToken(accessToken)
        if (setUserInfo) setUserInfo(userInfo)

        document.cookie = `accessToken=${accessToken}`
        document.cookie = `userInfo=${JSON.stringify(userInfo)}`
      }
      setIsLoggedIn(true)
      router.push('/fleamarket/main')
    } catch (error) {
      if (error instanceof Error) alert(error.message)
    }
  }

  const onClickMenu = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target instanceof Element) router.push(event.target.id)
  }
  return (
    <FleaMarketLoginUI
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      onClickBtn={onClickBtn}
      onClickMenu={onClickMenu}
      isActive={isActive}
    />
  )
}

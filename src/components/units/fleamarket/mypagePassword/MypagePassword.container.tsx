import { useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import { ChangeEvent, useContext, useState } from 'react'
import { GlobalContext } from '../../../../../pages/_app'
import {
  IMutation,
  IMutationResetUserPasswordArgs,
} from '../../../../commons/types/generated/types'
import MyPagePasswordUI from './MypagePassword.presenter'
import { LOGOUT_USER, RESET_USER_PASSWORD } from './MypagePassword.queries'
export default function MyPagePassword() {
  const { setIsLoggedIn } = useContext(GlobalContext)
  const [newPassword, setNewPassword] = useState('')
  const [newPasswordCheck, setNewPasswordCheck] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [passwordErrorCheck, setPasswordErrorCheck] = useState('')
  const router = useRouter()
  // router
  const onClickPointInfo = () => {
    router.push('/fleamarket/mypage/pointInfo')
  }
  const onClickPWChange = () => {
    router.push('/fleamarket/mypage/changePassword')
  }
  const onClickPickedList = () => {
    router.push('/fleamarket/mypage/pickedList')
  }
  const onClickSelling = () => {
    router.push('/fleamarket/mypage/selling')
  }
  const onClickBuying = () => {
    router.push('/fleamarket/mypage/buying')
  }
  const RegexPassword =
    // 숫자, 영문, 특수문자 각 1자리 이상이면서 8자에서 16자 사이 통과
    /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/
  const [logoutUser] = useMutation(LOGOUT_USER)
  const [resetUserPassword] = useMutation<
    Pick<IMutation, 'resetUserPassword'>,
    IMutationResetUserPasswordArgs
  >(RESET_USER_PASSWORD)

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setNewPassword(event.target.value)
    if (!RegexPassword.test(event.target.value)) {
      setPasswordError('올바르지 않은 형식의 비밀번호입니다.')
    } else {
      setPasswordError('')
    }
  }
  const onChangePasswordCheck = (event: ChangeEvent<HTMLInputElement>) => {
    setNewPasswordCheck(event.target.value)
    if (!RegexPassword.test(event.target.value)) {
      setPasswordErrorCheck('올바르지 않은 형식의 비밀번호입니다.')
    } else {
      setPasswordErrorCheck('')
    }
  }

  const onClickResetPassword = async () => {
    if (newPassword !== newPasswordCheck) {
      alert('변경할 비밀번호가 일치하지 않습니다.')
      return
    }
    try {
      await resetUserPassword({
        variables: {
          password: newPasswordCheck,
        },
      })
    } catch (error) {
      if (error instanceof Error) alert(error.message)
    }
    try {
      await logoutUser()

      setIsLoggedIn(false)
      alert('비밀번호가 변경되었습니다! 다시 로그인해 주세요!')
      router.push('/fleamarket/login')
    } catch (error) {
      if (error instanceof Error) alert(error.message)
    }
  }

  return (
    <MyPagePasswordUI
      onClickPWChange={onClickPWChange}
      onClickPickedList={onClickPickedList}
      onClickSelling={onClickSelling}
      onClickBuying={onClickBuying}
      onClickPointInfo={onClickPointInfo}
      onChangePasswordCheck={onChangePasswordCheck}
      onChangePassword={onChangePassword}
      onClickResetPassword={onClickResetPassword}
      passwordError={passwordError}
      passwordErrorCheck={passwordErrorCheck}
    />
  )
}

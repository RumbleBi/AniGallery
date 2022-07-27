import { useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import { useState, ChangeEvent } from 'react'

import {
  IMutation,
  IMutationCreateUserArgs,
} from '../../../../commons/types/generated/types'
import FleaMarketSigninUI from './fleamarketSignin.presenter'
import { CREATE_USER } from './fleamarketSignin.queries'

export default function FleaMarketSignin() {
  // 정규식을 활용하여 가입 양식 설정
  const RegexEmail =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i
  // .뒤에 2~3글자만 통과
  const RegexPassword =
    /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/
  // 숫자, 영문, 특수문자 각 1자리 이상이면서 8자에서 16자 사이 통과
  const RegexPasswordCheck =
    /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/
  // isActive 활성화를 위해 설정
  const RegexName = /[ㄱ-힣]/
  // 한글만
  const [createUser] = useMutation<
    Pick<IMutation, 'createUser'>,
    IMutationCreateUserArgs
  >(CREATE_USER)

  const router = useRouter()

  const [isActive, setIsActive] = useState(false)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordCheck, setPasswordCheck] = useState('')
  const [name, setName] = useState('')

  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [passwordCheckError, setPasswordCheckError] = useState('')
  const [nameError, setNameError] = useState('')

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
    if (!RegexEmail.test(event.target.value)) {
      setEmailError('올바르지 않은 이메일 입니다.')
    } else {
      setEmailError('')
    }
    if (
      RegexEmail.test(event.target.value) &&
      password &&
      passwordCheck &&
      name
    ) {
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
    if (!RegexPassword.test(event.target.value)) {
      setPasswordError('올바르지 않은 비밀번호 입니다.')
    } else {
      setPasswordError('')
    }
    if (
      RegexPassword.test(event.target.value) &&
      email &&
      passwordCheck &&
      name
    ) {
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }
  const onChangePasswordCheck = (event: ChangeEvent<HTMLInputElement>) => {
    setPasswordCheck(event.target.value)
    if (event.target.value !== password) {
      setPasswordCheckError('비밀번호가 일치하지 않습니다.')
    } else {
      setPasswordCheckError('')
    }
    if (
      RegexPasswordCheck.test(event.target.value) &&
      email &&
      password &&
      name
    ) {
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }

  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
    if (!RegexName.test(event.target.value)) {
      setNameError('한글만 가능합니다.')
    } else {
      setNameError('')
    }
    if (
      RegexName.test(event.target.value) &&
      email &&
      password &&
      passwordCheck
    ) {
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }

  const onClickSubmit = async () => {
    if (!isActive) {
      alert('양식에 오류가 있습니다.')
      return
    }
    try {
      await createUser({
        variables: {
          createUserInput: {
            email,
            password,
            name,
          },
        },
      })
      alert('회원가입을 축하드립니다!')
      router.push('/fleamarket/login')
    } catch (error) {
      if (error instanceof Error) alert(error.message)
    }
  }
  return (
    <FleaMarketSigninUI
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      onChangePasswordCheck={onChangePasswordCheck}
      onChangeName={onChangeName}
      onClickSubmit={onClickSubmit}
      emailError={emailError}
      passwordError={passwordError}
      passwordCheckError={passwordCheckError}
      nameError={nameError}
      isActive={isActive}
    />
  )
}

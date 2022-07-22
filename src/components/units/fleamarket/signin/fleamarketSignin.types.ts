import { ChangeEvent } from 'react'

export interface IActiveBtnProps {
  isActive: boolean
}

export interface IFleaMarketSigninUIProps {
  onChangeEmail: (event: ChangeEvent<HTMLInputElement>) => void
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void
  onChangePasswordCheck: (event: ChangeEvent<HTMLInputElement>) => void
  onChangeName: (event: ChangeEvent<HTMLInputElement>) => void
  onClickSubmit: () => void
  emailError: string
  passwordError: string
  passwordCheckError: string
  nameError: string
  isActive: boolean
}

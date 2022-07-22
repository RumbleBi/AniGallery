import { ChangeEvent } from 'react'

export interface IMyPagePasswordUIProps {
  onClickPWChange: () => void
  onClickPickedList: () => void
  onClickSelling: () => void
  onClickBuying: () => void
  onClickPointInfo: () => void
  onChangePasswordCheck: (event: ChangeEvent<HTMLInputElement>) => void
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void
  onClickResetPassword: () => void
  passwordError: string
  passwordErrorCheck: string
}

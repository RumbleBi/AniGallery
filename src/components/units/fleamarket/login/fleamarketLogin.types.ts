import { ChangeEvent, MouseEvent } from 'react'

export interface IActiveBtnProps {
  isActive: boolean
}

export interface IFleaMarketLoginUIProps {
  onChangeEmail: (event: ChangeEvent<HTMLInputElement>) => void
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void
  onClickBtn: (event: MouseEvent<HTMLButtonElement>) => void
  onClickMenu: (event: MouseEvent<HTMLDivElement>) => void
  isActive: boolean
}

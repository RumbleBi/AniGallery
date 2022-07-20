import { ChangeEvent } from 'react'
import { IQuery } from '../../../../commons/types/generated/types'

export interface IBoardWriteProps {
  isEdit: boolean
  data?: Pick<IQuery, 'fetchBoard'>
}

export interface IUpdateBoardInput {
  post?: string
  content?: string
  youtubeUrl?: string
  boardAddress?: {
    zipcode?: string
    address?: string
    addressDetail?: string
  }
}
export interface IBoardWriteUIProps {
  isEdit: boolean // presenter
  isActive: boolean
  data?: Pick<IQuery, 'fetchBoard'>
  isOpen: boolean
  zipcode: string
  address: string
  addressDetail: string
  image: [string]

  writerError: string
  passwordError: string
  postError: string
  contentError: string

  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void
  onChangePost: (event: ChangeEvent<HTMLInputElement>) => void
  onChangeContent: (event: ChangeEvent<HTMLTextAreaElement>) => void
  onChangeYoutubeUrl: (event: ChangeEvent<HTMLInputElement>) => void
  onChangeAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void
  onClickAddressSearch: () => void
  onClickAddressCancel: () => void
  onSuccessAddressSearch: (data: any) => void
  onClickSubmit: () => void
  onClickUpdate: () => void
}

export interface IRegisterBtnProps {
  isActive: boolean // style
}

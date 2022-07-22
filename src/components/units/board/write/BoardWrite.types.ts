import { ChangeEvent, MutableRefObject, RefObject } from 'react'
import { IQuery } from '../../../../commons/types/generated/types'

export interface IBoardWriteProps {
  isEdit: boolean
  data?: Pick<IQuery, 'fetchBoard'>
}

export interface IUpdateBoardInput {
  post?: string
  content?: string
  youtubeUrl?: string
  images?: string[]
}

export interface IBoardWriteUIProps {
  isActive: boolean
  image: string[]
  fileRef: RefObject<HTMLInputElement>
  data?: Pick<IQuery, 'fetchBoard'>
  isEdit: boolean
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void
  onChangePost: (event: ChangeEvent<HTMLInputElement>) => void
  onChangeContent: (event: ChangeEvent<HTMLTextAreaElement>) => void
  onChangeYoutubeUrl: (event: ChangeEvent<HTMLInputElement>) => void
  onChangeFile: (image: string, index: number) => void
  onClickSubmit: () => void
  onClickUpdate: () => void
  onClickImage: () => void
  writerError?: string
  passwordError?: string
  postError?: string
  contentError?: string
  inputRef?: MutableRefObject<HTMLInputElement> | undefined
  onChangeAddressDetail?: (event: ChangeEvent<HTMLInputElement>) => void
  onClickAddressSearch?: () => void
  onClickAddressCancel?: () => void
  onSuccessAddressSearch?: (data: any) => void
  isOpen?: boolean
}
export interface IRegisterBtnProps {
  isActive: boolean // style
}

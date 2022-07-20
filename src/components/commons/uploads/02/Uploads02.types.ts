import { ChangeEvent, RefObject } from 'react'

export interface IUploads02Props {
  fileUrl: string
  defaultFileUrl?: string
  onChangeFileUrl: (fileUrl: string) => void
}

export interface IUploads02UIProps {
  fileRef: RefObject<HTMLInputElement>
  fileUrl: string
  defaultFileUrl?: string
  onClickUpload: () => void
  onChangeFile: (event: ChangeEvent<HTMLInputElement>) => void
}

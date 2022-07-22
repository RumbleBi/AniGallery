import { ChangeEvent, Dispatch, SetStateAction } from 'react'
import { IUseditemQuestion } from '../../../../../commons/types/generated/types'

export interface IUpdateUseditemQuestionInput {
  contents?: string
}
export interface IUseditemCommentWriteProps {
  setIsEdit: Dispatch<SetStateAction<boolean>>
  el?: IUseditemQuestion
  isEdit: boolean
}

export interface IUseditemCommentWriteUIProps {
  onClickCommentWrite: () => Promise<void>
  onClickCommentUpdate: () => Promise<void>
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void
  contents: string
  el?: IUseditemQuestion
  isEdit: boolean
  onClickCommentCancel: () => void
}

import { ChangeEvent, Dispatch, SetStateAction } from 'react'
import { IBoardComment } from '../../../../commons/types/generated/types'

export interface IBoardCommentWriteProps {
  isEdit?: boolean
  el?: IBoardComment
  setIsEdit?: Dispatch<SetStateAction<boolean>>
}

export interface IUpdateBoardCommentInput {
  contents?: string
  rating?: number
}

export interface IBoardCommentWriteUIProps {
  content: string
  isEdit?: boolean
  el?: IBoardComment

  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void
  onChangeContent: (event: ChangeEvent<HTMLTextAreaElement>) => void
  onChangeStar: (value: number) => void

  onClickCommentWrite: () => void
  onClickCommentUpdate: () => void
}

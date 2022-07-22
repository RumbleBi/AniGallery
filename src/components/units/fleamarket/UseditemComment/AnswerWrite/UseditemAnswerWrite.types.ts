import { Dispatch, SetStateAction } from 'react'
import {
  IUseditemQuestion,
  IUseditemQuestionAnswer,
} from '../../../../../commons/types/generated/types'

export interface IUseditemAnswerWriteProps {
  isEdit: boolean
  setIsEdit: Dispatch<SetStateAction<boolean>>
  el: IUseditemQuestion
  elId: string | undefined
  answersData?: IUseditemQuestionAnswer
}

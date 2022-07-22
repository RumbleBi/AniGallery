import {
  IUseditem,
  IUseditemQuestion,
  IUseditemQuestionAnswer,
} from '../../../../../commons/types/generated/types'
export interface IUseditemAnswerListProps {
  answersData: IUseditemQuestionAnswer
  elId: string
  useditemQuestionId: string | undefined
}

export interface IUseditemAnswerListUIProps {
  onLoadMore: () => void
  answersData: IUseditemQuestionAnswer
  elId?: string
}
export interface IUseditemAnswerListItemUIProps {
  elId?: string
  el?: any
  answersData?: IUseditemQuestionAnswer
}

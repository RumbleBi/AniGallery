import { IUseditemQuestion } from '../../../../../commons/types/generated/types'

export interface IUseditemAnswerListProps {
  answersData: IUseditemQuestion
  elId?: string
}

export interface IUseditemAnswerListUIProps {
  onLoadMore: () => void
  answersData: IUseditemQuestion
  elId?: IUseditemQuestion
}

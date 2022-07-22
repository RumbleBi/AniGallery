import {
  IQuery,
  IUseditemQuestion,
  IUseditemQuestionAnswer,
} from '../../../../../commons/types/generated/types'

export interface IUseditemCommentListUIProps {
  data: Pick<IQuery, 'fetchUseditemQuestions'> | undefined
  onLoadMore: () => void
  el?: IUseditemQuestion
}

export interface IUseditemCommentListUIItemProps {
  el?: IUseditemQuestion
  onClickAnswerComment?: () => void
  elId?: string
}

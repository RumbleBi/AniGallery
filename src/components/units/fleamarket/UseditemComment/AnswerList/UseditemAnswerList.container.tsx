import { useQuery } from '@apollo/client'
import {
  IQuery,
  IQueryFetchUseditemQuestionAnswersArgs,
} from '../../../../../commons/types/generated/types'
import { FETCH_USEDITEM_QUESTION_ANSWERS } from './UseditemAnswerList.queries'
import UseditemAnswerListUI from './UseditemAnswerList.presenter'
import { IUseditemAnswerListProps } from './UseditemAnswerList.types'

export default function UseditemAnswerList(props: IUseditemAnswerListProps) {
  const { data, fetchMore } = useQuery<
    Pick<IQuery, 'fetchUseditemQuestionAnswers'>,
    IQueryFetchUseditemQuestionAnswersArgs
  >(FETCH_USEDITEM_QUESTION_ANSWERS, {
    variables: {
      useditemQuestionId: props.elId,
      page: 1,
    },
  })

  function onLoadMore() {
    if (!props.answersData) return
    fetchMore({
      variables: {
        page:
          Math.ceil(
            props.answersData?.fetchUseditemQuestionAnswers?.length / 10
          ) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchUseditemQuestionAnswers)
          return {
            fetchUseditemQuestionAnswers: [
              ...prev.fetchUseditemQuestionAnswers,
            ],
          }
        return {
          fetchUseditemQuestionAnswers: [
            ...prev.fetchUseditemQuestionAnswers,
            ...fetchMoreResult.fetchUseditemQuestionAnswers,
          ],
        }
      },
    })
  }
  return (
    <UseditemAnswerListUI
      onLoadMore={onLoadMore}
      answersData={props.answersData}
      elId={props.elId}
    />
  )
}

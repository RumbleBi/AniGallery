import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'

import {
  IQuery,
  IQueryFetchUseditemQuestionsArgs,
} from '../../../../../commons/types/generated/types'
import UseditemCommentListUI from './UseditemCommentList.presenter'
import { FETCH_USEDITEM_QUESTIONS } from './UseditemCommentList.queries'

export default function UseditemCommentList() {
  const router = useRouter()
  const { data, fetchMore } = useQuery<
    Pick<IQuery, 'fetchUseditemQuestions'>,
    IQueryFetchUseditemQuestionsArgs
  >(FETCH_USEDITEM_QUESTIONS, {
    variables: { useditemId: String(router.query.useditemId) },
  })
  function onLoadMore() {
    if (!data) return

    fetchMore({
      variables: {
        page: Math.ceil(data?.fetchUseditemQuestions.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchUseditemQuestions)
          return { fetchUseditemQuestions: [...prev.fetchUseditemQuestions] }
        return {
          fetchUseditemQuestions: [
            ...prev.fetchUseditemQuestions,
            ...fetchMoreResult.fetchUseditemQuestions,
          ],
        }
      },
    })
  }
  return <UseditemCommentListUI data={data} onLoadMore={onLoadMore} />
}

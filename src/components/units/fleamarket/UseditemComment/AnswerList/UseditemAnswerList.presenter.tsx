import InfiniteScroll from 'react-infinite-scroller'
import UseditemAnswerListItemUI from './UseditemAnswerList.presenterItem'
import { IUseditemAnswerListUIProps } from './UseditemAnswerList.types'

export default function UseditemAnswerListUI(
  props: IUseditemAnswerListUIProps
) {
  if (!props.answersData) return <div />

  return (
    <>
      <InfiniteScroll pageStart={0} loadMore={props.onLoadMore} hasMore={true}>
        {props.answersData?.fetchUseditemQuestionAnswers?.map((el) => (
          <UseditemAnswerListItemUI
            key={el._id}
            el={el}
            answersData={props.answersData}
            elId={props.elId}
          />
        ))}
      </InfiniteScroll>
    </>
  )
}

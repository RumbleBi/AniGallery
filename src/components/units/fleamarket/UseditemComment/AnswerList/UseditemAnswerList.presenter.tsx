import InfiniteScroll from 'react-infinite-scroller'
import UseditemAnswerListItemUI from './UseditemAnswerList.presenterItem'

export default function UseditemAnswerListUI(props) {
  if (!props.answersData) return <div />

  return (
    <>
      <InfiniteScroll pageStart={0} loadMore={props.onLoadMore} hasMore={true}>
        {props.answersData?.fetchUseditemQuestionAnswers.map((el) => (
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

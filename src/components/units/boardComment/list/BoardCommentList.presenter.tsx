import { IBoardCommentListUIProps } from './BoardCommentList.types'
import InfiniteScroll from 'react-infinite-scroller'
import BoardCommentListItemsUI from './BoardCommentListItems'

export default function BoardCommentListUI(props: IBoardCommentListUIProps) {
  if (!props.data) return <div /> // https://stackoverflow.com/questions/39624782/return-and-render-a-div-in-react
  return (
    <InfiniteScroll pageStart={0} loadMore={props.onLoadMore} hasMore={true}>
      {props.data?.fetchBoardComments.map((el) => (
        <BoardCommentListItemsUI key={el._id} el={el} />
      ))}
    </InfiniteScroll>
  )
}

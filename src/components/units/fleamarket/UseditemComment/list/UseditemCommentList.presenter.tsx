import * as S from './UseditemCommentList.styles'
import InfiniteScroll from 'react-infinite-scroller'
import UseditemCommentListUIItem from './UseditemCommentList.presenterItem'
import { IUseditemCommentListUIProps } from './UseditemCommnetList.types'

export default function UseditemCommentListUI(
  props: IUseditemCommentListUIProps
) {
  if (!props.data) return <div />
  return (
    <S.Position>
      <S.Wrapper style={{ border: 'none' }}>
        <S.CommentWrapper>
          <InfiniteScroll
            pageStart={0}
            loadMore={props.onLoadMore}
            hasMore={true}
          >
            {props.data?.fetchUseditemQuestions.map((el) => (
              <UseditemCommentListUIItem key={el._id} el={el} />
            ))}
          </InfiniteScroll>
        </S.CommentWrapper>
      </S.Wrapper>
    </S.Position>
  )
}

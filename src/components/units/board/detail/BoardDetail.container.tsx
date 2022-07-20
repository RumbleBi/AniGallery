import { useRouter } from 'next/router'
import { useQuery, useMutation } from '@apollo/client'
import BoardDetailUI from './BoardDetail.presenter'
import { Modal } from 'antd'
import {
  FETCH_BOARD,
  DELETE_BOARD,
  LIKE_BOARD,
  DISLIKE_BOARD,
} from './BoardDetail.queries'
import {
  IMutation,
  IMutationDeleteBoardArgs,
  IMutationLikeBoardArgs,
  IMutationDislikeBoardArgs,
  IQuery,
  IQueryFetchBoardArgs,
} from '../../../../commons/types/generated/types'

export default function BoardDetail() {
  const router = useRouter()

  const [deleteBoard] = useMutation<
    Pick<IMutation, 'deleteBoard'>,
    IMutationDeleteBoardArgs
  >(DELETE_BOARD)
  const [likeBoard] = useMutation<
    Pick<IMutation, 'likeBoard'>,
    IMutationLikeBoardArgs
  >(LIKE_BOARD)
  const [dislikeBoard] = useMutation<
    Pick<IMutation, 'dislikeBoard'>,
    IMutationDislikeBoardArgs
  >(DISLIKE_BOARD)

  const { data } = useQuery<Pick<IQuery, 'fetchBoard'>, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: { boardId: String(router.query.boardId) },
    }
  )
  const onClickLikeBoard = () => {
    likeBoard({
      variables: { boardId: String(router.query.boardId) },
      refetchQueries: [
        { query: FETCH_BOARD, variables: { boardId: router.query.boardId } },
      ],
    })
  }
  const onClickDislikeBoard = () => {
    dislikeBoard({
      variables: { boardId: String(router.query.boardId) },
      refetchQueries: [
        { query: FETCH_BOARD, variables: { boardId: router.query.boardId } },
      ],
    })
  }

  const onClickMoveToList = () => {
    router.push('/boards')
  }

  const onClickMoveToEdit = () => {
    router.push(`/boards/${router.query.boardId}/edit`)
  }

  const onClickDeleteBoard = async () => {
    try {
      await deleteBoard({
        variables: { boardId: String(router.query.boardId) },
      })
      Modal.success({ content: '삭제가 완료되었습니다.' })
      router.push('/boards/')
    } catch (error) {
      Modal.error({ content: '통신에 문제가 있습니다.' })
    }
  }
  return (
    <BoardDetailUI
      data={data}
      onClickMoveToList={onClickMoveToList}
      onClickMoveToEdit={onClickMoveToEdit}
      onClickDeleteBoard={onClickDeleteBoard}
      onClickLikeBoard={onClickLikeBoard}
      onClickDislikeBoard={onClickDislikeBoard}
    />
  )
}

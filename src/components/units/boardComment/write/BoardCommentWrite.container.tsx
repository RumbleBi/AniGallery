import { useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import { ChangeEvent, useState } from 'react'
import {
  IMutation,
  IMutationCreateBoardCommentArgs,
  IMutationUpdateBoardCommentArgs,
} from '../../../../commons/types/generated/types'
import {
  CREATE_BOARD_COMMENT,
  UPDATE_BOARD_COMMENT,
} from './BoardCommentWrite.queries'
import { FETCH_BOARD_COMMENTS } from '../list/BoardCommentList.queries'
import BoardCommentWriteUI from './BoardCommentWrite.presenter'
import { Modal } from 'antd'
import {
  IBoardCommentWriteProps,
  IUpdateBoardCommentInput,
} from './BoardCommentWrite.types'
export default function BoardCommentWrite(props: IBoardCommentWriteProps) {
  const router = useRouter()

  const [writer, setWriter] = useState('')
  const [password, setPassword] = useState('')
  const [content, setContent] = useState('')
  const [star, setStar] = useState(0)
  // Pick 은 뽑는거, Omit은 제외하고 나머지들 부르기

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value)
  }
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }
  const onChangeContent = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value)
  }
  const onChangeStar = (value: number) => {
    setStar(value)
  }
  const [createBoardComment] = useMutation<
    Pick<IMutation, 'createBoardComment'>,
    IMutationCreateBoardCommentArgs
  >(CREATE_BOARD_COMMENT)

  const onClickCommentWrite = async () => {
    try {
      await createBoardComment({
        variables: {
          createBoardCommentInput: {
            writer: writer,
            password: password,
            contents: content,
            rating: star,
          },
          boardId: String(router.query.boardId),
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: String(router.query.boardId) },
          },
        ],
      })
      Modal.success({ content: '댓글을 달았습니다.' })
    } catch (error) {
      if (error) Modal.error({ content: '서버 에러입니다 다시 시도해 주세요.' })
    }
  }
  const [updateBoardComment] = useMutation<
    Pick<IMutation, 'updateBoardComment'>,
    IMutationUpdateBoardCommentArgs
  >(UPDATE_BOARD_COMMENT)

  const onClickCommentUpdate = async () => {
    if (!content) {
      Modal.error({ content: '내용이 수정되어야 합니다.' })
      return
    }
    if (!password) {
      Modal.error({ content: '비밀번호가 틀립니다.' })
      return
    }

    try {
      const updateBoardCommentInput: IUpdateBoardCommentInput = {}
      if (content) updateBoardCommentInput.contents = content
      if (star !== props.el?.rating) updateBoardCommentInput.rating = star

      await updateBoardComment({
        variables: {
          updateBoardCommentInput,
          password,
          boardCommentId: props.el?._id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      })
      props.setIsEdit(false)
    } catch (error) {
      Modal.error({ content: '서버 에러입니다 다시 시도해 주세요.' })
    }
  }

  return (
    <BoardCommentWriteUI
      content={content}
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeContent={onChangeContent}
      onClickCommentWrite={onClickCommentWrite}
      onClickCommentUpdate={onClickCommentUpdate}
      onChangeStar={onChangeStar}
      isEdit={props.isEdit}
      el={props.el}
    />
  )
}

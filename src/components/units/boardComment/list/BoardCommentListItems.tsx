import { IBoardCommentListItemsUIProps } from './BoardCommentList.types'
import * as S from './BoardCommentList.styles'
import { useMutation } from '@apollo/client'
import {
  DELETE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from './BoardCommentList.queries'
import {
  IMutation,
  IMutationDeleteBoardCommentArgs,
} from '../../../../commons/types/generated/types'
import BoardCommentWrite from '../write/BoardCommentWrite.container'
import { ChangeEvent, useState } from 'react'
import { Modal } from 'antd'
import { useRouter } from 'next/router'
import { getDate } from '../../../../commons/libraries/utils'
import { BsFillPencilFill, BsFillTrashFill } from 'react-icons/bs'

export default function BoardCommentListItemsUI(
  props: IBoardCommentListItemsUIProps
) {
  const router = useRouter()
  const [isEdit, setIsEdit] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [password, setPassword] = useState('')
  const [deleteBoardComment] = useMutation<
    Pick<IMutation, 'deleteBoardComment'>,
    IMutationDeleteBoardCommentArgs
  >(DELETE_BOARD_COMMENT)

  const onClickDeleteModal = () => {
    setIsOpen(true)
  }
  const onClickCancel = () => {
    setIsOpen(false)
  }
  const onChangeDeletePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }
  const onClickDelete = async () => {
    try {
      await deleteBoardComment({
        variables: {
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
      setIsOpen(false)
    } catch (error) {
      if (error instanceof Error)
        Modal.error({ content: '비밀번호가 다릅니다.' })
    }
  }

  const onClickUpdate = () => {
    setIsEdit(true)
  }
  return (
    <>
      {isOpen && (
        <Modal
          visible={true}
          onOk={onClickDelete}
          onCancel={onClickCancel}
          cancelText={'취소'}
          okText={'확인'}
          closable={false}
          bodyStyle={{
            width: '500px',
            height: '100px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <S.PasswordText>비밀번호</S.PasswordText>
          <S.PasswordInput type="password" onChange={onChangeDeletePassword} />
        </Modal>
      )}
      {!isEdit && (
        <S.Position>
          <S.Wrapper key={props.el._id}>
            <div>
              <S.CommentWriter>{props.el?.writer}</S.CommentWriter>
              <S.CommentStar value={props.el?.rating} disabled />
            </div>
            <S.Comment>{props.el?.contents}</S.Comment>
            <S.CommentOptionWrapper>
              <S.CommentCreatedAt>
                {getDate(props.el?.createdAt)}
              </S.CommentCreatedAt>
              <S.OptBtnWrapper>
                <BsFillPencilFill
                  style={{ marginRight: '20px' }}
                  onClick={onClickUpdate}
                />
                <BsFillTrashFill onClick={onClickDeleteModal} />
              </S.OptBtnWrapper>
            </S.CommentOptionWrapper>
          </S.Wrapper>
        </S.Position>
      )}
      {isEdit && (
        <BoardCommentWrite
          isEdit={isEdit}
          setIsEdit={setIsEdit}
          el={props.el}
        />
      )}
    </>
  )
}

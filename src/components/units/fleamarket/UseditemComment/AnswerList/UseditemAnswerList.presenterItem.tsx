import { useMutation } from '@apollo/client'
import { BsFillPencilFill, BsFillTrashFill } from 'react-icons/bs'
import { useState } from 'react'
import {
  IMutation,
  IMutationDeleteUseditemQuestionAnswerArgs,
} from '../../../../../commons/types/generated/types'
import {
  DELETE_USEDITEM_QUESTION_ANSWER,
  FETCH_USEDITEM_QUESTION_ANSWERS,
} from './UseditemAnswerList.queries'
import * as S from './UseditemAnswerList.styles'
import UseditemAnswerWrite from '../AnswerWrite/UseditemAnswerWrite'
import { IUseditemAnswerListItemUIProps } from './UseditemAnswerList.types'

export default function UseditemAnswerListItemUI(
  props: IUseditemAnswerListItemUIProps
) {
  const [isEdit, setIsEdit] = useState(false)
  const [deleteUseditemQuestionAnswer] = useMutation<
    Pick<IMutation, 'deleteUseditemQuestionAnswer'>,
    IMutationDeleteUseditemQuestionAnswerArgs
  >(DELETE_USEDITEM_QUESTION_ANSWER)

  const onClickUpdate = async () => {
    setIsEdit(true)
  }
  async function onClickDelete() {
    try {
      await deleteUseditemQuestionAnswer({
        variables: {
          useditemQuestionAnswerId: props.el?._id,
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTION_ANSWERS,
            variables: {
              useditemQuestionId: props.elId,
            },
          },
        ],
      })
      alert('대댓글을 삭제하였습니다.')
    } catch (error) {
      if (error instanceof Error) alert(error.message)
    }
  }

  return (
    <S.Position>
      {!isEdit && (
        <S.Wrapper>
          <S.UserWrapper>
            {props.el?.user?.picture?.length ? (
              <S.Picture
                src={`https://storage.googleapis.com/${props.el?.user.picture}`}
              />
            ) : (
              <S.Picture src="/images/DefaultAvatar.png" />
            )}

            <S.Name>{props.el?.user?.name}</S.Name>
          </S.UserWrapper>
          <S.ContentsWrapper>
            <S.Contents>{props.el?.contents}</S.Contents>
            <div>
              <BsFillPencilFill
                style={{
                  marginRight: '20px',
                  fontSize: '18px',
                  color: '#2155cd',
                  cursor: 'pointer',
                }}
                onClick={onClickUpdate}
              />
              <BsFillTrashFill
                style={{
                  marginRight: '20px',
                  fontSize: '18px',
                  color: '#2155cd',
                  cursor: 'pointer',
                }}
                onClick={onClickDelete}
              />
            </div>
          </S.ContentsWrapper>
        </S.Wrapper>
      )}
      {isEdit && (
        <UseditemAnswerWrite
          isEdit={isEdit}
          setIsEdit={setIsEdit}
          el={props.el}
          answersData={props.answersData}
          elId={props.elId}
        />
      )}
    </S.Position>
  )
}

import {
  CREATE_USEDITEM_QUESTION_ANSWER,
  UPDATE_USEDITEM_QUESTION_ANSWER,
  FETCH_USEDITEM_QUESTION_ANSWERS,
} from './UseditemAnswerWrite.queries'
import * as S from './UseditemAnswerWrite.styles'
import { useMutation } from '@apollo/client'
import {
  IMutation,
  IMutationCreateUseditemQuestionAnswerArgs,
  IMutationUpdateUseditemQuestionAnswerArgs,
} from '../../../../../commons/types/generated/types'
import { ChangeEvent, useState } from 'react'
import { IUseditemAnswerWriteProps } from './UseditemAnswerWrite.types'

export default function UseditemAnswerWrite(props: IUseditemAnswerWriteProps) {
  const [contents, setContents] = useState('')

  const [createUseditemQuestionAnswer] = useMutation<
    Pick<IMutation, 'createUseditemQuestionAnswer'>,
    IMutationCreateUseditemQuestionAnswerArgs
  >(CREATE_USEDITEM_QUESTION_ANSWER)
  const [updateUseditemQuestionAnswer] = useMutation<
    Pick<IMutation, 'updateUseditemQuestionAnswer'>,
    IMutationUpdateUseditemQuestionAnswerArgs
  >(UPDATE_USEDITEM_QUESTION_ANSWER)

  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value)
  }
  const onChangeRewriteContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value)
  }
  async function onClickWrite() {
    try {
      await createUseditemQuestionAnswer({
        variables: {
          createUseditemQuestionAnswerInput: {
            contents,
          },
          useditemQuestionId: props.el?._id,
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
      alert('대댓글을 작성하였습니다.')
    } catch (error) {
      if (error instanceof Error) alert(error.message)
    }
  }
  const onClickUpdate = async () => {
    try {
      await updateUseditemQuestionAnswer({
        variables: {
          updateUseditemQuestionAnswerInput: {
            contents,
          },
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
      props.setIsEdit((prev: boolean) => !prev)
      alert('대댓글을 수정하였습니다.')
    } catch (error) {
      if (error instanceof Error) alert(error.message)
    }
  }

  return (
    <S.Position>
      <S.Wrapper>
        {props.isEdit ? (
          <S.InputContents
            placeholder="100자 이내로 입력가능합니다."
            maxLength={100}
            onChange={onChangeRewriteContents}
            defaultValue={props.el?.contents}
          />
        ) : (
          <S.InputContents
            placeholder="100자 이내로 입력가능합니다."
            maxLength={100}
            onChange={onChangeContents}
          />
        )}
        <S.Options>
          <S.AnswerCommentBtn
            onClick={props.isEdit ? onClickUpdate : onClickWrite}
          >
            {props.isEdit ? '수정하기' : '등록하기'}
          </S.AnswerCommentBtn>
        </S.Options>
      </S.Wrapper>
    </S.Position>
  )
}

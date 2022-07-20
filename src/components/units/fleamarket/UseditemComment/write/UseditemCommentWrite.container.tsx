import { useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import { ChangeEvent, useState } from 'react'
import {
  IMutation,
  IMutationCreateUseditemQuestionArgs,
  IMutationUpdateUseditemQuestionArgs,
  IUpdateUseditemQuestionInput,
} from '../../../../../commons/types/generated/types'
import UseditemCommentWriteUI from './UseditemCommentWrite.presenter'
import {
  CREATE_USEDITEM_QUESTION,
  UPDATE_USEDITEM_QUESTION,
} from './UseditemCommentWrite.queries'
import { Modal } from 'antd'
import { FETCH_USEDITEM_QUESTIONS } from '../list/UseditemCommentList.queries'

export default function UseditemCommentWrite(props) {
  const router = useRouter()

  const [contents, setContents] = useState('')

  const [createUseditemQuestion] = useMutation<
    Pick<IMutation, 'createUseditemQuestion'>,
    IMutationCreateUseditemQuestionArgs
  >(CREATE_USEDITEM_QUESTION)

  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value)
  }

  const onClickCommentWrite = async () => {
    try {
      await createUseditemQuestion({
        variables: {
          createUseditemQuestionInput: {
            contents,
          },
          useditemId: String(router.query.useditemId),
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTIONS,
            variables: { useditemId: String(router.query.useditemId) },
          },
        ],
      })
      alert('댓글이 작성되었습니다.')
    } catch (error) {
      if (error instanceof Error) alert(error.message)
    }
  }

  const [updateUseditemQuestion] = useMutation<
    Pick<IMutation, 'updateUseditemQuestion'>,
    IMutationUpdateUseditemQuestionArgs
  >(UPDATE_USEDITEM_QUESTION)

  const onClickCommentUpdate = async () => {
    if (!contents) {
      Modal.error({ content: '내용이 수정되어야 합니다.' })
      return
    }

    try {
      const updateUseditemQuestionInput: IUpdateUseditemQuestionInput = {}
      if (contents) updateUseditemQuestionInput.contents = contents

      await updateUseditemQuestion({
        variables: {
          updateUseditemQuestionInput,
          useditemQuestionId: props.el?._id,
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTIONS,
            variables: { useditemId: router.query.useditemId },
          },
        ],
      })
      props.setIsEdit(false)
      alert('댓글이 수정되었습니다.')
    } catch (error) {
      if (error instanceof Error) alert(error.message)
    }
  }
  const onClickCommentCancel = () => {
    props.setIsEdit(false)
  }

  return (
    <UseditemCommentWriteUI
      onClickCommentWrite={onClickCommentWrite}
      onClickCommentUpdate={onClickCommentUpdate}
      onChangeContents={onChangeContents}
      contents={contents}
      el={props.el}
      isEdit={props.isEdit}
      onClickCommentCancel={onClickCommentCancel}
    />
  )
}

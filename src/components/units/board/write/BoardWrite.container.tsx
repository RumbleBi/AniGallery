import { ChangeEvent, useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import { FetchResult, useMutation } from '@apollo/client'
import BoardWriteUI from './BoardWrite.presenter'
import { CREATE_BOARD, UPDATE_BOARD, UPLOAD_FILE } from './BoardWrite.queries'
import { IBoardWriteProps, IUpdateBoardInput } from './BoardWrite.types'
import {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUpdateBoardArgs,
  IMutationUploadFileArgs,
} from '../../../../commons/types/generated/types'
import { Modal } from 'antd'
import { checkFileValidation } from '../../../../commons/libraries/utils'

export default function BoardWrite(props: IBoardWriteProps) {
  const router = useRouter()
  // useRef로 포커싱 되도록 함
  const inputRef = useRef<HTMLInputElement>()
  const fileRef = useRef<HTMLInputElement>(null)
  // 렌더링 될 때, 작성자에 포커싱이 되도록 함
  useEffect(() => {
    inputRef.current?.focus()
  }, [])
  const [createBoard] = useMutation<
    Pick<IMutation, 'createBoard'>,
    IMutationCreateBoardArgs
  >(CREATE_BOARD)
  const [updateBoard] = useMutation<
    Pick<IMutation, 'updateBoard'>,
    IMutationUpdateBoardArgs
  >(UPDATE_BOARD)
  const [uploadFile] = useMutation<
    Pick<IMutation, 'uploadFile'>,
    IMutationUploadFileArgs
  >(UPLOAD_FILE)

  const [isActive, setIsActive] = useState(false)
  const [youtubeUrl, setYoutubeUrl] = useState('')
  const [writer, setWriter] = useState('')
  const [password, setPassword] = useState('')
  const [post, setPost] = useState('')
  const [content, setContent] = useState('')
  const [image, setImage] = useState(['', '', ''])
  const [writerError, setWriterError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [postError, setPostError] = useState('')
  const [contentError, setContentError] = useState('')

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value)
    if (event.target.value !== '') {
      setWriterError('')
    }
    if (event.target.value && writer && password && post && content) {
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
    if (event.target.value !== '') {
      setPasswordError('')
    }
    if (event.target.value && writer && password && post && content) {
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }
  const onChangePost = (event: ChangeEvent<HTMLInputElement>) => {
    setPost(event.target.value)
    if (event.target.value !== '') {
      setPostError('')
    }
    if (event.target.value && writer && password && post && content) {
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }
  const onChangeContent = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value)
    if (event.target.value !== '') {
      setContentError('')
    }
    if (event.target.value && writer && password && post && content) {
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }
  const onChangeYoutubeUrl = (event: ChangeEvent<HTMLInputElement>) => {
    setYoutubeUrl(event.target.value)
  }
  const onChangeFile = (images: string, index: number) => {
    const newImageUrl = [...image]
    newImageUrl[index] = images
    setImage(newImageUrl)
  }
  const onClickSubmit = async () => {
    if (writer === '') {
      setWriterError('작성자를 입력해주세요.')
      window.scrollTo(0, 0)
    }
    if (password.length > 16 || password.length < 8) {
      setPasswordError('비밀번호를 8~16자리 사이로 입력해주세요.')
      window.scrollTo(0, 0)
    }
    if (post === '') {
      setPostError('제목을 입력해주세요.')
      window.scrollTo(0, 200)
    }
    if (content === '') {
      setContentError('내용을 입력해 주세요.')
      window.scrollTo(0, 400)
    }
    if (
      writer !== '' &&
      password.length >= 8 &&
      password.length <= 16 &&
      post !== '' &&
      content !== ''
    ) {
      try {
        const result: FetchResult<
          Pick<IMutation, 'createBoard'>,
          Record<string, any>,
          Record<string, any>
        > = await createBoard({
          variables: {
            createBoardInput: {
              writer,
              password,
              title: post,
              contents: content,
              youtubeUrl,
              images: image,
            },
          },
        })
        router.push(`/boards/${result?.data?.createBoard._id}`)
      } catch (error) {
        if (error instanceof Error) alert(error.message)
      }
    }
  }
  const onClickUpdate = async () => {
    const currentFiles = JSON.stringify(image)
    const defaultFiles = JSON.stringify(props.data?.fetchBoard.images)
    const isChangedFiles = currentFiles !== defaultFiles

    if (!post && !content) {
      Modal.error({ content: '제목, 내용중에 입력을 해야합니다.' })
      return
    }
    if (!password) {
      Modal.error({ content: '비밀번호를 입력해 주세요.' })
      return
    }
    const updateBoardInput: IUpdateBoardInput = {}
    if (post) updateBoardInput.post = post
    if (content) updateBoardInput.content = content
    if (youtubeUrl) updateBoardInput.youtubeUrl = youtubeUrl
    if (isChangedFiles) updateBoardInput.images = image

    try {
      await updateBoard({
        variables: {
          boardId: JSON.stringify(router.query.boardId),
          password,
          updateBoardInput: updateBoardInput,
        },
      })
      Modal.success({ content: '수정이 완료되었습니다.' })
      router.push(`/boards/${router.query.boardId}`)
    } catch (error) {
      if (error instanceof Error) alert(error.message)
    }
  }
  const onClickImage = () => {
    fileRef.current?.click()
  }
  return (
    <BoardWriteUI
      isActive={isActive}
      image={image}
      fileRef={fileRef}
      data={props.data} // boards/edit 에서 온 데이터
      isEdit={props.isEdit} // boards/new 에서 온 데이터
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangePost={onChangePost}
      onChangeContent={onChangeContent}
      onChangeYoutubeUrl={onChangeYoutubeUrl}
      onChangeFile={onChangeFile}
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
      onClickImage={onClickImage}
      writerError={writerError}
      passwordError={passwordError}
      postError={postError}
      contentError={contentError}
      inputRef={inputRef}
    />
  )
}

import { useMutation, useQuery } from '@apollo/client'
import { Modal } from 'antd'
import { useRouter } from 'next/router'
import { useState } from 'react'
import {
  IQuery,
  IQueryFetchUseditemArgs,
} from '../../../../commons/types/generated/types'
import RegDetailUI from './RegDetail.presenter'
import {
  CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING,
  DELETE_USED_ITEM,
  FETCH_USED_ITEM,
  FETCH_USER_LOGGED_IN,
  TOGGLE_USEDITEM_PICK,
} from './RegDetail.queries'

export default function RegDetail() {
  const router = useRouter()
  const [myPick, setMyPick] = useState(false)

  const [deleteUseditem] = useMutation(DELETE_USED_ITEM)
  const [toggleUseditemPick] = useMutation(TOGGLE_USEDITEM_PICK)
  const [createPointTransactionOfBuyingAndSelling] = useMutation(
    CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING
  )
  const { data: userData } =
    useQuery<Pick<IQuery, 'fetchUserLoggedIn'>>(FETCH_USER_LOGGED_IN)
  const { data } = useQuery<
    Pick<IQuery, 'fetchUseditem'>,
    IQueryFetchUseditemArgs
  >(FETCH_USED_ITEM, {
    variables: { useditemId: String(router.query.useditemId) },
  })
  const onClickMyPick = async () => {
    try {
      setMyPick((prev) => !prev)
      await toggleUseditemPick({
        variables: { useditemId: String(router.query.useditemId) },
      })
    } catch (error) {
      if (error instanceof Error) alert(error.message)
    }
    alert('찜목록에 추가되었습니다!')
  }
  const onClickMyPickCancel = async () => {
    try {
      setMyPick((prev) => !prev)
      await toggleUseditemPick({
        variables: { useditemId: String(router.query.useditemId) },
      })
    } catch (error) {
      if (error instanceof Error) alert(error.message)
    }
    alert('찜목록에서 빠졌습니다!')
  }

  const onClickMoveToMain = () => {
    router.push('/fleamarket/main')
  }
  const onClickMoveToEdit = () => {
    router.push(`/fleamarket/${router.query.useditemId}/edit`)
  }
  const onClickDeleteUseditem = async () => {
    try {
      await deleteUseditem({
        variables: { useditemId: String(router.query.useditemId) },
      })
      Modal.success({ content: '삭제가 완료되었습니다.' })
      router.push('/fleamarket/main')
    } catch (error) {
      if (error instanceof Error) alert(error.message)
    }
  }

  const onClickBuyUseditem = async () => {
    try {
      await createPointTransactionOfBuyingAndSelling({
        variables: { useritemId: router.query.useditemId },
      })
      alert('구매하셨습니다!')
      router.push('/fleamarket/main')
    } catch (error) {
      if (error instanceof Error) alert(error.message)
    }
  }
  return (
    <RegDetailUI
      data={data && data}
      userData={userData}
      onClickDeleteUseditem={onClickDeleteUseditem}
      onClickMoveToMain={onClickMoveToMain}
      onClickMoveToEdit={onClickMoveToEdit}
      onClickMyPick={onClickMyPick}
      onClickMyPickCancel={onClickMyPickCancel}
      myPick={myPick}
      onClickBuyUseditem={onClickBuyUseditem}
    />
  )
}

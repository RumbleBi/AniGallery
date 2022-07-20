import { useMutation, useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import { ChangeEvent, useState } from 'react'
import {
  IMutation,
  IMutationCreatePointTransactionOfLoadingArgs,
  IQuery,
} from '../../../../commons/types/generated/types'
import PaymentBasketUI from './Payment.presenter'
import {
  CREATE_POINT_TRANSACTION_OF_LOADING,
  FETCH_USER_LOGGED_IN,
} from './Payment.queries'
export default function PaymentBasket() {
  const router = useRouter()
  const [amount, setAmount] = useState(0)

  const [createPointTransactionOfLoading] = useMutation<
    Pick<IMutation, 'createPointTransactionOfLoading'>,
    IMutationCreatePointTransactionOfLoadingArgs
  >(CREATE_POINT_TRANSACTION_OF_LOADING)

  const { data } =
    useQuery<Pick<IQuery, 'fetchUserLoggedIn'>>(FETCH_USER_LOGGED_IN)

  const onClickAmount = (event: ChangeEvent<HTMLButtonElement>) => {
    setAmount(Number(event?.currentTarget.id))
  }

  const onClickPayment = () => {
    const IMP = window.IMP // 생략 가능
    IMP.init('imp49910675') // Example: imp00000000
    // IMP.request_pay(param, callback) 결제창 호출
    IMP.request_pay(
      {
        // param
        pg: 'html5_inicis',
        pay_method: 'card',
        // merchant_uid: "ORD20180131-0000011", // 상품ID 없애거나 중복되지않게 설정해놔야한다
        name: '충전금액',
        amount: amount,
        buyer_email: `${data?.fetchUserLoggedIn.email}`,
        buyer_name: `${data?.fetchUserLoggedIn.name}`,
        buyer_tel: '010-1111-1111',
        buyer_addr: '길바닥',
        buyer_postcode: '11111',
        // m_redirect_url: "", // 모바일의 경우 리다이렉트의 필요성이 있기 때문에 써줘야한다 웹훅노티피케이션
      },
      async (rsp: any) => {
        // callback
        if (rsp.success) {
          // 성공
          try {
            await createPointTransactionOfLoading({
              variables: {
                impUid: rsp.imp_uid,
              },
            })
            alert('결제가 완료되었습니다. 메인페이지로 이동합니다.')
            router.push('/fleamarket/main')
          } catch (error) {
            if (error instanceof Error) alert(error.message)
          }
          // 1. 백엔드에 결제관련 데이터 넘겨주기
          // 즉, 뮤테이션 실행하기
          // ex createPointTransactionsOfLoading
        } else {
          // 실패
        }
      }
    )
  }
  return (
    <PaymentBasketUI
      data={data}
      amount={amount}
      onClickPayment={onClickPayment}
      onClickAmount={onClickAmount}
    />
  )
}

// 이벤트를 발생시키는 방법
// [1. 클릭 등, 직접 이벤트 발생, 2. 가만히 있는데, 특정 시간에 자동으로 이벤트 발생 ] => 크론탭

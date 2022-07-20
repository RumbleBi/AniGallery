import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import {
  IQuery,
  IQueryFetchUseditemsIPickedArgs,
} from '../../../../commons/types/generated/types'
import MypagePickedUI from './MypagePicked.presenter'
import {
  FETCH_USEDITEMS_COUNT_I_PICKED,
  FETCH_USEDITEMS_I_PICKED,
} from './MypagePicked.queries'

export default function MypagePicked() {
  const router = useRouter()
  const { data, refetch } = useQuery<
    Pick<IQuery, 'fetchUseditemsIPicked'>,
    IQueryFetchUseditemsIPickedArgs
  >(FETCH_USEDITEMS_I_PICKED, {
    variables: { search: '', page: 1 },
  })

  // 페이지 int
  const { data: dataCount } = useQuery<
    Pick<IQuery, 'fetchUseditemsCountIPicked'>
  >(FETCH_USEDITEMS_COUNT_I_PICKED)

  // router
  const onClickPointInfo = () => {
    router.push('/fleamarket/mypage/pointInfo')
  }
  const onClickPWChange = () => {
    router.push('/fleamarket/mypage/changePassword')
  }
  const onClickPickedList = () => {
    router.push('/fleamarket/mypage/pickedList')
  }
  const onClickSelling = () => {
    router.push('/fleamarket/mypage/selling')
  }
  const onClickBuying = () => {
    router.push('/fleamarket/mypage/buying')
  }
  return (
    <MypagePickedUI
      data={data}
      count={dataCount?.fetchUseditemsCountIPicked}
      refetch={refetch}
      onClickPWChange={onClickPWChange}
      onClickPickedList={onClickPickedList}
      onClickSelling={onClickSelling}
      onClickBuying={onClickBuying}
      onClickPointInfo={onClickPointInfo}
    />
  )
}

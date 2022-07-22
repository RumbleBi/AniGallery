import { useQuery } from '@apollo/client'

import {
  IQuery,
  IQueryFetchUseditemsArgs,
  IUseditem,
} from '../../../../commons/types/generated/types'
import FleamarketMainUI from './fleamarketMain.presenter'
import { FETCH_USED_ITEMS } from './fleamarketMain.queries'
import router from 'next/router'
import { getDate2 } from '../../../../commons/libraries/utils'
import { useContext, useState } from 'react'
import { GlobalContext } from '../../../../../pages/_app'
import { useFetchUserInfo } from '../../../commons/hooks/useUserLoggedIn'

export default function FleamarketMain() {
  const { setItem } = useContext(GlobalContext)
  const [keyword, setKeyword] = useState('')
  const { data } = useFetchUserInfo()
  // 게시글목록
  const {
    data: dataItems,
    fetchMore,
    refetch,
  } = useQuery<Pick<IQuery, 'fetchUseditems'>, IQueryFetchUseditemsArgs>(
    FETCH_USED_ITEMS,
    {
      variables: { page: 1, search: '' },
    }
  )
  // 최근본 상품 보이게하기
  const todayDate = getDate2(new Date())

  const onLoadMore = () => {
    if (!dataItems) return
    fetchMore({
      variables: {
        page: Math.ceil(dataItems?.fetchUseditems?.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchUseditems) {
          return { fetchUseditems: [...prev.fetchUseditems] }
        }
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ],
        }
      },
    })
  }
  // 게시글 등록하기
  const onClickReg = () => {
    router.push('/fleamarket/reg')
  }
  // 게시글 상세페이지 이동
  const onClickMoveToDetail = (el: IUseditem) => () => {
    const baskets = JSON.parse(localStorage.getItem(todayDate) || '[]')
    const temp = baskets.filter((filterEl: any) => filterEl._id !== el._id)
    const { __typename, ...plus } = el
    temp.unshift(plus)
    localStorage.setItem(todayDate, JSON.stringify(temp))
    setItem(temp)
    router.push(`/fleamarket/${el._id}`)
  }
  // 검색페이지
  function onChangeKeyword(value: string) {
    setKeyword(value)
  }
  return (
    <FleamarketMainUI
      data={data}
      dataItems={dataItems}
      onClickReg={onClickReg}
      onLoadMore={onLoadMore}
      onClickMoveToDetail={onClickMoveToDetail}
      onChangeKeyword={onChangeKeyword}
      keyword={keyword}
      refetch={refetch}
    />
  )
}

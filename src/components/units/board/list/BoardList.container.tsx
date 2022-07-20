import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from './BoardList.queries'
import BoardListUI from './BoardList.presenter'
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from '../../../../commons/types/generated/types'
import _ from 'lodash'
import { ChangeEvent, useState } from 'react'

export default function BoardList() {
  const router = useRouter()
  const [keyword, setKeyword] = useState<string>()
  const [isMatched, setIsMatched] = useState(false)

  const { data, refetch } = useQuery<
    Pick<IQuery, 'fetchBoards'>,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS, { variables: { page: 1 } })

  const { data: dataBoardsCount } = useQuery<
    Pick<IQuery, 'fetchBoardsCount'>,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT)

  const getDebounce = _.debounce((el) => {
    refetch({ search: el, page: 1 })
    setKeyword(el)
  }, 200)

  const onIsMatched = () => {
    setIsMatched(true)
  }
  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value)
  }
  const onClickPage = (event: ChangeEvent<HTMLButtonElement>) => {
    if (event.target instanceof Element)
      refetch({ search: keyword, page: Number(event.target.id) })
  }
  const onClickMoveBoardWrite = () => {
    router.push('/boards/new')
  }
  const onClickMoveBoardDetail = (event: any) => {
    router.push(`/boards/${event.currentTarget.id}`)
  }
  return (
    <BoardListUI
      data={data}
      keyword={keyword}
      onClickMoveBoardWrite={onClickMoveBoardWrite}
      onClickMoveBoardDetail={onClickMoveBoardDetail}
      onClickPage={onClickPage}
      refetch={refetch}
      count={dataBoardsCount?.fetchBoardsCount}
      onChangeSearch={onChangeSearch}
      onIsMatched={onIsMatched}
      isMatched={isMatched}
    />
  )
}

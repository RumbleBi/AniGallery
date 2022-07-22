import { ChangeEvent, MouseEvent } from 'react'
import { ApolloQueryResult } from '@apollo/client'
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from '../../../../commons/types/generated/types'

export interface IBoardListUIProps {
  data?: Pick<IQuery, 'fetchBoards'>
  keyword: string
  onClickMoveBoardWrite: () => void
  onClickMoveBoardDetail: (event: MouseEvent<HTMLDivElement>) => void
  onClickPage: (event: ChangeEvent<HTMLButtonElement>) => void
  refetch: (
    variables: Partial<IQueryFetchBoardsArgs>
  ) => Promise<ApolloQueryResult<Pick<IQuery, 'fetchBoards'>>>
  count?: number
  onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void
  onIsMatched: () => void
  isMatched: boolean
}

export interface IStyleProps {
  isMatched?: boolean
  index?: number | undefined
}

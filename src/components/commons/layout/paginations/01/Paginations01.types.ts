import { ApolloQueryResult } from '@apollo/client'
import { MouseEvent } from 'react'
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchPointTransactionsOfBuyingArgs,
  IQueryFetchPointTransactionsOfLoadingArgs,
  IQueryFetchPointTransactionsOfSellingArgs,
  IQueryFetchUseditemsIPickedArgs,
} from '../../../../../commons/types/generated/types'

export interface IPaginations01Props {
  count?: number
  refetch?: (
    variables: Partial<IQueryFetchBoardsArgs>
  ) => Promise<ApolloQueryResult<Pick<IQuery, 'fetchBoards'>>>
  refetchBuying?: (
    variables?: Partial<IQueryFetchPointTransactionsOfBuyingArgs> | undefined
  ) => Promise<
    ApolloQueryResult<Pick<IQuery, 'fetchPointTransactionsOfBuying'>>
  >
  refetchPicked?: (
    variables?: Partial<IQueryFetchUseditemsIPickedArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, 'fetchUseditemsIPicked'>>>
  refetchSelling?: (
    variables?: Partial<IQueryFetchPointTransactionsOfSellingArgs> | undefined
  ) => Promise<
    ApolloQueryResult<Pick<IQuery, 'fetchPointTransactionsOfSelling'>>
  >
  refetchPointInfo?: (
    variables?: Partial<IQueryFetchPointTransactionsOfLoadingArgs> | undefined
  ) => Promise<
    ApolloQueryResult<Pick<IQuery, 'fetchPointTransactionsOfLoading'>>
  >
}

export interface IPaginations01UIProps {
  startPage: number
  lastPage: number
  activedPage: number

  onClickPage: (event: MouseEvent<HTMLSpanElement>) => void
  onClickPrevPage: () => void
  onClickNextPage: () => void
}

import { ApolloQueryResult } from '@apollo/client'
import {
  IQuery,
  IQueryFetchPointTransactionsOfBuyingArgs,
} from '../../../../commons/types/generated/types'

export interface IMypageBuyingUIProps {
  data: Pick<IQuery, 'fetchPointTransactionsOfBuying'> | undefined
  count: number | undefined
  refetch: (
    variables?: Partial<IQueryFetchPointTransactionsOfBuyingArgs> | undefined
  ) => Promise<
    ApolloQueryResult<Pick<IQuery, 'fetchPointTransactionsOfBuying'>>
  >
  onClickPWChange: () => void
  onClickPickedList: () => void
  onClickSelling: () => void
  onClickBuying: () => void
  onClickPointInfo: () => void
}

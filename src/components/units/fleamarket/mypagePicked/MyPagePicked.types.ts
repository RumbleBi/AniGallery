import { ApolloQueryResult } from '@apollo/client'
import {
  IQuery,
  IQueryFetchUseditemsIPickedArgs,
} from '../../../../commons/types/generated/types'

export interface IMypagePickedUIProps {
  data: Pick<IQuery, 'fetchUseditemsIPicked'> | undefined
  count: number | undefined
  refetch: (
    variables?: Partial<IQueryFetchUseditemsIPickedArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, 'fetchUseditemsIPicked'>>>
  onClickPWChange: () => void
  onClickPickedList: () => void
  onClickSelling: () => void
  onClickBuying: () => void
  onClickPointInfo: () => void
}

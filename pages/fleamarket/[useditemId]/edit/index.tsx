import { useQuery, gql } from '@apollo/client'
import { useRouter } from 'next/router'
import {
  IQuery,
  IQueryFetchUseditemArgs,
} from '../../../../src/commons/types/generated/types'
import { withAuth } from '../../../../src/components/commons/hocs/withAuth'
import FleamarketReg from '../../../../src/components/units/fleamarket/reg/RegProduct.container'
const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      useditemAddress {
        zipcode
        address
        addressDetail
      }
      tags
      images
      createdAt
    }
  }
`

function RegEditPage() {
  const router = useRouter()
  const { data } = useQuery<
    Pick<IQuery, 'fetchUseditem'>,
    IQueryFetchUseditemArgs
  >(FETCH_USED_ITEM, {
    variables: { useditemId: String(router.query.useditemId) },
  })
  return <FleamarketReg data={data} isEdit={true} />
}
export default withAuth(RegEditPage)

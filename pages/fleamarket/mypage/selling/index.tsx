import MypageSelling from '../../../../src/components/units/fleamarket/mypageSelling/MypageSelling.container'
import { withAuth } from '../../../../src/components/commons/hocs/withAuth'

function SellingPage() {
  return <MypageSelling />
}
export default withAuth(SellingPage)

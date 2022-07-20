import MypageBuying from '../../../../src/components/units/fleamarket/mypageBuying/MypageBuying.container'
import { withAuth } from '../../../../src/components/commons/hocs/withAuth'

function BuyingPage() {
  return <MypageBuying />
}

export default withAuth(BuyingPage)

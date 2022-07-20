import { withAuth } from '../../../../src/components/commons/hocs/withAuth'
import MypagePicked from '../../../../src/components/units/fleamarket/mypagePicked/MypagePicked.container'

function pickedListPage() {
  return <MypagePicked />
}

export default withAuth(pickedListPage)

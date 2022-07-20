import MypagePointInfo from '../../../../src/components/units/fleamarket/mypagePointInfo/MypagePointInfo.container'
import { withAuth } from '../../../../src/components/commons/hocs/withAuth'

function PointInfo() {
  return <MypagePointInfo />
}

export default withAuth(PointInfo)

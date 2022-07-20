import { withAuth } from '../../../src/components/commons/hocs/withAuth'
import MypageMain from '../../../src/components/units/fleamarket/mypage/MyPageMain.container'

function MyPagePage() {
  return <MypageMain />
}

export default withAuth(MyPagePage)

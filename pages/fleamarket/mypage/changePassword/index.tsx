import { withAuth } from '../../../../src/components/commons/hocs/withAuth'
import MyPagePassword from '../../../../src/components/units/fleamarket/mypagePassword/MypagePassword.container'

function PasswordPage() {
  return <MyPagePassword />
}

export default withAuth(PasswordPage)

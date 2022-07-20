import { withAuth } from '../../../src/components/commons/hocs/withAuth'
import FleamarketRge from '../../../src/components/units/fleamarket/reg/RegProduct.container'

function RegProductPage() {
  return <FleamarketRge isEdit={false} />
}
export default withAuth(RegProductPage)

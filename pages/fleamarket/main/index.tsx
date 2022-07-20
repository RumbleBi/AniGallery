import { withAuth } from "../../../src/components/commons/hocs/withAuth";
import FleamarketMain from "../../../src/components/units/fleamarket/main/fleamarketMain.container";

function FleamarketMainPage() {
  return <FleamarketMain />;
}

export default withAuth(FleamarketMainPage);

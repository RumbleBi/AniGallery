import { withAuth } from "../../../src/components/commons/hocs/withAuth";
import PaymentBasket from "../../../src/components/units/fleamarket/paymentBasket/Payment.container";

function PaymentPage() {
  return <PaymentBasket />;
}

export default withAuth(PaymentPage);

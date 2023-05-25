import Head from "next/head";
import * as S from "./Payment.styles";
import { IPaymentBasketUIProps } from "./Payment.types";

export default function PaymentBasketUI(props: IPaymentBasketUIProps) {
  return (
    <S.Position>
      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      <S.Wrapper>
        <S.Title>
          <div>포인트 충전 페이지</div>
        </S.Title>
        <S.SelectPaymentWrapper>
          <div>
            <S.ChargingBtn id={"5000"} onClick={props.onClickAmount}>
              5000원
            </S.ChargingBtn>
            <S.ChargingBtn id={"10000"} onClick={props.onClickAmount}>
              10000원
            </S.ChargingBtn>
            <S.ChargingBtn id={"20000"} onClick={props.onClickAmount}>
              20000원
            </S.ChargingBtn>
          </div>
          <div>
            <S.ChargingBtn id={"50000"} onClick={props.onClickAmount}>
              50000원
            </S.ChargingBtn>
            <S.ChargingBtn id={"100"} onClick={props.onClickAmount}>
              100원
            </S.ChargingBtn>
            <S.ChargeAmount>금액 : {props.amount}</S.ChargeAmount>
          </div>
        </S.SelectPaymentWrapper>
        <S.ChargeBtn onClick={props.onClickPayment}>충전하기</S.ChargeBtn>
      </S.Wrapper>
    </S.Position>
  );
}

import * as S from './MypagePointInfo.styles'
import { getDate } from '../../../../commons/libraries/utils'
import Paginations01 from '../../../commons/layout/paginations/01/Paginations01.container'
import { IMypagePointInfoUIProps } from './MypagePointInfo.types'

export default function MypagePointInfoUI(props: IMypagePointInfoUIProps) {
  return (
    <S.Position>
      <S.Title>포인트내역</S.Title>
      <S.Wrapper>
        <S.MenuBar>
          <S.FirstMenu onClick={props.onClickPointInfo}>포인트내역</S.FirstMenu>
          <div onClick={props.onClickPWChange}>비밀번호변경</div>
          <div onClick={props.onClickSelling}>상품판매내역</div>
          <div onClick={props.onClickBuying}>상품구매내역</div>
          <div onClick={props.onClickPickedList}>내가찜한상품</div>
        </S.MenuBar>
        <S.ViewWrapper>
          <S.PointListWrapper>
            {props.data?.fetchPointTransactionsOfLoading.map(
              (el, index: number) => (
                <div key={el._id}>
                  <span>{index + 1}</span>
                  <span>충전금액 : {el.amount}원</span>
                  <span>충전포인트 : {el.balance}원</span>
                  <span>충전일자 : {getDate(el.createdAt)}</span>
                </div>
              )
            )}
          </S.PointListWrapper>
          <S.PaginationsWrapper>
            <Paginations01
              refetchPointInfo={props.refetch}
              count={props.count}
            />
          </S.PaginationsWrapper>
        </S.ViewWrapper>
      </S.Wrapper>
    </S.Position>
  )
}

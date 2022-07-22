import { getDate } from '../../../../commons/libraries/utils'
import { IPointTransaction } from '../../../../commons/types/generated/types'
import Paginations01 from '../../../commons/layout/paginations/01/Paginations01.container'
import * as S from './MypageSelling.styles'
import { IMypageSellingUIProps } from './MypageSelling.types'

export default function MypageSellingUI(props: IMypageSellingUIProps) {
  return (
    <S.Position>
      <S.Title>상품판매내역</S.Title>
      <S.Wrapper>
        <S.MenuBar>
          <S.FirstMenu onClick={props.onClickPointInfo}>포인트내역</S.FirstMenu>
          <div onClick={props.onClickPWChange}>비밀번호변경</div>
          <div onClick={props.onClickSelling}>상품판매내역</div>
          <div onClick={props.onClickBuying}>상품구매내역</div>
          <div onClick={props.onClickPickedList}>내가찜한상품</div>
        </S.MenuBar>
        <S.ViewWrapper>
          <div style={{ height: '700px' }}>
            {props.data?.fetchPointTransactionsOfSelling?.map(
              (el: IPointTransaction, index: number) => (
                <S.PointListWrapper key={el._id}>
                  <div style={{ width: '40px', justifyContent: 'center' }}>
                    {index + 1}
                  </div>
                  <div style={{ width: '200px' }}>
                    판매금액 : {el.amount}포인트
                  </div>
                  <div style={{ width: '600px' }}>
                    게시글제목 : {el.useditem?.remarks}
                  </div>
                  <div style={{ width: '160px', justifyContent: 'center' }}>
                    판매일자 : {getDate(el.createdAt)}
                  </div>
                </S.PointListWrapper>
              )
            )}
          </div>
          <S.PaginationsWrapper>
            <Paginations01 refetchSelling={props.refetch} count={props.count} />
          </S.PaginationsWrapper>
        </S.ViewWrapper>
      </S.Wrapper>
    </S.Position>
  )
}

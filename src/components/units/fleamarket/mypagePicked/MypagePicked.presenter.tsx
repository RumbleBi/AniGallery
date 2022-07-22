import * as S from './MypagePicked.styles'
import Paginations01 from '../../../commons/layout/paginations/01/Paginations01.container'
import { IMypagePickedUIProps } from './MyPagePicked.types'
import { IUseditem } from '../../../../commons/types/generated/types'

export default function MypagePickedUI(props: IMypagePickedUIProps) {
  return (
    <S.Position>
      <S.Title>내가찜한상품</S.Title>
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
            {props.data?.fetchUseditemsIPicked.map(
              (el: IUseditem, index: number) => (
                <S.PointListWrapper key={el._id}>
                  <div style={{ width: '40px', justifyContent: 'center' }}>
                    {index + 1}
                  </div>
                  <div style={{ width: '200px' }}>상품이름 : {el.name}</div>
                  <div style={{ width: '500px' }}>판매제목 : {el.remarks}</div>
                  <div>상품가격 : {el.price}</div>
                </S.PointListWrapper>
              )
            )}
          </div>
          <S.PaginationsWrapper>
            <Paginations01 refetchPicked={props.refetch} count={props.count} />
          </S.PaginationsWrapper>
        </S.ViewWrapper>
      </S.Wrapper>
    </S.Position>
  )
}

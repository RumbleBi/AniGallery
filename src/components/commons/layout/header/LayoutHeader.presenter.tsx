import * as S from './LayoutHeader.styles'

export default function LayoutHeaderUI(props: any) {
  return (
    <S.Position>
      <S.Wrapper>
        <S.Left>
          <S.Logo onClick={props.onClickTitle}>Ani Gallery</S.Logo>
          <div onClick={props.onClickFreeBoardList}>자유게시판</div>
          <div onClick={props.onClickFleamarketList}>중고게시판</div>
        </S.Left>
        <S.Right>
          {props.isLoggedIn ? (
            <div>
              {props.data?.fetchUserLoggedIn.picture ? (
                <img
                  onClick={props.onClickMyPage}
                  src={`https://storage.googleapis.com/${props.data?.fetchUserLoggedIn.picture}`}
                />
              ) : (
                <img src="/images/DefaultAvatar.png" />
              )}
              <div onClick={props.onClickMyPage}>
                {props.data?.fetchUserLoggedIn.name} 님
              </div>
              <S.PointInfo>
                포인트 : {props.data?.fetchUserLoggedIn.userPoint.amount}
              </S.PointInfo>
              <div onClick={props.onClickMoveToPayment}>포인트충전</div>
              <div onClick={props.onClickLogout}>로그아웃</div>
            </div>
          ) : (
            <S.LoginBtn onClick={props.onClickLogin}>로그인/가입</S.LoginBtn>
          )}
        </S.Right>
      </S.Wrapper>
    </S.Position>
  )
}

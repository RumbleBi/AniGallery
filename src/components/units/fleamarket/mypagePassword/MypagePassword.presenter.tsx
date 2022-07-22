import * as S from './MypagePassword.styles'
import { IMyPagePasswordUIProps } from './MypagePassword.types'

export default function MyPagePasswordUI(props: IMyPagePasswordUIProps) {
  return (
    <S.Position>
      <S.Title>비밀번호변경</S.Title>
      <S.Wrapper>
        <S.MenuBar>
          <S.FirstMenu onClick={props.onClickPointInfo}>포인트내역</S.FirstMenu>
          <div onClick={props.onClickPWChange}>비밀번호변경</div>
          <div onClick={props.onClickSelling}>상품판매내역</div>
          <div onClick={props.onClickBuying}>상품구매내역</div>
          <div onClick={props.onClickPickedList}>내가찜한상품</div>
        </S.MenuBar>
        <S.ViewWrapper>
          <S.PasswordWrapper>
            <div>
              <S.Text>새로운 비밀번호</S.Text>
              <S.InputPassword
                type="password"
                placeholder="8~16 자리이내로 특수문자, 대문자, 소문자를 하나 이상 넣어주세요."
                onChange={props.onChangePassword}
              />
              <S.PasswordError>{props.passwordError}</S.PasswordError>
            </div>
            <div>
              <S.Text>새로운 비밀번호 확인</S.Text>
              <S.InputPassword
                type="password"
                placeholder="8~16 자리이내로 특수문자, 대문자, 소문자를 하나 이상 넣어주세요."
                onChange={props.onChangePasswordCheck}
              />
              <S.PasswordError>{props.passwordErrorCheck}</S.PasswordError>
            </div>

            <S.ChangePassword onClick={props.onClickResetPassword}>
              비밀번호 변경
            </S.ChangePassword>
          </S.PasswordWrapper>
        </S.ViewWrapper>
      </S.Wrapper>
    </S.Position>
  )
}

import * as S from './fleamarketSignin.styles'
import { IFleaMarketSigninUIProps } from './fleamarketSignin.types'

export default function FleaMarketSigninUI(props: IFleaMarketSigninUIProps) {
  return (
    <S.Position>
      <S.Wrapper>
        <S.Logo>회원가입</S.Logo>
        <S.EmailForm>
          <S.EmailText>이메일입력</S.EmailText>
          <S.EmailInput
            type="text"
            placeholder="이메일을 적어주세요."
            onChange={props.onChangeEmail}
          />
          <S.EmailErrorText>{props.emailError}</S.EmailErrorText>
        </S.EmailForm>
        <S.PasswordForm>
          <S.PasswordText>비밀번호입력</S.PasswordText>
          <S.PasswordInput
            placeholder="8~16 자리이내로 특수문자, 대문자, 소문자를 하나 이상 넣어주세요."
            type="password"
            onChange={props.onChangePassword}
          />
          <S.PasswordErrorText>{props.passwordError}</S.PasswordErrorText>
          <S.PasswordTextCheck>비밀번호재입력</S.PasswordTextCheck>
          <S.PasswordInputCheck
            placeholder="비밀번호를 재입력 해주세요."
            type="password"
            onChange={props.onChangePasswordCheck}
          />
          <S.PasswordCheckErrorText>
            {props.passwordCheckError}
          </S.PasswordCheckErrorText>
        </S.PasswordForm>
        <S.NameForm>
          <S.NameText>닉네임</S.NameText>
          <S.NameInput
            type="text"
            placeholder="한글만 가능합니다."
            onChange={props.onChangeName}
          />
          <S.NameErrorText>{props.nameError}</S.NameErrorText>
        </S.NameForm>
        <S.SigninForm>
          <S.SigninBtn isActive={props.isActive} onClick={props.onClickSubmit}>
            가입하기
          </S.SigninBtn>
        </S.SigninForm>
      </S.Wrapper>
    </S.Position>
  )
}

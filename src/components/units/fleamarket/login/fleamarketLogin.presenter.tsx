import { Fragment, MouseEvent } from 'react'
import * as S from './fleamarketLogin.styles'

interface INavigationProps {
  onClickMenu: (event: MouseEvent<HTMLDivElement>) => void
}

const NAVIGATION_FLEAMARKET = [{ name: '회원가입', page: '/fleamarket/signin' }]

export default function FleaMarketLoginUI(props) {
  return (
    <S.Position>
      <S.Wrapper>
        <S.Logo>Ani Gallery</S.Logo>
        <S.EmailForm>
          <S.EmailText>이메일로 로그인</S.EmailText>
          <S.EmailInput placeholder="이메일" onChange={props.onChangeEmail} />
        </S.EmailForm>
        <S.PasswordForm>
          <S.PasswordText>비밀번호</S.PasswordText>
          <S.PasswordInput
            placeholder="비밀번호"
            type="password"
            onChange={props.onChangePassword}
          />
        </S.PasswordForm>
        <S.HelpForm>
          {NAVIGATION_FLEAMARKET.map((el) => (
            <div key={el.page}>
              <S.HelpText id={el.page} onClick={props.onClickMenu}>
                {el.name}
              </S.HelpText>
            </div>
          ))}
        </S.HelpForm>
        <S.LoginBtn isActive={props.isActive} onClick={props.onClickBtn}>
          로그인
        </S.LoginBtn>
      </S.Wrapper>
    </S.Position>
  )
}

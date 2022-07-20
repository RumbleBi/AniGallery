import styled from '@emotion/styled'
import { IActiveBtnProps } from './fleamarketSignin.types'

export const Position = styled.div`
  display: flex;
  justify-content: center;
`
export const Wrapper = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 1200px;
  height: 100vh;
  background-color: #e8f9fd;
`
export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #79dae8;
  font-size: 32px;
  font-weight: bold;
`
export const EmailForm = styled.div``
export const EmailText = styled.div`
  color: #79dae8;
  font-size: 20px;
`
export const EmailInput = styled.input`
  width: 400px;
  height: 50px;
  padding-left: 10px;
  font-size: 20px;
  border: none;
  border-bottom: 1px solid #0aa1dd;
  background-color: #e8f9fd;
`
export const EmailErrorText = styled.div`
  color: red;
`
export const PasswordForm = styled.div``
export const PasswordText = styled.div`
  color: #79dae8;
  font-size: 20px;
`
export const PasswordInput = styled.input`
  width: 400px;
  height: 50px;
  padding-left: 10px;
  font-size: 14px;
  border: none;
  border-bottom: 1px solid #0aa1dd;
  background-color: #e8f9fd;
`
export const PasswordTextCheck = styled.div`
  color: #79dae8;
  font-size: 20px;
`
export const PasswordInputCheck = styled.input`
  width: 400px;
  height: 50px;
  padding-left: 10px;
  font-size: 20px;
  border: none;
  border-bottom: 1px solid #0aa1dd;
  background-color: #e8f9fd;
`
export const PasswordErrorText = styled.div`
  color: red;
`
export const PasswordCheckErrorText = styled.div`
  color: red;
`
export const NameForm = styled.div``
export const NameText = styled.div`
  color: #79dae8;
  font-size: 20px;
`
export const NameInput = styled.input`
  width: 400px;
  height: 50px;
  padding-left: 10px;
  font-size: 20px;
  border: none;
  border-bottom: 1px solid #0aa1dd;
  background-color: #e8f9fd;
`
export const NameErrorText = styled.div`
  color: red;
`
export const SigninForm = styled.div``
export const SigninBtn = styled.button`
  font-size: 32px;
  width: 400px;
  height: 70px;
  border: none;
  border-radius: 10px;
  cursor: ${(props: IActiveBtnProps) =>
    props.isActive === true ? 'pointer' : 'default'};
  background-color: ${(props: IActiveBtnProps) =>
    props.isActive === true ? '#2155cd' : 'gray'};
  color: ${(props: IActiveBtnProps) =>
    props.isActive === true ? '#79dae8' : '#f2f2f2'};
  :hover {
    font-weight: bold;
  }
`

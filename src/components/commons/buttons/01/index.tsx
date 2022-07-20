import styled from '@emotion/styled'
import { ButtonHTMLAttributes } from 'react'
interface IMyButtonProps {
  isValid: boolean
}
interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isValid: boolean
  name: string
}
const MyButton = styled.button`
  width: 400px;
  border: none;
  height: 70px;
  font-size: 32px;
  border-radius: 10px;
  margin-top: 50px;
  margin-bottom: 100px;
  background-color: ${(props: IMyButtonProps) =>
    props.isValid ? '#2155cd' : 'gray'};
  font-weight: ${(props: IMyButtonProps) => (props.isValid ? 'bold' : '')};
  cursor: ${(props: IMyButtonProps) => (props.isValid ? 'pointer' : '')};
  color: ${(props: IMyButtonProps) => (props.isValid ? '#79dae8' : '#f2f2f2')};
  :hover {
    font-weight: bold;
  }
`
export default function Button01(props: IProps) {
  return (
    <form>
      <MyButton type={props.type} isValid={props.isValid}>
        {props.name}
      </MyButton>
    </form>
  )
}

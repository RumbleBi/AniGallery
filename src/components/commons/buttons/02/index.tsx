import styled from '@emotion/styled'
import { ButtonHTMLAttributes } from 'react'

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void
  name: string
}
const MyButton = styled.button`
  color: #79dae8;
  background-color: #2155cd;
  cursor: pointer;
  border: none;
  width: 150px;
  height: 50px;
  font-size: 20px;
  border-radius: 10px;
  :hover {
    font-weight: bold;
  }
`

export default function Button02(props: IProps) {
  return <MyButton onClick={props.onClick}>{props.name}</MyButton>
}

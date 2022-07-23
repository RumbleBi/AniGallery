import styled from '@emotion/styled'
interface IProps {
  type: string
  register: {}
}

const MyInput = styled.input`
  height: 50px;
  width: 600px;
  color: #79dae8;
  font-size: 20px;
  padding-left: 10px;
  border: 1px solid #0aa1dd;
  border-radius: 10px;
`

export default function Input01(props: IProps) {
  return <MyInput type={props.type} {...props.register} />
}

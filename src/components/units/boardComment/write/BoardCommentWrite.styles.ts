import styled from '@emotion/styled'
import { Rate } from 'antd'

export const Position = styled.div`
  display: flex;
  justify-content: center;
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 1200px;
  height: 300px;
  margin-bottom: 20px;
`
export const CommentTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 1200px;
  height: 40px;
  font-size: 20px;
  margin-bottom: 10px;
  color: #2155cd;
  font-weight: bold;
`
export const InputWrapper = styled.div`
  display: flex;
  width: 1200px;
`
export const InputInfo = styled.input`
  font-size: 16px;
  width: 150px;
  height: 30px;
  border: 1px solid #79dae8;
  border-radius: 10px;
  padding-left: 10px;
  margin-right: 20px;
  color: #2155cd;
`
export const Star = styled(Rate)``
export const ContentsWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
`
export const Contents = styled.textarea`
  font-size: 16px;
  width: 1200px;
  height: 150px;
  border: 1px solid #79dae8;
  border-radius: 10px;
  padding-top: 10px;
  padding-left: 10px;
  resize: none;
  color: #2155cd;
`
export const ContentsInfo = styled.span`
  margin-top: 10px;
  color: #2155cd;
  font-size: 20px;
`
export const ContentsBtn = styled.button`
  margin-top: 10px;
  font-size: 20px;
  width: 100px;
  border-radius: 10px;
  height: 40px;
  border: none;
  cursor: pointer;
  color: #0aa1dd;
  background-color: #2155cd;
  :hover {
    font-weight: bold;
  }
`

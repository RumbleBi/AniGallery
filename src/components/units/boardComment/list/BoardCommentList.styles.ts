import styled from '@emotion/styled'
import { Rate } from 'antd'
export const Position = styled.div`
  display: flex;
  justify-content: center;
`
export const Wrapper = styled.div`
  width: 1200px;
  height: 200px;
  margin-bottom: 20px;
  border-bottom: 1px solid #2155cd;
`
export const CommentWriter = styled.span`
  font-size: 18px;
  color: #2155cd;
  font-weight: bold;
  margin-right: 20px;
`
export const CommentStar = styled(Rate)``
export const Comment = styled.div`
  display: flex;
  align-items: center;
  height: 100px;
  margin-top: 10px;
  margin-bottom: 10px;
  color: #2155cd;
`
export const CommentOptionWrapper = styled.div`
  display: flex;
  width: 1200px;
  height: 30px;
  align-items: center;
  justify-content: space-between;
`
export const CommentCreatedAt = styled.span`
  color: #2155cd;
  font-weight: bold;
`
export const OptBtnWrapper = styled.div`
  display: flex;
  font-size: 20px;
  color: #2155cd;
  cursor: pointer;
`
// Modal
export const PasswordText = styled.span`
  color: #2155cd;
  font-weight: bold;
  font-size: 20px;
  margin-right: 20px;
`
export const PasswordInput = styled.input`
  border-radius: 10px;
  border: 1px solid #79dae8;
`

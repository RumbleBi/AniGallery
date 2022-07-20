import styled from '@emotion/styled'

export const Position = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Wrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 100px;
`
export const InputWrapper = styled.div``
export const InputContents = styled.textarea`
  resize: none;
  width: 1200px;
  min-height: 100px;
`
export const CommentInfoWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const CommentBtn = styled.button`
  all: unset;
  margin-right: 20px;
  font-size: 20px;
  color: #79dae8;
  background-color: #2155cd;
  width: 100px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  :hover {
    font-weight: bold;
  }
`
export const CommentLengths = styled.div`
  font-weight: bold;
  color: #0aa1dd;
  padding-right: 10px;
`

export const UserImage = styled.img`
  width: 45px;
  height: 45px;
  margin-left: 10px;
  margin-right: 20px;
  border-radius: 50px;
  background-color: white;
`
export const Name = styled.span`
  width: 1000px;
  font-size: 20px;
  cursor: default;
`
export const CreatedAt = styled.span`
  font-size: 18px;
`
export const UserWrapper = styled.div`
  border-radius: 10px;
  background-color: #2155cd;
  color: #79dae8;
  display: flex;
  align-items: center;
  width: 1200px;
  height: 50px;
  margin-bottom: 10px;
`

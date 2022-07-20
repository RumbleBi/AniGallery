import styled from '@emotion/styled'
export const Position = styled.div`
  display: flex;
  justify-content: flex-end;
`
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #79dae8;
  width: 1100px;
  height: 100px;
  margin-bottom: 10px;
  border-radius: 10px;
`
export const InputContents = styled.textarea`
  width: 950px;
  height: 80px;
  resize: none;
  padding-left: 10px;
  padding-top: 10px;
  margin-left: 20px;
  border: none;
  background-color: #e8f9fd;
  color: #2155cd;
`
export const Options = styled.div`
  width: 150px;
  height: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`
export const Counter = styled.div`
  color: #2155cd;
`
export const AnswerCommentBtn = styled.button`
  width: 100px;
  height: 30px;
  border: none;
  border-radius: 10px;
  background-color: #2155cd;
  color: #79dae8;
  cursor: pointer;
  :hover {
    font-weight: bold;
  }
`

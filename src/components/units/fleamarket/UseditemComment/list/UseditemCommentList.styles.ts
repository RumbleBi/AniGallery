import styled from '@emotion/styled'
export const Position = styled.div`
  display: flex;
  justify-content: center;
`
export const Wrapper = styled.div`
  width: 1200px;
  margin-bottom: 30px;
  border-bottom: 1px solid #2155cd;
  display: flex;
  justify-content: space-between;
`
export const Wrapper2 = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 200px;
  justify-content: space-between;
  width: 1200px;
  margin-bottom: 30px;
  border-bottom: 1px solid #2155cd;
`
export const UserWrapper = styled.div`
  border-radius: 10px;
  background-color: #2155cd;
  color: #79dae8;
  display: flex;
  align-items: center;
  width: 1200px;
  height: 50px;
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
export const Contents = styled.div`
  margin-top: 10px;
  display: flex;
  width: 1200px;
  height: 100px;
  font-size: 18px;
  background-color: red;
  color: #79dae8;
  background-color: #2155cd;
  border-radius: 10px;
  padding-left: 10px;
  padding-top: 10px;
`
export const BtnWrapper = styled.div`
  display: flex;
  width: 1200px;
  align-items: center;
  height: 50px;
  justify-content: flex-end;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 20px;
    width: 100px;
    height: 30px;
    border: none;
    background-color: #2155cd;
    color: #79dae8;
    border-radius: 10px;
    cursor: pointer;
    :hover {
      font-weight: bold;
    }
  }
`
export const CommentWrapper = styled.div`
  width: 1200px;
`
export const CommentAnswerWrapper = styled.div`
  min-height: 50px;
`

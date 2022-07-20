import styled from '@emotion/styled'

export const Position = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: bold;
  margin-top: 100px;
  margin-bottom: 50px;
  border-radius: 10px;
  width: 600px;
  height: 60px;
  background-color: #79dae8;
  color: #2155cd;
`
export const Wrapper = styled.div`
  display: flex;
  margin-bottom: 100px;
`
export const MenuBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 200px;
  height: 800px;
  background-color: #79dae8;
  border-radius: 10px 0px 0px 10px;
  border-right: 2px solid #2155cd;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 80px;
    border-bottom: 2px solid #2155cd;
    color: #2155cd;
    font-size: 24px;
    font-weight: bold;
    cursor: pointer;
    :hover {
      background-color: #2155cd;
      color: #79dae8;
    }
  }
`
export const FirstMenu = styled.div`
  border-radius: 10px 0px 0px 0px;
`
export const ViewWrapper = styled.div`
  display: flex;
  width: 1000px;
  height: 800px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: #79dae8;
  border-radius: 0px 10px 10px 0px;
`
export const PasswordWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 500px;
  div {
    display: flex;
    flex-direction: column;
  }
`
export const Text = styled.span`
  font-size: 24px;
  color: #2155cd;
  font-weight: bold;
  margin-right: 20px;
`
export const InputPassword = styled.input`
  border: 1px solid #0aa1dd;
  border-radius: 10px;
  padding-left: 10px;
  width: 600px;
  height: 40px;
  color: #2155cd;
`
export const PasswordError = styled.div`
  color: red;
`
export const ChangePassword = styled.button`
  border: none;
  cursor: pointer;
  width: 150px;
  height: 60px;
  font-size: 20px;
  color: #2155cd;
  background-color: #e8f9fd;
  border-radius: 10px;
  :hover {
    font-weight: bold;
  }
`

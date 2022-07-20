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
  div {
    margin-left: 100px;
    margin-top: 100px;
  }
`
export const PictureWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 500px;
  height: 100px;
  align-items: center;
  span {
    font-size: 20px;
    font-weight: bold;
    color: #2155cd;
    margin-right: 50px;
  }
`
export const IdWrapper = styled.div`
  color: #2155cd;
  font-size: 20px;
  font-weight: bold;
`
export const NameWrapper = styled.div`
  display: flex;
  align-items: center;
  span {
    width: 300px;
    font-size: 20px;
    font-weight: bold;
    color: #2155cd;
  }
  input {
    border: 1px solid #79dae8;
    border-radius: 10px;
    width: 200px;
    height: 40px;
    padding-left: 10px;
    color: #2155cd;
    margin-right: 50px;
  }
  button {
    width: 150px;
    height: 40px;
    border: none;
    color: #79dae8;
    background-color: #2155cd;
    border-radius: 10px;
    cursor: pointer;
    font-size: 18px;
    :hover {
      font-weight: bold;
    }
  }
`
export const PictureChangeBtn = styled.button`
  width: 100px;
  height: 50px;
  border: none;
  margin-left: 50px;
  color: #79dae8;
  background-color: #2155cd;
  border-radius: 10px;
  cursor: pointer;
  font-size: 18px;
  :hover {
    font-weight: bold;
  }
`

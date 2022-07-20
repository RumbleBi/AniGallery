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
export const PointListWrapper = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  div {
    border-bottom: 1px solid #2155cd;
    display: flex;
    align-items: center;
    height: 100%;
    color: #2155cd;
    font-size: 16px;
    font-weight: bold;
  }
`
export const PaginationsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: #2155cd;
`

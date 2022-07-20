import styled from '@emotion/styled'

export const Position = styled.div`
  display: flex;
  justify-content: center;
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 1200px;
  min-height: 600px;
  margin-top: 100px;
  background-color: #e8f9fd;
  border-radius: 10px;
  margin-bottom: 50px;
`
export const Title = styled.div`
  width: 600px;
  height: 60px;
  font-weight: bold;
  font-size: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: #79dae8;
  color: #2155cd;
`
export const SelectPaymentWrapper = styled.div`
  display: flex;
  width: 600px;
  flex-direction: column;
  align-items: flex-start;
  div {
    display: flex;
    width: 600px;
    margin-bottom: 50px;
  }
`
export const ChargingBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 100px;
  width: 100px;
  height: 50px;
  cursor: pointer;
  border-radius: 10px;
  font-weight: bold;
  font-size: 16px;
  color: #2155cd;
  border: none;
  background-color: #79dae8;
  :hover {
    background-color: #2155cd;
    color: #79dae8;
  }
`
export const ChargeAmount = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 100px;
  width: 100px;
  height: 50px;
  border-radius: 10px;
  font-weight: bold;
  font-size: 16px;
  color: #2155cd;
  border: none;
`
export const ChargeBtn = styled.button`
  width: 150px;
  height: 60px;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 10px;
  font-size: 20px;
  color: #2155cd;
  background-color: #79dae8;
  :hover {
    background-color: #2155cd;
    color: #79dae8;
  }
`

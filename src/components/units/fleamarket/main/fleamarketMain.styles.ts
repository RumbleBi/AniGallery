import styled from '@emotion/styled'

export const Position = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 60px;
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 1200px;
  min-height: 1200px;
  margin-top: 100px;
`
export const SelectBtnsWrapper = styled.div`
  display: flex;
  width: 1200px;
  justify-content: space-between;
  align-items: center;
`
export const CreateUseditemBtn = styled.div`
  width: 200px;
  height: 60px;
  border-radius: 15px;
  background-color: #e8f9fd;
  border: 1px solid #79dae8;
  color: #0aa1dd;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  font-size: 24px;
  cursor: pointer;
  :hover {
    color: #0aa1dd;
    font-weight: bold;
    border: 2px solid #79dae8;
  }
`
export const ListWrapper = styled.div`
  margin-top: 20px;
  width: 1200px;
  display: flex;
  justify-content: center;
  flex-direction: row;
`
export const DataList = styled.div`
  margin-top: 10px;
  border-radius: 10px;
  background-color: #e8f9fd;
  padding-top: 20px;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  min-height: 200px;
  cursor: pointer;
  :hover {
    border: 2px solid #2155cd;
    border-radius: 10px;
    font-weight: bold;
  }
`
export const DataInfo = styled.div`
  color: #79dae8;
  font-size: 20px;
`
export const Tag = styled.span`
  font-size: 20px;
  padding: 5px 15px;
  border-radius: 10px;
  background-color: #2155cd;
  margin: 0px 10px;
`
export const DateContents = styled.div`
  width: 1200px;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  font-size: 20px;
  margin: 20px 0px;
  background-color: #0aa1dd;
  color: #2155cd;
  word-break: break-all;
`
export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`
export const Image = styled.img`
  width: 150px;
  height: 150px;
  object-fit: scale-down;
`

import styled from '@emotion/styled'

export const Position = styled.div`
  display: flex;
  justify-content: center;
`
export const Wrapper = styled.div`
  margin-top: 150px;
  margin-bottom: 150px;
  width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const WrapperOpt = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
`
export const BoardCreate = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 50px;
  font-size: 18px;
  background-color: white;
  border-radius: 10px;
  cursor: pointer;
  border: 1px solid #79dae8;
  background-color: #e8f9fd;
  color: #0aa1dd;
  :hover {
    font-weight: bold;
  }
`
export const SearchInput = styled.input`
  width: 250px;
  height: 50px;
  font-size: 18px;
  padding-left: 10px;
  border: 1px solid #79dae8;
  border-radius: 10px;
  color: #79dae8;
  ::placeholder {
    color: #79dae8;
    font-style: italic;
  }
`
export const ListWrapperTop = styled.div`
  display: flex;
  width: 1200px;
  height: 50px;
  font-size: 20px;
  border-radius: 10px 10px 0px 0px;
  background-color: #2155cd;
  color: #e8f9fd;
  cursor: default;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
export const Index = styled.div`
  width: 10%;
`
export const Title = styled.div`
  width: 65%;
`
export const Writer = styled.div`
  width: 15%;
`
export const Date = styled.div`
  width: 10%;
`
export const ListWrapperBody = styled.div`
  display: flex;
  width: 1200px;
  cursor: pointer;
`
export const ListIndexNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: #2155cd;
  width: 10%;
  height: 50px;
  background-color: ${(props) =>
    props.index % 2 === 0 ? '#79DAE8' : '#0AA1DD'};
`
export const ListIndexTitle = styled.div`
  display: flex;
  padding-left: 100px;
  align-items: center;
  font-size: 20px;
  color: #2155cd;
  width: 65%;
  height: 50px;
  /* padding-left: 100px; */
  background-color: ${(props) =>
    props.index % 2 === 0 ? '#79DAE8' : '#0AA1DD'};
`
export const Word = styled.span`
  /* width: 1200px; */
  color: ${(props) => (props.isMatched ? '#e8f9fd' : '#2155CD')};
`
export const ListIndexWriter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15%;
  height: 50px;
  font-size: 20px;
  color: #2155cd;
  background-color: ${(props) =>
    props.index % 2 === 0 ? '#79DAE8' : '#0AA1DD'};
`

export const ListIndexDate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10%;
  height: 50px;
  font-size: 20px;
  color: #2155cd;
  background-color: ${(props) =>
    props.index % 2 === 0 ? '#79DAE8' : '#0AA1DD'};
`
export const ListWrapperBottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1200px;
  height: 100px;
  font-size: 20px;
  background-color: #2155cd;
  border-radius: 0px 0px 10px 10px;
`

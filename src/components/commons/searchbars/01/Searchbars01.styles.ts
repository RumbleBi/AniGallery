import { SearchOutlined } from '@ant-design/icons'
import styled from '@emotion/styled'

export const Searchbar = styled.div`
  width: 500px;
  height: 60px;
  border-radius: 15px;
  background-color: #e8f9fd;
  padding: 0px 20px;
  border: 1px solid #79dae8;
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const SearchIcon = styled(SearchOutlined)`
  color: #0aa1dd;
  font-size: 25px;
  cursor: default;
`

export const SearchbarInput = styled.input`
  ::placeholder {
    color: #79dae8;
    font-style: italic;
  }
  color: #0aa1dd;
  border: none;
  outline: none;
  background: none;
  font-size: 20px;
  padding-left: 15px;
`

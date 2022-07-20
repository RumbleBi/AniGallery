import { SearchIcon, Searchbar, SearchbarInput } from './Searchbars01.styles'

export default function Searchbars01UI(props) {
  return (
    <Searchbar>
      <SearchIcon />
      <SearchbarInput
        placeholder="검색 : 상품명 기준"
        onChange={props.onChangeSearchbar}
      />
    </Searchbar>
  )
}

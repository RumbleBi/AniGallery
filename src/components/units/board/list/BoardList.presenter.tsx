import { getDate } from '../../../../commons/libraries/utils'
import { IBoardListUIProps } from './BoardList.types'
import * as S from './BoardList.styles'
import Paginations01 from '../../../commons/layout/paginations/01/Paginations01.container'
import { BsPencilFill } from 'react-icons/bs'

export default function BoardListUI(props: IBoardListUIProps) {
  return (
    <S.Position>
      <S.Wrapper>
        <S.WrapperOpt>
          <S.BoardCreate onClick={props.onClickMoveBoardWrite}>
            <BsPencilFill style={{ fontSize: '20px', marginRight: '10px' }} />
            게시물등록하기
          </S.BoardCreate>
          <S.SearchInput
            type="text"
            placeholder="검색: 제목 기준"
            onChange={props.onChangeSearch}
          />
        </S.WrapperOpt>
        <S.ListWrapperTop>
          <S.Index className="Title">글번호</S.Index>
          <S.Title>제목</S.Title>
          <S.Writer>작성자</S.Writer>
          <S.Date>작성날짜</S.Date>
        </S.ListWrapperTop>
        {props.data?.fetchBoards.map((el, index) => (
          <S.ListWrapperBody key={el._id}>
            <S.ListIndexNumber index={index}>{index + 1}</S.ListIndexNumber>
            <S.ListIndexTitle
              index={index}
              id={el._id}
              onClick={props.onClickMoveBoardDetail}
            >
              {el.title
                .replaceAll(props.keyword, `#$%${props.keyword}#$%`)
                .split('#$%')
                .map((el) => (
                  <S.Word key={el} isMatched={el === props.keyword}>
                    {el}
                  </S.Word>
                ))}
            </S.ListIndexTitle>
            <S.ListIndexWriter index={index}>{el.writer}</S.ListIndexWriter>
            <S.ListIndexDate index={index}>
              {getDate(el.createdAt)}
            </S.ListIndexDate>
          </S.ListWrapperBody>
        ))}
        <S.ListWrapperBottom>
          <Paginations01 refetch={props.refetch} count={props.count} />
        </S.ListWrapperBottom>
      </S.Wrapper>
    </S.Position>
  )
}

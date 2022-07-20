import * as S from './BoardCommentWrite.styles'
import { IBoardCommentWriteUIProps } from './BoardCommentWrite.types'
import { BsFillChatRightTextFill } from 'react-icons/bs'

export default function BoardCommentWriteUI(props: IBoardCommentWriteUIProps) {
  return (
    <S.Position>
      <S.Wrapper>
        {!props.isEdit && (
          <S.CommentTitleWrapper>
            <BsFillChatRightTextFill
              style={{ fontSize: '24px', marginRight: '10px' }}
            />
            <span>댓글작성하기</span>
          </S.CommentTitleWrapper>
        )}
        <S.InputWrapper>
          <S.InputInfo
            readOnly={!!props.el?.writer}
            placeholder="작성자"
            maxLength={10}
            onChange={props.onChangeWriter}
            defaultValue={props.el?.writer}
          />
          <S.InputInfo
            type="password"
            placeholder="비밀번호"
            maxLength={14}
            onChange={props.onChangePassword}
          />
          <S.Star onChange={props.onChangeStar} />
        </S.InputWrapper>
        <S.ContentsWrapper>
          <S.Contents
            defaultValue={props.el?.contents}
            maxLength={300}
            onChange={props.onChangeContent}
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 작성자에게 있습니다."
          />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <S.ContentsInfo>{props.content.length}/300</S.ContentsInfo>
            <S.ContentsBtn
              onClick={
                props.isEdit
                  ? props.onClickCommentUpdate
                  : props.onClickCommentWrite
              }
            >
              {props.isEdit ? '수정하기' : '등록하기'}
            </S.ContentsBtn>
          </div>
        </S.ContentsWrapper>
      </S.Wrapper>
    </S.Position>
  )
}

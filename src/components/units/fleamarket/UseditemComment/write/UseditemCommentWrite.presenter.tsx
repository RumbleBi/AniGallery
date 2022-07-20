import * as S from './UseditemCommentWrite.styles'

export default function UseditemCommentWriteUI(props) {
  return (
    <S.Position>
      <S.Wrapper>
        <S.InputContents
          defaultValue={props.el?.contents}
          onChange={props.onChangeContents}
          placeholder="타인의 권리를 침해하거나 명예를 훼손하는 댓글은 운영원칙 및 관련 법률에 제재를 받을 수 있습니다."
          maxLength={100}
        />
        <S.CommentInfoWrapper>
          <div style={{ display: 'flex' }}>
            <S.CommentBtn
              onClick={
                props.isEdit
                  ? props.onClickCommentUpdate
                  : props.onClickCommentWrite
              }
            >
              {props.isEdit ? '수정하기' : '등록하기'}
            </S.CommentBtn>
            {props.isEdit ? (
              <S.CommentBtn onClick={props.onClickCommentCancel}>
                취소하기
              </S.CommentBtn>
            ) : (
              ''
            )}
          </div>
          <S.CommentLengths>{props.contents.length}/100</S.CommentLengths>
        </S.CommentInfoWrapper>
      </S.Wrapper>
    </S.Position>
  )
}

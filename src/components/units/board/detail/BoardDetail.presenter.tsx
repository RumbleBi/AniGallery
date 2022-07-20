import * as S from './BoardDetail.styles'
import { getDate } from '../../../../commons/libraries/utils'
import { IBoardDetailUIProps } from './BoardDetail.types'
import Button02 from '../../../commons/buttons/02'
import { BsHandThumbsUpFill, BsHandThumbsDownFill } from 'react-icons/bs'

export default function BoardDetailUI(props: IBoardDetailUIProps) {
  return (
    <S.Position>
      <S.Wrapper>
        <S.HeaderForm>
          <S.AvatarWrapper>
            <S.HeaderAvatarIcon src="/images/DefaultAvatar.png" />
            <S.Info>
              <div>작성자 : {props.data?.fetchBoard?.writer}</div>
              <div>작성날짜 : {getDate(props.data?.fetchBoard.createdAt)}</div>
            </S.Info>
          </S.AvatarWrapper>
        </S.HeaderForm>
        <S.Body>
          <S.BodyTitle>제목 : {props.data?.fetchBoard?.title}</S.BodyTitle>
          <S.BodyContents>{props.data?.fetchBoard?.contents}</S.BodyContents>
          <S.YoutubeWrapper>
            {props.data?.fetchBoard.youtubeUrl && (
              <S.BodyYoutube
                url={props.data?.fetchBoard?.youtubeUrl}
                width="640px"
                height="360px"
                controls={true}
                light={false}
                muted={true}
                style={{ marginBottom: '50px' }}
              />
            )}
          </S.YoutubeWrapper>
          <S.ImageWrapper>
            {props.data?.fetchBoard?.images
              ?.filter((el: string) => el)
              .map((el: string) => (
                <S.ImageItem
                  key={el}
                  src={`https://storage.googleapis.com/${el}`}
                />
              ))}
          </S.ImageWrapper>
        </S.Body>
        <S.BodyReactWrapper>
          <BsHandThumbsUpFill
            onClick={props.onClickLikeBoard}
            style={{
              fontSize: '28px',
              color: '#2155CD',
              marginRight: '20px',
              cursor: 'pointer',
            }}
          />
          <BsHandThumbsDownFill
            onClick={props.onClickDislikeBoard}
            style={{ fontSize: '28px', color: '#2155CD', cursor: 'pointer' }}
          />
        </S.BodyReactWrapper>
        <S.BodyCountWrapper>
          <span style={{ cursor: 'default' }}>
            {props.data?.fetchBoard?.likeCount}
          </span>
          <span style={{ cursor: 'default' }}>
            {props.data?.fetchBoard?.dislikeCount}
          </span>
        </S.BodyCountWrapper>
        <S.BodyButtonWrapper>
          <Button02 onClick={props.onClickMoveToList} name={'목록으로'} />
          <Button02 onClick={props.onClickMoveToEdit} name={'수정하기'} />
          <Button02 onClick={props.onClickDeleteBoard} name={'삭제하기'} />
        </S.BodyButtonWrapper>
      </S.Wrapper>
    </S.Position>
  )
}

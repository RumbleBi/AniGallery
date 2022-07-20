import { v4 as uuidv4 } from 'uuid'
import Uploads02 from '../../../commons/uploads/02/Uploads02.container'
import * as S from './MypageMain.styles'
export default function MypageMainUI(props) {
  return (
    <S.Position>
      <S.Title>마이페이지</S.Title>
      <S.Wrapper>
        <S.MenuBar>
          <S.FirstMenu onClick={props.onClickPointInfo}>포인트내역</S.FirstMenu>
          <div onClick={props.onClickPWChange}>비밀번호변경</div>
          <div onClick={props.onClickSelling}>상품판매내역</div>
          <div onClick={props.onClickBuying}>상품구매내역</div>
          <div onClick={props.onClickPickedList}>내가찜한상품</div>
        </S.MenuBar>
        <S.ViewWrapper>
          <S.IdWrapper>
            아이디 : {props.dataUser?.fetchUserLoggedIn.email}
          </S.IdWrapper>
          <S.NameWrapper>
            <span>닉네임 : {props.dataUser?.fetchUserLoggedIn.name}</span>
            <input
              onChange={props.onChangeName}
              type="text"
              maxLength={8}
              placeholder="최대 8글자까지 입력가능합니다."
            />
            <button onClick={props.onClickChangeName}>닉네임변경</button>
          </S.NameWrapper>
          <S.PictureWrapper>
            <span>프로필사진변경 :</span>
            <Uploads02
              key={uuidv4()}
              fileUrl={props.fileUrl}
              onChangeFileUrl={props.onChangeFileUrl}
            />
            <S.PictureChangeBtn onClick={props.onClickChangePicture}>
              적용하기
            </S.PictureChangeBtn>
          </S.PictureWrapper>
        </S.ViewWrapper>
      </S.Wrapper>
    </S.Position>
  )
}

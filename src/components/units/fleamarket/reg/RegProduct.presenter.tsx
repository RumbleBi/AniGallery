import * as S from './RegProduct.styles'
import { v4 as uuidv4 } from 'uuid'
import Uploads01 from '../../../commons/uploads/01/Uploads01.container'
import { Modal } from 'antd'
import DaumPostcode from 'react-daum-postcode'
import { IFleamarketRegUIProps } from './RegProduct.types'

export default function FleamarketRegUI(props: IFleamarketRegUIProps) {
  return (
    <S.Position>
      {props.isOpen && (
        <Modal
          visible={true}
          width={700}
          closable={false}
          cancelText={'취소'}
          okText={'확인'}
          onOk={props.onCompleteAddressSearchOk}
          onCancel={props.onClickAddressCancel}
        >
          <DaumPostcode onComplete={props.onCompleteAddressSearch} />
        </Modal>
      )}
      <S.Wrapper>
        <S.Logo>
          {props.isEdit ? '중고상품 수정하기' : '중고상품 등록하기'}
        </S.Logo>
        <S.FormContentWrapper>
          <S.ContentInfo>상품명</S.ContentInfo>
          <S.Input
            type="text"
            onChange={props.onChangeName}
            defaultValue={props.data?.fetchUseditem?.name || ''}
          />
          <S.ErrorMessage>{props.nameError}</S.ErrorMessage>
          <S.ContentInfo>제목</S.ContentInfo>
          <S.Input
            type="text"
            onChange={props.onChangeRemarks}
            defaultValue={props.data?.fetchUseditem?.remarks || ''}
          />
          <S.ErrorMessage>{props.remarksError}</S.ErrorMessage>
          <S.ContentInfo>내용</S.ContentInfo>
          <S.ContentInput
            placeholder="내용을 입력해 주세요."
            onChange={props.onChangeContents}
            defaultValue={props.data?.fetchUseditem?.contents || ''}
          />
          <S.ErrorMessage>{props.contentsError}</S.ErrorMessage>
          <S.ContentInfo>판매가격</S.ContentInfo>
          <S.Input
            type="text"
            onChange={props.onChangePrice}
            defaultValue={props.data?.fetchUseditem?.price || ''}
          />
          <S.ErrorMessage>{props.priceError}</S.ErrorMessage>
          <S.ContentInfo>태그입력 (#잇템#가성비#직거래) </S.ContentInfo>
          <S.TagsInput
            placeholder="#잇템#가성비#직거래"
            type="text"
            onChange={props.onChangeTags}
            defaultValue={
              props.data?.fetchUseditem?.tags
                ? '#' + props.data?.fetchUseditem?.tags.join('#')
                : ''
            }
          />
          <S.ErrorMessage></S.ErrorMessage>
        </S.FormContentWrapper>
        <S.ContentWrapper>
          <S.PostTitle>주소</S.PostTitle>
          <S.PostNumberWrapper>
            <S.PostZipcode
              placeholder="00000"
              readOnly
              value={
                props.zipcode ||
                props.data?.fetchUseditem?.useditemAddress?.zipcode ||
                ''
              }
              defaultValue={
                props.zipcode ||
                props.data?.fetchUseditem?.useditemAddress?.zipcode ||
                ''
              }
            />
            <S.PostSearchBtn
              style={{ fontSize: '16px' }}
              onClick={props.onClickAddressSearch}
            >
              우편번호검색
            </S.PostSearchBtn>
          </S.PostNumberWrapper>
          <S.PostWrapper>
            <S.PostInput
              readOnly
              value={
                props.address ||
                props.data?.fetchUseditem?.useditemAddress?.address ||
                ''
              }
              defaultValue={
                props.address ||
                props.data?.fetchUseditem?.useditemAddress?.address ||
                ''
              }
            />
            <S.PostInput
              onChange={props.onChangeAddressDetail}
              defaultValue={
                props.data?.fetchUseditem?.useditemAddress?.addressDetail || ''
              }
            />
          </S.PostWrapper>
          <S.ImageWrapper>
            <S.ImageTitle>사진첨부</S.ImageTitle>
            <S.ImageInputs>
              {props.fileUrls?.map((el, index) => (
                <Uploads01
                  key={uuidv4()}
                  index={index}
                  fileUrl={el}
                  onChangeFileUrls={props.onChangeFileUrls}
                />
              ))}
            </S.ImageInputs>
          </S.ImageWrapper>
        </S.ContentWrapper>
        <S.ButtonWrapper>
          <S.SubmitBtn
            onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
          >
            {props.isEdit ? '수정하기' : '등록하기'}
          </S.SubmitBtn>
        </S.ButtonWrapper>
      </S.Wrapper>
    </S.Position>
  )
}

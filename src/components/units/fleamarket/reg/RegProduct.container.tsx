import FleamarketRegUI from './RegProduct.presenter'
import { CREATE_USED_ITEM, UPDATE_USED_ITEM } from './RegProduct.queries'
import { useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import { ChangeEvent, useEffect, useState } from 'react'
import { IDaumParamsProps, IFleamarketRegProps } from './RegProduct.types'

export default function FleamarketReg(props: IFleamarketRegProps) {
  const router = useRouter()

  const [createUseditem] = useMutation(CREATE_USED_ITEM)
  const [updateUseditem] = useMutation(UPDATE_USED_ITEM)

  const [isOpen, setIsOpen] = useState(false)

  const [name, setName] = useState('')
  const [remarks, setRemarks] = useState('')
  const [contents, setContents] = useState('')
  const [tags, setTags] = useState('')
  const [price, setPrice] = useState('')
  const [zipcode, setZipcode] = useState('')
  const [address, setAddress] = useState('')
  const [addressDetail, setAddressDetail] = useState('')
  const [fileUrls, setFileUrls] = useState(['', '', '', ''])

  const [nameError, setNameError] = useState('')
  const [remarksError, setRemarksError] = useState('')
  const [contentsError, setContentsError] = useState('')
  const [priceError, setPriceError] = useState('')

  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
    if (event.target.value !== '') {
      setNameError('')
    }
  }
  const onChangeRemarks = (event: ChangeEvent<HTMLInputElement>) => {
    setRemarks(event.target.value)
    if (event.target.value !== '') {
      setRemarksError('')
    }
  }
  const onChangePrice = (event: ChangeEvent<HTMLInputElement>) => {
    setPrice(event.target.value)
    if (event.target.value !== '') {
      setPriceError('')
    }
  }
  const onChangeTags = (event: ChangeEvent<HTMLInputElement>) => {
    setTags(event.target.value)
  }

  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value)
    if (event.target.value !== '') {
      setContentsError('')
    }
  }
  // 사진 업로드 데이터 변경시마다 FETCH
  useEffect(() => {
    if (props.data?.fetchUseditem?.images?.length) {
      setFileUrls([...props.data?.fetchUseditem?.images])
    }
  }, [props.data])
  const onChangeAddressDetail = (event: ChangeEvent<HTMLInputElement>) => {
    setAddressDetail(event.target.value)
  }
  const onClickAddressSearch = () => {
    setIsOpen(true)
  }
  const onClickAddressCancel = () => {
    setIsOpen(false)
  }
  const onCompleteAddressSearchOk = () => {
    setIsOpen(false)
  }
  // DaumPostCode params docx 참고하여 변수 지정
  const onCompleteAddressSearch = (data: IDaumParamsProps) => {
    setAddress(data.address)
    setZipcode(data.zonecode)
    setIsOpen(false)
  }
  // 업로드 사진 변경시 함수
  const onChangeFileUrls = (fileUrl: string, index: number) => {
    const newFileUrls = [...fileUrls]
    newFileUrls[index] = fileUrl
    setFileUrls(newFileUrls)
  }
  // 등록버튼함수
  const onClickSubmit = async () => {
    if (name === '') {
      setNameError('상품명을 입력해주세요.')
      window.scrollTo(0, 0)
      return
    }
    if (remarks === '') {
      setRemarksError('제목을 입력해주세요.')
      window.scrollTo(0, 0)
      return
    }
    if (contents === '') {
      setContentsError('내용을 입력해주세요.')
      window.scrollTo(0, 400)
      return
    }
    if (price === '') {
      setPriceError('가격을 입력해주세요.')
      window.scrollTo(0, 400)
      return
    }
    const transTags = tags.split('#').splice(1)

    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name,
            remarks,
            contents,
            tags: transTags,
            price: Number(price),
            useditemAddress: {
              zipcode,
              address,
              addressDetail,
            },
            images: fileUrls,
          },
        },
      })
      router.push(`/fleamarket/${result.data.createUseditem._id}`)
    } catch (error) {
      if (error instanceof Error) alert(error.message)
    }
  }

  // 수정버튼함수
  const onClickUpdate = async () => {
    const transTags = tags.split('#').splice(1)
    try {
      await updateUseditem({
        variables: {
          updateUseditemInput: {
            name: name === '' ? props.data?.fetchUseditem?.name : name,
            remarks:
              remarks === '' ? props.data?.fetchUseditem?.remarks : remarks,
            contents:
              contents === '' ? props.data?.fetchUseditem?.contents : contents,
            tags:
              transTags.length === 0
                ? props.data?.fetchUseditem?.tags
                : transTags,
            price:
              price === '' ? props.data?.fetchUseditem?.price : Number(price),
            useditemAddress: {
              zipcode:
                zipcode === ''
                  ? props.data?.fetchUseditem?.useditemAddress?.zipcode
                  : zipcode,
              address:
                address === ''
                  ? props.data?.fetchUseditem?.useditemAddress?.address
                  : address,
              addressDetail:
                addressDetail === ''
                  ? props.data?.fetchUseditem?.useditemAddress?.addressDetail
                  : addressDetail,
            },
            images:
              fileUrls === [] ? props.data?.fetchUseditem?.images : fileUrls,
          },
          useditemId: router.query.useditemId,
        },
      })
      router.push(`/fleamarket/${router.query.useditemId}`)
    } catch (error) {
      if (error instanceof Error) alert(error.message)
    }
  }

  return (
    <FleamarketRegUI
      onChangeTags={onChangeTags}
      onChangeName={onChangeName}
      onChangeRemarks={onChangeRemarks}
      onChangeContents={onChangeContents}
      onChangePrice={onChangePrice}
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
      onChangeFileUrls={onChangeFileUrls}
      onChangeAddressDetail={onChangeAddressDetail}
      onClickAddressSearch={onClickAddressSearch}
      onClickAddressCancel={onClickAddressCancel}
      onCompleteAddressSearch={onCompleteAddressSearch}
      fileUrls={fileUrls}
      isOpen={isOpen}
      data={props.data}
      isEdit={props.isEdit}
      name={name}
      remarks={remarks}
      contents={contents}
      price={price}
      zipcode={zipcode}
      address={address}
      nameError={nameError}
      remarksError={remarksError}
      contentsError={contentsError}
      priceError={priceError}
      onCompleteAddressSearchOk={onCompleteAddressSearchOk}
    />
  )
}

import React, { ChangeEvent } from 'react'
import { IQuery } from '../../../../commons/types/generated/types'

export interface IDaumParamsProps {
  address: string
  zonecode: string
}
export interface IFleamarketRegProps {
  isEdit: boolean
  data?: Pick<IQuery, 'fetchUseditem'>
}
export interface IFleamarketRegUIProps {
  onChangeTags: (event: ChangeEvent<HTMLInputElement>) => void
  onChangeName: (event: ChangeEvent<HTMLInputElement>) => void
  onChangeRemarks: (event: ChangeEvent<HTMLInputElement>) => void
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void
  onChangePrice: (event: ChangeEvent<HTMLInputElement>) => void
  onClickSubmit: () => void
  onClickUpdate: () => void
  onChangeFileUrls: (fileUrl: string, index: number) => void
  onChangeAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void
  onClickAddressSearch: () => void
  onClickAddressCancel: () => void
  onCompleteAddressSearch: (data: IDaumParamsProps) => void
  onCompleteAddressSearchOk: (e: React.MouseEvent<HTMLElement>) => void
  fileUrls: string[]
  isOpen: boolean
  data?: Pick<IQuery, 'fetchUseditem'>
  isEdit: boolean
  name: string
  remarks: string
  contents: string
  price: string
  zipcode: string
  address: string
  nameError: string
  remarksError: string
  contentsError: string
  priceError: string
}

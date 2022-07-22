import { ChangeEvent } from 'react'
import { IQuery } from '../../../../commons/types/generated/types'

export interface IMypageMainUIProps {
  name: string
  fileUrl: string
  dataUser: Pick<IQuery, 'fetchUserLoggedIn'> | undefined
  onChangeName: (event: ChangeEvent<HTMLInputElement>) => void
  onClickChangeName: () => void
  onClickChangePicture: () => void
  onChangeFileUrl: (fileUrl: string) => void
  onClickPWChange: () => void
  onClickPickedList: () => void
  onClickSelling: () => void
  onClickBuying: () => void
  onClickPointInfo: () => void
}

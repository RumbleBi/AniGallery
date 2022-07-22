import { Maybe } from 'graphql/jsutils/Maybe'
import { IQuery } from '../../../../commons/types/generated/types'

export interface IRegDetailUIProps {
  data?: Pick<IQuery, 'fetchUseditem'>
  userData?: Pick<IQuery, 'fetchUserLoggedIn'>
  onClickDeleteUseditem: () => void
  onClickMoveToMain: () => void
  onClickMoveToEdit: () => void
  onClickMyPick: () => void
  onClickMyPickCancel: () => void
  myPick: boolean
  onClickBuyUseditem: () => void
}

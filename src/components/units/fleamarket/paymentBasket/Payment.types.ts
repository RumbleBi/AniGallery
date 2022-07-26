import { MouseEvent } from 'react'
import { IQuery } from '../../../../commons/types/generated/types'

export interface IPaymentBasketUIProps {
  data: Pick<IQuery, 'fetchUserLoggedIn'> | undefined
  amount: number
  onClickPayment: () => void
  onClickAmount: (event: MouseEvent<HTMLButtonElement>) => void
}

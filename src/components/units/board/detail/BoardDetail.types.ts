import { IQuery } from '../../../../commons/types/generated/types'

export interface IBoardDetailUIProps {
  data?: Pick<IQuery, 'fetchBoard'>
  onClickMoveToList: () => void
  onClickMoveToEdit: () => void
  onClickDeleteBoard: () => void
  onClickLikeBoard: () => void
  onClickDislikeBoard: () => void
}

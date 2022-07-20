import { Page } from './Paginations01.styles'
import { IPaginations01UIProps } from './Paginations01.types'

export default function Paginations01UI(props: IPaginations01UIProps) {
  return (
    <>
      <Page onClick={props.onClickPrevPage}>{`이전`}</Page>
      {new Array(10).fill(1).map(
        (_, index) =>
          props.startPage + index <= props.lastPage && (
            <Page
              key={props.startPage + index}
              onClick={props.onClickPage}
              id={String(props.startPage + index)}
              isActive={props.startPage + index === props.activedPage}
            >
              {props.startPage + index}
            </Page>
          )
      )}
      <Page onClick={props.onClickNextPage}>{`다음`}</Page>
    </>
  )
}

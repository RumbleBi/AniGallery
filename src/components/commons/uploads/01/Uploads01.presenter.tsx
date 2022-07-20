import {
  UploadButton,
  UploadFileHidden,
  UploadImage,
  UploadWrapper,
} from './Uploads01.styles'
import { IUploads01UIProps } from './Uploads01.types'

export default function Uploads01UI(props: IUploads01UIProps) {
  return (
    <UploadWrapper>
      {props.fileUrl ? (
        <UploadImage
          onClick={props.onClickUpload}
          src={`https://storage.googleapis.com/${props.fileUrl}`}
        />
      ) : (
        <UploadButton onClick={props.onClickUpload}>
          <>사진등록하기</>
        </UploadButton>
      )}
      <UploadFileHidden
        type="file"
        ref={props.fileRef}
        onChange={props.onChangeFile}
      />
    </UploadWrapper>
  )
}

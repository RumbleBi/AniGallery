import { UploadButton, UploadFileHidden, UploadImage } from './Uploads02.styles'
import { IUploads02UIProps } from './Uploads02.types'

export default function Uploads02UI(props: IUploads02UIProps) {
  return (
    <>
      {props.fileUrl ? (
        <UploadImage
          onClick={props.onClickUpload}
          src={`https://storage.googleapis.com/${props.fileUrl}`}
        />
      ) : (
        <UploadButton onClick={props.onClickUpload}>사진변경</UploadButton>
      )}
      <UploadFileHidden
        type="file"
        ref={props.fileRef}
        onChange={props.onChangeFile}
      />
    </>
  )
}

import { Modal } from 'antd'

export const getDate = (getDate: any) => {
  const change = new Date(getDate)
  const yyyy = change.getFullYear()
  const mm = change.getMonth() + 1
  const dd = change.getDate()
  return `${yyyy}.${mm}.${dd}`
}

export const checkFileValidation = (files?: File) => {
  if (!files?.size) {
    Modal.error({ content: '파일이 존재하지 않습니다.' })
    return false
  }
  if (files.size > 5 * 1024 * 1024) {
    Modal.error({ content: '파일 용량이 너무 큽니다.(5MB 제한)' })
    return false
  }
  if (!files.type.includes('jpeg') && !files.type.includes('png')) {
    Modal.error({ content: '파일 용량이 너무 큽니다.(5MB 제한)' })
    return false
  }
  return true
}

export const getDate2 = (getDate2: any) => {
  const change = new Date(getDate2)
  const yyyy = change.getFullYear()
  const mm = change.getMonth() + 1
  const dd = change.getDate()
  return `${yyyy}-${String(mm).padStart(2, '0')}-${String(dd).padStart(2, '0')}`
}

export const getPrice = (price: any) => {
  return String(price).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

import styled from '@emotion/styled'
import { ReactChild } from 'react'
import LayoutHeader from './header/LayoutHeader.container'
import { useRouter } from 'next/router'
import LayoutSidebar from './sidebar'

const LayoutBody = styled.div``
interface ILayoutProps {
  children: ReactChild
}

export default function Layout(props: ILayoutProps) {
  const router = useRouter()
  const HIDDEN_SIDEBAR = [
    '/',
    `/boards/${router.query.boardId}/`,
    `/boards/${router.query.boardId}/edit/`,
    '/boards/',
    '/boards/new/',
    '/fleamarket/',
    '/fleamarket/login/',
    '/fleamarket/reg/',
    '/fleamarket/signin/',
  ]
  const isHiddenSidebar = HIDDEN_SIDEBAR.includes(router.asPath)
  return (
    <>
      <LayoutHeader />
      <LayoutBody>
        {!isHiddenSidebar && <LayoutSidebar />}
        {props.children}
      </LayoutBody>
    </>
  )
}

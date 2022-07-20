import 'antd/dist/antd.css'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
} from '@apollo/client'
import { AppProps } from 'next/app'
import { Global } from '@emotion/react'
import { globalStyles } from '../src/commons/styles/globalStyles'
import Layout from '../src/components/commons/layout'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { createUploadLink } from 'apollo-upload-client'
import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from 'react'
import { getAccessToken } from '../src/commons/libraries/getAccessToken'
import { onError } from '@apollo/client/link/error'

interface IUserInfo {
  name?: string
  email?: string
  picture?: string
}
interface IGlobalContext {
  accessToken?: String
  setAccessToken?: Dispatch<SetStateAction<string>>
  userInfo?: IUserInfo
  setUserInfo?: Dispatch<SetStateAction<IUserInfo>>
  setItem?: String | any
  item?: String
  isLoggedIn?: boolean
  setIsLoggedIn?: any
}
export const GlobalContext = createContext<IGlobalContext>({})

function MyApp({ Component, pageProps }: AppProps) {
  const [accessToken, setAccessToken] = useState('')
  const [userInfo, setUserInfo] = useState({})
  const [item, setItem] = useState([])
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const value = {
    accessToken,
    setAccessToken,
    userInfo,
    setUserInfo,
    item,
    setItem,
    isLoggedIn,
    setIsLoggedIn,
  }
  useEffect(() => {
    getAccessToken().then((newAccessToken) => {
      setAccessToken(newAccessToken)
    })
  }, [])
  // 쿠키 토큰 유효성 검증

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    // 1. error 캐치
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        if (err.extensions.code === 'UNAUTHENTICATED') {
          getAccessToken().then((newAccessToken) => {
            setAccessToken(newAccessToken)
            operation.setContext({
              Headers: {
                ...operation.getContext().headers,
                authorization: `Bearer ${newAccessToken}`,
              },
            })
            return forward(operation)
          })
        }
      }
    }
  })

  const uploadLink = createUploadLink({
    uri: 'https://backend05.codebootcamp.co.kr/graphql16',
    headers: { Authorization: `Bearer ${accessToken}` }, // HTTP HEADER에 작성해야 accessToken을 사용시 Mutation에서 생성을 할 수 있음.
    credentials: 'include',
  })

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache(),
    connectToDevTools: true,
  })

  return (
    <GlobalContext.Provider value={value}>
      <ApolloProvider client={client}>
        <Global styles={globalStyles} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </GlobalContext.Provider>
  )
}

export default MyApp

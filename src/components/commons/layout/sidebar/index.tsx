import { useContext, useEffect } from 'react'
import { getDate2, getPrice } from '../../../../commons/libraries/utils'
import { GlobalContext } from '../../../../../pages/_app'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'

const Wrapper = styled.div`
  z-index: 2;
  width: 170px;
  padding: 20px 15px;
  position: fixed;
  right: 30px;
  top: 50%;
  transform: translate(0, -50%);
  overflow: hidden;
  color: #2155cd;
  background: #79dae8;
  border-radius: 10px;
  p {
    font-weight: bold;
  }
  > div:last-child {
    margin-bottom: 5px;
  }
`
const ImgContainer = styled.div`
  width: 50px;
  height: 50px;
  overflow: 'hidden';
  img {
    height: 100%;
    position: relative;
    left: 50%;
    transform: translate(-50%, 0);
    background-color: white;
  }
`
const Items = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 5px;
  margin: 15px 0;
  div {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`

export default function LayoutSidebar() {
  const router = useRouter()
  const { item, setItem } = useContext(GlobalContext)
  const todayDate = getDate2(new Date())

  useEffect(() => {
    const baskets = JSON.parse(localStorage.getItem(todayDate) || '[]')
    if (baskets) {
      setItem(baskets)
    }
  }, [])

  const onClickDetail = (el) => () => {
    router.push(`/fleamarket/${el._id}`)
  }

  return (
    <>
      {item ? (
        <Wrapper>
          <>
            <p>오늘 본 상품</p>
            {item
              .map((el) => (
                <Items
                  key={el._id}
                  onClick={onClickDetail(el)}
                  style={{ cursor: 'pointer' }}
                >
                  <ImgContainer>
                    <img
                      src={`https://storage.googleapis.com/${el.images[0]}`}
                      onError={(e) => {
                        e.currentTarget.src = '/images/DefaultViewed.png'
                      }}
                    />
                  </ImgContainer>
                  <div>
                    <div>{el.name}</div>
                    <div>{getPrice(el.price)}</div>
                  </div>
                </Items>
              ))
              .filter((el: any, index: any) => {
                if (index <= 3) return el
              })}
          </>
        </Wrapper>
      ) : (
        <></>
      )}
    </>
  )
}

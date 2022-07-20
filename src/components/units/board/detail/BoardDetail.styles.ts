import ReactPlayer from 'react-player'
import styled from '@emotion/styled'

export const Position = styled.div`
  display: flex;
  justify-content: center;
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1200px;
  margin-top: 150px;
  margin-bottom: 150px;
  border: none;
  box-shadow: 0px 0px 10px gray;
  border-radius: 10px;
  background-color: #e8f9fd;
`
export const HeaderForm = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #2155cd;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 10px 10px 0px 0px;
  width: 1200px;
`
export const AvatarWrapper = styled.div`
  display: flex;
  align-items: center;
`
export const HeaderAvatarIcon = styled.img`
  width: 50px;
  border-radius: 50px;
  margin-left: 20px;
  margin-right: 20px;
`
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #2155cd;
  font-size: 20px;
  font-weight: bold;
`
export const Body = styled.div`
  width: 1200px;
  color: #2155cd;
`
export const BodyTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  padding: 10px 0px 10px 20px;
  border-bottom: 1px solid #2155cd;
  background-color: #e8f9fd;
`
export const BodyContents = styled.div`
  height: 300px;
  font-size: 18px;
  padding: 20px 0px 20px 20px;
  margin-bottom: 50px;
  border-bottom: 1px solid #2155cd;
  background-color: white;
`
export const YoutubeWrapper = styled.div`
  display: flex;
  justify-content: center;
`
export const BodyYoutube = styled(ReactPlayer)``
export const ImageWrapper = styled.div`
  justify-content: space-evenly;
  align-items: center;
  height: 200px;
  width: 1200px;
  display: flex;
`
export const ImageItem = styled.img`
  width: 200px;
  height: 200px;
  object-fit: scale-down;
`
export const BodyReactWrapper = styled.div`
  width: 1200px;
  height: 50px;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    margin-left: 20px;
    margin-right: 20px;
  }
`
export const BodyCountWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 1200px;
  margin-top: 10px;
  span {
    margin-left: 20px;
    margin-right: 20px;
    font-size: 20px;
    color: #0aa1dd;
  }
`
export const BodyButtonWrapper = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
  width: 1200px;
  display: flex;
  justify-content: space-evenly;
`

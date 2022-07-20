import styled from '@emotion/styled'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Position = styled.div`
  display: flex;
  justify-content: center;
`
const Wrapper = styled.div`
  font-family: 'AppleFontEN';
  font-family: 'AppleFontKO';
  width: 1200px;
  margin-bottom: 100px;
`
const Title = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
  font-size: 36px;
  color: #2155cd;
`
const SliderWrapper = styled.div`
  margin-top: 50px;
  div {
    width: 1200px;
    height: 650px;
  }
`
const SliderImg1 = styled.div`
  background-image: url(/images/SliderImg1.jpeg);
  background-size: cover;
  display: flex;
`
const SliderImg2 = styled.div`
  background-image: url(/images/SliderImg2.jpeg);
  background-size: cover;
  display: flex;
`
const SliderImg3 = styled.div`
  background-image: url(/images/SliderImg3.jpeg);
  background-size: cover;
  display: flex;
`
export default function HomePage() {
  const settings = {
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    touchMove: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    dots: true,
  }

  return (
    <Position>
      <Wrapper>
        <Title>
          애니메이션에 대해 자유롭게 이야기하거나 굿즈들을 거래하는 Ani Gallery!
        </Title>
        <SliderWrapper>
          <Slider {...settings}>
            <div>
              <SliderImg1></SliderImg1>
            </div>
            <div>
              <SliderImg2></SliderImg2>
            </div>
            <div>
              <SliderImg3></SliderImg3>
            </div>
          </Slider>
        </SliderWrapper>
      </Wrapper>
    </Position>
  )
}

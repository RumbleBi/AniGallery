import * as S from "./LayoutBanner.styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function LayoutBannerUI() {
  const settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: false,
    fade: true,
  };

  return (
    <S.Wrapper>
      <Slider {...settings}>
        <div>
          <S.ImgBoxOne></S.ImgBoxOne>
        </div>
        <div>
          <S.ImgBoxTwo></S.ImgBoxTwo>
        </div>
        <div>
          <S.ImgBoxThree></S.ImgBoxThree>
        </div>
        <div>
          <S.ImgBoxFour></S.ImgBoxFour>
        </div>
      </Slider>
    </S.Wrapper>
  );
}

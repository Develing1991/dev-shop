import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import * as S from "./Banner.styles";
export default function Banner() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <S.Banner>
      <div className="inner">
        <div className="wrapper">
          <S.PrevArrow />
          <S.NextArrow />
        </div>
        <Slider {...settings}>
          {[1, 2, 3, 4, 5].map((el) => (
            <div key={el} className="image-area">
              <img
                src="http://responsive-sample42.firstmall.kr/data/skin/responsive_babygoods_cute_gl/images/banner/11/images_2.jpg"
                alt="slick1"
              />
            </div>
          ))}
        </Slider>
      </div>
    </S.Banner>
  );
}

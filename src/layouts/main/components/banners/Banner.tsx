import * as S from "./Banner.styles";

export default function Banner() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrow: false,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          dots: true,
        },
      },
    ],
  };

  return (
    <S.Banner>
      <div className="inner">
        <div>
          <S.Slider {...settings}>
            <div className="image-area">
              <img
                src="http://responsive-sample42.firstmall.kr/data/skin/responsive_babygoods_cute_gl/images/banner/11/images_2.jpg"
                alt="slick1"
                className="slick-image"
              />
            </div>
            <div className="image-area">
              <img
                src="http://responsive-sample42.firstmall.kr/data/skin/responsive_babygoods_cute_gl/images/banner/11/images_3.jpg"
                alt="slick1"
                className="slick-image"
              />
            </div>
          </S.Slider>
        </div>
      </div>
    </S.Banner>
  );
}

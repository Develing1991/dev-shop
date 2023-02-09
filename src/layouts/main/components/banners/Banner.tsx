import * as S from "./Banner.styles";
export default function Banner() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    // autoplay: true,
    // autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
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
        <div className="btn-wrapper">
          <S.PrevArrow className="prev-arrow" />
          <S.NextArrow className="next-arrow" />
        </div>
        <div>
          <S.Slider {...settings}>
            {[1, 2, 3, 4, 5].map((el) => (
              <div key={el} className="image-area">
                <img
                  src="http://responsive-sample42.firstmall.kr/data/skin/responsive_babygoods_cute_gl/images/banner/11/images_2.jpg"
                  alt="slick1"
                  className="slick-image"
                />
              </div>
            ))}
          </S.Slider>
        </div>
      </div>
    </S.Banner>
  );
}

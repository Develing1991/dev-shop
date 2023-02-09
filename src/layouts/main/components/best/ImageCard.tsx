import * as S from "./ImageCard.styles";
export default function ImageCard() {
  return (
    <S.ImageCard>
      <ul>
        <li>
          <a href="">
            <img
              src="http://responsive-sample42.firstmall.kr/data/skin/responsive_babygoods_cute_gl/images/design_resp/thumb_1.jpg"
              alt="thumb1"
            />
          </a>
        </li>
        <li>
          <a href="">
            <img
              src="http://responsive-sample42.firstmall.kr/data/skin/responsive_babygoods_cute_gl/images/design_resp/thumb_2.jpg"
              alt="thumb2"
            />
          </a>
        </li>
        <li>
          <a href="">
            <img
              src="http://responsive-sample42.firstmall.kr/data/skin/responsive_babygoods_cute_gl/images/design_resp/thumb_3.jpg"
              alt="thumb3"
            />
          </a>
        </li>
      </ul>
    </S.ImageCard>
  );
}

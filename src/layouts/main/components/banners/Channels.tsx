import React from "react";
import * as S from "./Channels.styles";
export default function Channels() {
  return (
    <S.Channels>
      <div className="banners">
        <div className="image-area">
          <img
            src="http://responsive-sample42.firstmall.kr/data/skin/responsive_babygoods_cute_gl/images/design_resp/thumb4_1.jpg"
            alt="카카오톡 친구추가"
          />
        </div>
        <div className="image-area">
          <img
            src="http://responsive-sample42.firstmall.kr/data/skin/responsive_babygoods_cute_gl/images/design_resp/thumb4_2.jpg"
            alt="특별한 선물을 준비하세요!"
          />
        </div>
      </div>
    </S.Channels>
  );
}

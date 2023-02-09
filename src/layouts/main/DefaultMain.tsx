import React from "react";
import AdBanner from "./components/banners/AdBanner";

import Banner from "./components/banners/Banner";
import ImageCard from "./components/best/ImageCard";
import Article from "./components/commons/Article";
import TitleGroup from "./components/commons/TitleGroup";
export default function DefaultMain() {
  return (
    <main>
      <Banner />
      {/* 베스트 */}
      <Article>
        <>
          <TitleGroup title="베스트 카테고리" />
          <ImageCard />
        </>
      </Article>
      {/* 광고 배너 */}
      <Article>
        <AdBanner />
      </Article>
      {/* 신규상품 */}
      <Article>
        <>
          <TitleGroup
            title="신규 상품"
            subTitle="라라베베의 신규 상품을 먼저 만나보세요."
          />
        </>
      </Article>
    </main>
  );
}

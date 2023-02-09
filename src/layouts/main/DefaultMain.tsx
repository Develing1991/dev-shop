import React from "react";
import AdBanner from "./components/banners/AdBanner";

import Banner from "./components/banners/Banner";
import Channels from "./components/banners/Channels";
import ImageCard from "./components/best/ImageCard";
import Section from "./components/commons/Section";
import TitleGroup from "./components/commons/TitleGroup";
import NewProducts from "./components/new/NewProducts";
import RecommendProducts from "./components/recommend/RecommendProducts";
import SaleProducts from "./components/sale/SaleProducts";
export default function DefaultMain() {
  return (
    <main>
      {/* 슬라이드 배너 */}
      <Banner />
      {/* 베스트 */}
      <Section>
        <>
          <TitleGroup title="베스트 카테고리" />
          <ImageCard />
        </>
      </Section>
      {/* 광고 배너 */}
      <Section>
        <AdBanner />
      </Section>
      {/* 신규상품 */}
      <Section>
        <>
          <TitleGroup
            title="신규 상품"
            subTitle="라라베베의 신규 상품을 먼저 만나보세요."
          />
          <NewProducts />
        </>
      </Section>
      {/* 세일상품 */}
      <Section>
        <>
          <SaleProducts>
            <TitleGroup
              title="세일 상품"
              subTitle="라라베베의 세일 상품입니다."
            />
          </SaleProducts>
        </>
      </Section>
      {/* 채널 배너 */}
      <Section>
        <Channels />
      </Section>
      {/* 추천상품 */}
      <Section>
        <>
          <TitleGroup
            title="MD 추천상품"
            subTitle="MD도 인정한 라라베베의 추천 상품!"
          />
          <RecommendProducts />
        </>
      </Section>
    </main>
  );
}

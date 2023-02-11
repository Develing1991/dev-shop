import ProductItem from "@/src/pages/products/productList/components/ProductItem";
import SearchFilter from "@/src/pages/products/productList/components/SearchFilter";
import SearchNav from "@/src/pages/products/productList/components/SearchNav";
import * as S from "@/src/pages/products/productList/ProductListPage.styles";
import { useState } from "react";
export default function ProductListPage() {
  const [col, setCol] = useState(4);
  const onClickColChange = (col: number) => {
    setCol(() => col);
  };
  return (
    <S.ProductListPage col={col}>
      <SearchNav />
      <SearchFilter onClickColChange={onClickColChange} />

      <div className="products">
        {Array(10)
          .fill(1)
          .map((el, index) => {
            return <ProductItem key={index} />;
          })}
      </div>
    </S.ProductListPage>
  );
}

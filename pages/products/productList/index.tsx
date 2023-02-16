import ProductItem from "@src/pages/products/productList/components/ProductItem";
import SearchFilter from "@src/pages/products/productList/components/SearchFilter";
import SearchNav from "@src/pages/products/productList/components/SearchNav";
import * as S from "@src/pages/products/productList/ProductListPage.styles";
import { useState } from "react";
export default function ProductListPage() {
  const [grid, setGrid] = useState("grid-box"); // grid-box:4, grid-list:2
  const onClickColChange = (grid: string) => {
    setGrid(() => grid);
  };
  return (
    <S.ProductListPage grid={grid}>
      <SearchNav />
      <SearchFilter onClickColChange={onClickColChange} />

      <div className="products">
        {Array(10)
          .fill(1)
          .map((el, index) => {
            return <ProductItem key={index} grid={grid} />;
          })}
      </div>
    </S.ProductListPage>
  );
}

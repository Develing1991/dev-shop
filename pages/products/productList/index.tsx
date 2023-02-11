import SearchFilter from "@/src/pages/products/productList/components/SearchFilter";
import SearchNav from "@/src/pages/products/productList/components/SearchNav";
import * as S from "@/src/pages/products/productList/ProductListPage.styles";
export default function ProductListPage() {
  return (
    <S.ProductListPage>
      <SearchNav />
      <SearchFilter />
    </S.ProductListPage>
  );
}

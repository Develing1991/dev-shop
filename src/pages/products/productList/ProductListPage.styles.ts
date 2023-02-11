import styled from "@emotion/styled";
export const ProductListPage = styled.section`
  width: 1024px;
  max-width: 1024px;
  margin: auto;
  padding: 20px;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }

  .products {
    margin-top: 30px;
    display: grid;
    grid-template-columns: repeat(${({ col }: { col: number }) => col}, 1fr);
    gap: 15px;
  }
`;

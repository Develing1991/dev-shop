import styled from "@emotion/styled";
export const ProductListPage = styled.section`
  width: 1024px;
  max-width: 1024px;
  margin: auto;
  padding: 20px;
  min-width: 270px;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
  @media screen and (max-width: 360px) {
    padding: 10px;
  }

  .products {
    margin-top: 30px;
    display: grid;
    grid-template-columns: repeat(
      ${({ grid }: { grid: string }) => (grid === "grid-box" ? 4 : 2)},
      1fr
    );
    gap: 15px;

    @media screen and (max-width: 860px) {
      grid-template-columns: repeat(
        ${({ grid }: { grid: string }) => (grid === "grid-box" ? 3 : 1)},
        1fr
      );
    }
    @media screen and (max-width: 650px) {
      grid-template-columns: repeat(
        ${({ grid }: { grid: string }) => (grid === "grid-box" ? 2 : 1)},
        1fr
      );
    }
    @media screen and (max-width: 460px) {
      gap: 10px;
    }
  }
`;

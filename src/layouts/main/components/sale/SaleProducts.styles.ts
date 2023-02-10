import styled from "@emotion/styled";

export const SaleProducts = styled.div`
  ul {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 15px;
    @media screen and (max-width: 1024px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media screen and (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 480px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
  .title-group {
    margin-top: 0;
  }

  .image-area {
    border-radius: 50%;
    overflow: hidden;
  }
`;

import styled from "@emotion/styled";

export const SaleProducts = styled.div`
  ul {
    display: flex;
    align-items: flex-start;
    gap: 15px;
  }
  ul li:first-child {
    flex-basis: 30%;
  }
  .title-group {
    margin-top: 0;
  }

  .image-area {
    border-radius: 50%;
    overflow: hidden;
  }
`;

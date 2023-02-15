import styled from "@emotion/styled";
export const ImageCard = styled.div`
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
  li {
    cursor: pointer;
  }
`;

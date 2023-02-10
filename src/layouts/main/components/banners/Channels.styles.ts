import styled from "@emotion/styled";
export const Channels = styled.div`
  .banners {
    display: flex;
    gap: 15px;
    justify-content: space-between;
    .image-area {
      flex-basis: 100%;
    }
    img {
      width: 100%;
    }
    @media screen and (max-width: 786px) {
      gap: 20px;
      flex-direction: column-reverse;
    }
  }
`;

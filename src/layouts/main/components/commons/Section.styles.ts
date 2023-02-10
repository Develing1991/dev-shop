import styled from "@emotion/styled";
export const Section = styled.section`
  margin-top: 100px;
  .inner {
    max-width: 1024px;
    margin: auto;
    padding: 0 20px;
    @media screen and (max-width: 350px) {
      padding: 0 10px;
    }
  }
`;

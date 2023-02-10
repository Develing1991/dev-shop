import styled from "@emotion/styled";
export const Coperation = styled.div`
  margin-top: 30px;
  font-size: var(--text-xs);
  @media screen and (max-width: 840px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    line-height: 1.5;
    gap: 10px;
  }
  @media screen and (max-width: 490px) {
    margin-top: 10px;
    grid-template-columns: repeat(1, 1fr);
  }
  dl {
    display: flex;
    gap: 20px;
    margin-bottom: 10px;
    @media screen and (max-width: 840px) {
      flex-direction: column;
      gap: 5px;
    }
  }
  span {
    color: var(--color-gray-1);
    margin-right: 5px;
  }
  .copyright {
    color: var(--color-gray-1);
    grid-column: 1/4;
    @media screen and (max-width: 490px) {
      grid-column: 1;
    }
  }
  .coperation {
    color: var(--color-gray-5);
  }
`;

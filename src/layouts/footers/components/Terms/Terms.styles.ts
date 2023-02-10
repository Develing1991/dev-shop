import styled from "@emotion/styled";

export const Terms = styled.div`
  font-size: var(--text-xs);
  font-weight: var(--font-regular);
  margin-top: 30px;
  @media screen and (max-width: 640px) {
    margin-top: 0px;
    border-bottom: 1px dotted var(--color-gray-1);
    padding-bottom: 20px;
    margin-bottom: 15px;
  }
  ul {
    display: flex;
    gap: 20px;
    @media screen and (max-width: 640px) {
      flex-direction: column;
    }
  }

  li a {
    padding: 0 15px 5px 0px;
  }
`;

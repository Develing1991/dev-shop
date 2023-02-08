import styled from "@emotion/styled";

export const UtilWrapper = styled.div`
  font-size: var(--text-sm);
  font-weight: var(--font-light);
  border-bottom: 1px solid #dbdbdb;
  background-color: #fbfbfb;

  .inner {
    max-width: 1024px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
  }

  .menu1,
  .menu2 {
    display: flex;
  }

  .menu1 li a {
    padding: 3px 10px;
    font-weight: var(--font-regular);
  }

  .menu2 li a {
    padding: 3px 10px;
  }
`;

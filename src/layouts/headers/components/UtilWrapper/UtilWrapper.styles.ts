import styled from "@emotion/styled";

export const UtilWrapper = styled.div`
  font-size: var(--text-sm);
  font-weight: var(--font-light);
  border-bottom: 1px solid #dbdbdb;
  background-color: #fbfbfb;

  @media screen and (max-width: 768px) {
    display: none;
  }
  .inner {
    max-width: 1024px;
    margin: auto;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
  }

  .menu1,
  .menu2 {
    display: flex;
  }

  .menu2 li:first-of-type {
    cursor: pointer;
  }
  .menu1 li a {
    padding: 3px 10px 3px 0;
    font-weight: var(--font-regular);
  }

  .menu2 li a {
    padding: 3px 0px 3px 10px;
    margin-left: 10px;
  }
`;

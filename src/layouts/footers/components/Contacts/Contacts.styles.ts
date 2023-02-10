import styled from "@emotion/styled";

export const Contacts = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;

  @media screen and (max-width: 640px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    border-bottom: 1px dotted var(--color-gray-1);
    padding-bottom: 10px;
    margin-bottom: 15px;
  }
  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
  }
  .call-area {
    @media screen and (max-width: 640px) {
      grid-column: 1 / 3;
    }
    @media screen and (max-width: 480px) {
      grid-column: 1;
    }
  }
  dt {
    font-weight: var(--font-bold);
    font-size: var(--text-sm);
    color: var(--color-black);
    margin-bottom: 20px;
    @media screen and (max-width: 480px) {
      margin-bottom: 10px;
    }
  }
  dd {
    font-size: var(--text-xs);
    margin-bottom: 5px;
    line-height: 1.5;
  }
  .call {
    font-size: var(--text-3xl);
    font-weight: var(--font-bold);
    color: var(--color-black);
  }

  .menu {
    font-size: var(--text-xs);
    font-weight: var(--font-medium);
  }
  .menu li {
    margin-bottom: 8px;
  }
  .menu li a {
    display: block;
    padding: 0 3px 3px 0;
  }
`;

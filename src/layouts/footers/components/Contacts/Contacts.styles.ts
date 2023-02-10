import styled from "@emotion/styled";

export const Contacts = styled.div`
  display: flex;
  margin-top: 40px;
  justify-content: space-between;
  @media screen and (max-width: 640px) {
    flex-direction: column;
  }
  dl {
    @media screen and (max-width: 640px) {
      border-bottom: 1px dotted var(--color-gray-1);
      padding-bottom: 10px;
      margin-bottom: 15px;
    }
  }
  .call-area {
    flex-basis: 50%;
  }
  dt {
    font-weight: var(--font-bold);
    font-size: var(--text-sm);
    color: var(--color-black);
    margin-bottom: 20px;
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

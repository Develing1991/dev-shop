import styled from "@emotion/styled";

export const LogoWrapper = styled.div`
  .inner {
    max-width: 1024px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 120px;
  }

  .search form {
    display: flex;
    border: 2px solid var(--color-pink);
    width: 350px;
    height: 45px;
  }

  .search input {
    width: 100%;
    height: 100%;
    font-size: var(--text-base);
    font-weight: var(--font-medium);
    padding: 0 10px;
  }

  .search button {
    width: 50px;
    background-color: var(--color-pink);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .search button .icon {
    font-size: var(--text-3xl);
    margin-left: 4px;
    color: white;
  }
`;

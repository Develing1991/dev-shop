import styled from "@emotion/styled";

export const TitleGroup = styled.div`
  margin-top: 100px;
  margin-bottom: 30px;
  line-height: 1.5;
  position: relative;
  h3 {
    /* font-size: var(--text-2xl); */
    font-size: 26px;
    font-weight: var(--font-bold);

    position: relative;
    padding-top: 10px;
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 8px;
      height: 8px;
      background-color: var(--color-pink);
      border-radius: 50%;
    }
  }

  p {
    padding-top: 10px;
    font-size: var(--text-base);
  }
`;

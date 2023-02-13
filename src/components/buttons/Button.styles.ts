import styled from "@emotion/styled";

export const Button = styled.button`
  border-radius: 2px;
  padding: 6px 10px;
  width: 100%;
  font-size: var(--text-xs);
  font-weight: var(--font-bold);
  letter-spacing: 0.01rem;
  background-color: ${({ reverse }: { reverse?: boolean }) =>
    reverse ? "var(--color-gray-5)" : "var(--color-white)"};
  border: 1px solid
    ${({ reverse }: { reverse?: boolean }) =>
      reverse ? "var(--color-gray-5)" : "var(--color-gray-1)"};
  color: ${({ reverse }: { reverse?: boolean }) =>
    reverse ? "var(--color-white)" : "var(--color-gray-5)"};
`;

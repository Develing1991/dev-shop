import styled from "@emotion/styled";

export const ActionButton = styled.button`
  border-radius: 1px;
  padding: 15px 0;
  width: 100%;
  font-size: var(--text-base);
  font-weight: var(--font-bold);
  background-color: ${({ reverse }: { reverse: boolean }) =>
    reverse ? "var(--color-gray-5)" : "var(--color-white)"};
  border: 1px solid
    ${({ reverse }: { reverse: boolean }) =>
      reverse ? "var(--color-white)" : "var(--color-gray-5)"};
  color: ${({ reverse }: { reverse: boolean }) =>
    reverse ? "var(--color-white)" : "var(--color-gray-5)"};
`;

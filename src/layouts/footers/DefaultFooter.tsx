import styled from "@emotion/styled";
import Contacts from "./components/Contacts/Contacts";
export default function DefaultFooter() {
  return (
    <Footer>
      <div className="inner">
        <Contacts />
      </div>
    </Footer>
  );
}
const Footer = styled.footer`
  margin-top: 100px;
  background-color: #f1f1f1;
  border-top: 1px solid var(--color-gray-0);
  .inner {
    max-width: 1024px;
    margin: auto;
    padding: 0 20px;
  }
`;

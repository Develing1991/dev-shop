import styled from "@emotion/styled";
import Contacts from "./components/Contacts/Contacts";
import Coperation from "./components/Coperation/Coperation";
import Terms from "./components/Terms/Terms";
export default function DefaultFooter() {
  return (
    <Footer>
      <div className="inner">
        <Contacts />
        <Terms />
        <Coperation />
      </div>
    </Footer>
  );
}
const Footer = styled.footer`
  margin-top: 100px;
  padding: 40px 0 30px 0;
  background-color: #f1f1f1;
  border-top: 1px solid var(--color-gray-0);
  .inner {
    max-width: 1024px;
    margin: auto;
    padding: 0 20px;
    @media screen and (max-width: 350px) {
      padding: 0 10px;
    }
  }
`;

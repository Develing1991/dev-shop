import styled from "@emotion/styled";
import { AiFillFacebook, AiFillTwitterCircle } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { IconType } from "react-icons/lib";

export const SignInPage = styled.div`
  width: 400px;
  max-width: 400px;
  margin: auto;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  @media screen and (max-width: 480px) {
    width: 100%;
    padding: 15px;
  }

  .title {
    text-align: center;
    margin-bottom: 10px;
    font-size: var(--text-5xl);
    font-weight: var(--font-bold);
    letter-spacing: 0.1rem;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
  }

  input.email,
  input.password {
    width: 100%;
    border: 1px solid var(--color-gray-0);
    padding: 10px;
    font-size: var(--text-medium);
  }

  .save {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 10px;
    font-size: var(--text-sm);
  }

  .checkbox {
    width: 15px;
    height: 15px;
  }

  .signin-btn {
    background-color: var(--color-black);
    color: var(--color-white);
    font-weight: var(--font-bold);
    font-size: var(--text-xl);
    border-radius: 4px;
    padding: 10px;
    margin-top: 20px;
  }

  .signin-btn:hover {
    opacity: 0.8;
  }

  .breadcrumbs {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-top: 5px;
    position: relative;
    height: 30px;
    margin-top: 30px;
  }
  .breadcrumbs li {
    margin-bottom: 10px;
  }
  .breadcrumbs li a {
    padding: 0px 10px;
  }

  .breadcrumbs li::after {
    content: "";
    width: 1px;
    height: 1rem;
    background-color: var(--color-gray-0);
    position: absolute;
    top: 0;
    bottom: -2px;
    margin: auto;
    @media screen and (max-width: 350px) {
      display: none;
    }
  }

  .breadcrumbs li:last-of-type::after {
    display: none;
  }

  .others {
    display: flex;
    justify-content: space-around;
    margin-top: 40px;
  }
`;

export const GoogleIcon = styled(CommStyled(FcGoogle))``;
export const FacebookIcon = styled(CommStyled(AiFillFacebook))`
  color: #1877f2;
`;
export const TwitterIcon = styled(CommStyled(AiFillTwitterCircle))`
  color: #1d9bf0;
`;

function CommStyled(Icon: IconType) {
  return styled(Icon)`
    width: 40px;
    height: 40px;
    cursor: pointer;
  `;
}

import styled from "@emotion/styled";
import { AiOutlineCheckCircle } from "react-icons/ai";
export const SignUpPage = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  max-width: 500px;
  margin: auto;
  align-items: center;
  margin-top: 80px;

  @media screen and (max-width: 640px) {
    width: 100%;
    padding: 20px;
  }

  .title {
    font-size: var(--text-4xl);
    font-weight: var(--font-bold);
    letter-spacing: 0.1rem;
    margin-bottom: 30px;
  }
  .notice {
    font-size: var(--text-lg);
    margin-bottom: 40px;
    span {
      font-weight: var(--font-bold);
    }
  }
  form {
    border: 1px solid var(--color-gray-0);
    padding: 50px 20px;
    border-radius: 4px;
    .form-control {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }
  }
  form label {
    font-size: var(--text-lg);
    margin-top: 20px;
  }
  form input {
    width: 100%;
    padding: 10px 15px;
    border: 1px solid var(--color-gray-0);
    font-size: var(--text-lg);
  }
  .phone-number {
    display: flex;
    gap: 20px;
  }

  .zipcode-group {
    display: flex;
    gap: 10px;
  }
  .zipcode-group #address {
    width: 100px;
  }
  .zipcode-group .address-btn {
    padding: 0 10px;
    background-color: var(--color-black);
    color: var(--color-white);
    font-weight: var(--font-bold);
    font-size: var(--text-base);
    border-radius: 4px;
  }
  .zipcode-group .address-btn:hover {
    opacity: 0.8;
  }
  .readonly {
    background-color: var(--color-gray-0);
  }

  .terms {
    margin-top: 20px;
    border: 1px solid var(--color-gray-0);
    border-radius: 4px;
    padding: 20px;
    width: 100%;
    font-size: var(--text-xl);
    @media screen and (max-width: 480px) {
      font-size: var(--text-base);
    }
  }

  .terms input[type="checkbox"] {
    width: 15px;
    height: 15px;
  }
  .terms label {
    margin-left: 10px;
  }

  .terms ul {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .terms li {
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: space-between;
  }
  .terms li label {
  }
  .terms .required {
    font-weight: var(--font-bold);
  }
  .ad-check {
    margin-left: 30px;
    display: flex;
    gap: 20px;
    font-size: var(--text-base);
    @media screen and (max-width: 480px) {
      font-size: var(--text-sm);
    }
    @media screen and (max-width: 360px) {
      flex-direction: column;
      margin-left: 15px;
    }
  }

  .ad-check > div {
    display: flex;
    align-items: center;
  }

  .signup-btn {
    background-color: var(--color-black);
    color: var(--color-white);
    width: 100%;
    margin-top: 40px;
    padding: 20px 0;
    border-radius: 4px;
    font-size: var(--text-2xl);
    font-weight: var(--font-bold);
    letter-spacing: 0.1rem;
  }
  .signup-btn:hover {
    opacity: 0.8;
  }
`;

export const CheckIcon = styled(AiOutlineCheckCircle)`
  color: var(--color-orange);

  vertical-align: bottom;
`;

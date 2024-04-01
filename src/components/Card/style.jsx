import styled from "styled-components";

export const Container = styled.div`
  width: 400px;
  height: auto;
  border-radius: 8px;
  background-color: var(--colorCard);
  box-shadow: -3px 17px 43px -7px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: -3px 17px 43px -7px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -3px 17px 43px -7px rgba(0, 0, 0, 0.75);
  padding-right: 50px;
  padding-left: 50px;
  padding-bottom: 40px;

  @media (max-width: 800px) {
    width: 50%;
  }
`;

export const Tittle = styled.h1`
  padding-top: 20px;
  font-size: 1.5rem;
  color: var(--colorText);
`;

export const Form = styled.form`
  padding-top: 10px;
`;
export const Input = styled.input`
  display: grid;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: 3px solid var(--colorBg);
  height: 33px;
  width: 94%;
  padding-left: 20px;
  color: var(--colorText);
  font-size: 1rem;
  &:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }
  @media (max-width: 800px) {
    width: 80%;
  }
`;

export const Button = styled.button`
  background-color: var(--colorBg);
  border: 3px solid var(--colorBg);
  height: 37px;
  width: 100%;
  color: var(--colorText);
  font-size: 1rem;

  &:hover {
    cursor: pointer;
    border: 3px solid var(--colorBg);
    background-color: #3b3b985f;
  }
  @media (max-width: 800px) {
    width: 90%;
  }
`;

export const ContactContainer = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  background-color: var(--colorBg);
  padding: 10px;
  margin-top: 20px;
  margin-bottom: 10px;
  padding-right: 20px;
  padding-left: 20px;
  border-radius: 8px;
  @media (max-width: 800px) {
    width: 80%;
  }

  p {
    margin-top: 10px;
    font-size: 1.4rem;
    color: var(--colorText);
    @media (max-width: 800px) {
      font-size: 90%;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 10px;

  img {
    cursor: pointer;
  }
`;

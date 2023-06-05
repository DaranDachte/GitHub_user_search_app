import styled from "styled-components";

const Button = () => {
  return <ButtonWrapper type="submit">Search</ButtonWrapper>;
};

const ButtonWrapper = styled.button`
  background-color: ${(props) => props.theme.colors.themeBtn};
  color: #ffffff;
  height: 50px;
  width: 106px;
  border-radius: 10px;
  border: none;
  font-family: Space Mono;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: center;
  &:hover {
    cursor: pointer;
    background-color: #60abff;
  }
`;

export default Button;

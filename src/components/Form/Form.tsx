import styled from "styled-components";
import Button from "../Button/Button";

const Form = ({ userInput, setUserInput, FetchUser }) => {
  return (
    <>
      <FormWrapper
        onSubmit={(e) => {
          e.preventDefault();
          FetchUser(userInput);
        }}
      >
        <Svg>
          <label htmlFor="userSearch">
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.6087 0C4.7591 0 0 4.74609 0 10.5797C0 16.4133 4.75915 21.1594 10.6087 21.1594C13.2162 21.1594 15.6071 20.2163 17.4563 18.6542L22.575 23.747C22.7449 23.9157 22.9664 24 23.1884 24C23.4118 24 23.635 23.9145 23.8049 23.7438C24.1435 23.4032 24.142 22.8527 23.8017 22.5139L18.6893 17.4274C20.2652 15.5807 21.2174 13.189 21.2174 10.5797C21.2174 4.74609 16.4582 0 10.6087 0ZM16.9346 16.7705C18.5071 15.1744 19.4782 12.9879 19.4782 10.5797C19.4782 5.70488 15.4994 1.73908 10.6087 1.73908C5.71794 1.73908 1.73913 5.70488 1.73913 10.5797C1.73913 15.4542 5.71794 19.4203 10.6087 19.4203C13.0163 19.4203 15.2029 18.4591 16.8027 16.9016C16.8211 16.879 16.8407 16.8571 16.8617 16.836C16.885 16.8125 16.9094 16.7907 16.9346 16.7705Z"
                fill="#0079FF"
              />
            </svg>
          </label>
        </Svg>
        <Input
          value={userInput}
          onChange={(event) => setUserInput(event.target.value)}
          type="search"
          id="userSearch"
          placeholder="Search GitHub username…"
        ></Input>
        <SearchButton>
          <Button />
        </SearchButton>
      </FormWrapper>
    </>
  );
};

const FormWrapper = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 69px;
  width: 800px;
  margin: auto;
  border-radius: 10px;
  border: none;
  background-color: #fefefe;
`;

const Input = styled.input`
  font-family: Space Mono;
  font-size: 18px;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: 0px;
  text-align: left;
  border: none;
  outline: none;
  outline-color: #fefefe;
  wight: 400px;
  margin-left: 20px;
  flex: 1;
`;

const Svg = styled.div`
  padding-left: 20px;
  wight: 50px;
`;
const SearchButton = styled.div`
  margin-right: 10px;
`;
export default Form;

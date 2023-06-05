import styled from "styled-components";
import { useContext, useEffect } from "react";
import ThemContext from "../../contexts/ThemContext";
import CountContext from "../../contexts/CountContext";
import Avatar from "../../assets/Avatar.png";

const UserInfo = ({ user }) => {
  const { lightMode, SwitchMode } = useContext(ThemContext);

  const { count, changeCount } = useContext(CountContext);

  useEffect(() => {
    console.log(lightMode);
    console.log(count);
    console.log(user);
  }, [lightMode, count, user]);

  return (
    <Wrapper>
      <Gravatar>
        {user?.avatar_url ? (
          <ImgAvatar src={user.avatar_url} />
        ) : (
          <ImgAvatar src={Avatar} />
        )}
      </Gravatar>
      <Container>
        <Title>{user?.name}</Title>
        <Date>{user?.created_at}</Date>

        <NickName>{user?.login}</NickName>
        <BioResult>{user?.bio}</BioResult>
        <UserStatistic>
          <Repos>Repos: {user?.public_repos}</Repos>
          <Followers>Followers: {user?.followers}</Followers>
          <Following>Following: {user?.following}</Following>
        </UserStatistic>
        <ContainerGrid>
          <Location>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="20"
              viewBox="0 0 14 20"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.03013 0.00158203C9.42758 0.0504882 11.5835 1.33021 12.7973 3.4249C14.038 5.56599 14.072 8.13786 12.8882 10.3047L7.92872 19.3823L7.92196 19.3943C7.7038 19.7736 7.3129 20 6.87634 20C6.43974 20 6.04884 19.7736 5.83064 19.3943L5.82388 19.3823L0.86439 10.3047C-0.319437 8.13786 -0.285492 5.56599 0.95521 3.4249C2.16904 1.33021 4.32497 0.0504882 6.72239 0.00158203C6.82477 -0.000527343 6.92778 -0.000527343 7.03013 0.00158203ZM4.06376 6.25001C4.06376 7.80083 5.32544 9.06251 6.87626 9.06251C8.42712 9.06251 9.68876 7.80083 9.68876 6.25001C9.68876 4.69919 8.42708 3.43752 6.87626 3.43752C5.32544 3.43752 4.06376 4.69919 4.06376 6.25001Z"
                fill="#4B6A9B"
              />
            </svg>
            {} {user?.location}
          </Location>
          <Twitter>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill="none"
            >
              <path
                d="M20 2.79876C19.2562 3.12501 18.4637 3.34126 17.6375 3.44626C18.4875 2.93876 19.1362 2.14126 19.4412 1.18001C18.6487 1.65251 17.7737 1.98626 16.8412 2.17251C16.0887 1.37126 15.0162 0.875015 13.8462 0.875015C11.5762 0.875015 9.74874 2.71751 9.74874 4.97626C9.74874 5.30126 9.77624 5.61376 9.84374 5.91126C6.43499 5.74501 3.41875 4.11126 1.3925 1.62251C1.03875 2.23626 0.831249 2.93876 0.831249 3.69501C0.831249 5.11501 1.5625 6.37376 2.6525 7.10251C1.99375 7.09001 1.3475 6.89876 0.799999 6.59751C0.799999 6.61001 0.799999 6.62626 0.799999 6.64251C0.799999 8.63501 2.22125 10.29 4.085 10.6713C3.75125 10.7625 3.3875 10.8063 3.01 10.8063C2.7475 10.8063 2.4825 10.7913 2.23375 10.7363C2.765 12.36 4.2725 13.5538 6.06499 13.5925C4.67 14.6838 2.89875 15.3413 0.981249 15.3413C0.644999 15.3413 0.3225 15.3263 0 15.285C1.81625 16.4562 3.96875 17.125 6.28999 17.125C13.835 17.125 17.96 10.875 17.96 5.45751C17.96 5.27626 17.9537 5.10126 17.945 4.92751C18.7587 4.35001 19.4425 3.62876 20 2.79876Z"
                fill="#4B6A9B"
              />
            </svg>
            {} {user?.twitter_username}
          </Twitter>
          <GitHibLink>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <g id="002-url">
                <path
                  id="Path"
                  d="M7.40416 5.01207C5.04862 7.44921 5.56264 11.4937 8.26088 13.2854C8.34979 13.3445 8.46807 13.3328 8.54444 13.2582C9.11248 12.7031 9.59303 12.1655 10.0138 11.4817C10.0782 11.3771 10.0381 11.2414 9.93014 11.1829C9.51858 10.9599 9.10905 10.5418 8.8785 10.1002L8.87823 10.1003C8.60205 9.55042 8.50803 8.93398 8.65424 8.29734C8.6544 8.29738 8.65455 8.29742 8.65471 8.29742C8.82295 7.48234 9.69799 6.72414 10.3663 6.02293C10.3649 6.02246 10.3635 6.02195 10.3621 6.02148L12.8662 3.46578C13.864 2.44731 15.5054 2.43891 16.5137 3.44715C17.5321 4.445 17.549 6.09468 16.5511 7.11312L15.0344 8.67281C14.9642 8.74499 14.9414 8.85031 14.9743 8.9455C15.3235 9.9582 15.4094 11.3861 15.1754 12.465C15.1688 12.4951 15.2061 12.5149 15.2277 12.4928L18.4557 9.19816C20.5179 7.09347 20.5004 3.66676 18.4168 1.58324C16.2906 -0.543044 12.829 -0.525348 10.7246 1.6225L7.41709 4.99824C7.41272 5.00285 7.40858 5.00754 7.40416 5.01207Z"
                  fill="#4B6A9B"
                />
                <path
                  id="Path_2"
                  d="M13.439 13.7495C13.441 13.7487 13.4428 13.7482 13.4449 13.7473C14.1036 12.5426 14.2333 11.161 13.9246 9.81421L13.9232 9.81565L13.9217 9.81499C13.6285 8.61542 12.8241 7.42425 11.7316 6.69085C11.6376 6.62777 11.4875 6.63507 11.3995 6.70624C10.8461 7.1537 10.3044 7.72749 9.94697 8.45972C9.89083 8.57468 9.93287 8.71277 10.0435 8.77698C10.4583 9.0178 10.8329 9.37038 11.0837 9.83847C11.2792 10.1691 11.4722 10.7963 11.3474 11.4704C11.231 12.3642 10.3282 13.184 9.61068 13.9228C9.06451 14.4813 7.67646 15.8971 7.12052 16.465C6.12267 17.4835 4.47299 17.5003 3.45455 16.5024C2.43612 15.5046 2.41928 13.8549 3.41713 12.8365L4.93834 11.2721C5.00728 11.2012 5.03072 11.0982 5.00006 11.0041C4.66229 9.96776 4.56975 8.57202 4.78295 7.49441C4.78889 7.46437 4.75193 7.44519 4.73049 7.46706L1.551 10.7122C-0.53228 12.8385 -0.514624 16.3003 1.5903 18.4052C3.71647 20.4884 7.16049 20.4532 9.24369 18.3271C9.9674 17.5175 13.0654 14.6492 13.439 13.7495Z"
                  fill="#4B6A9B"
                />
              </g>
            </svg>
            {} {user?.blog}
          </GitHibLink>

          <GitHub>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <g id="001-office-building">
                <path
                  id="Shape"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.8583 1.55835L1.7 0.166681C1.275 0.100014 0.841666 0.216681 0.516666 0.491681C0.191666 0.775014 0 1.18335 0 1.60835V19.1667C0 19.625 0.375 20 0.833333 20H3.54166V15.625C3.54166 14.8167 4.19166 14.1667 5 14.1667H7.08333C7.89166 14.1667 8.54166 14.8167 8.54166 15.625V20H12.0833V3.00001C12.0833 2.28335 11.5667 1.67501 10.8583 1.55835ZM4.58333 12.2917H3.33333C2.98833 12.2917 2.70833 12.0117 2.70833 11.6667C2.70833 11.3217 2.98833 11.0417 3.33333 11.0417H4.58333C4.92833 11.0417 5.20833 11.3217 5.20833 11.6667C5.20833 12.0117 4.92833 12.2917 4.58333 12.2917ZM3.33333 9.79167H4.58333C4.92833 9.79167 5.20833 9.51167 5.20833 9.16667C5.20833 8.82167 4.92833 8.54167 4.58333 8.54167H3.33333C2.98833 8.54167 2.70833 8.82167 2.70833 9.16667C2.70833 9.51167 2.98833 9.79167 3.33333 9.79167ZM4.58333 7.29167H3.33333C2.98833 7.29167 2.70833 7.01167 2.70833 6.66667C2.70833 6.32167 2.98833 6.04168 3.33333 6.04168H4.58333C4.92833 6.04168 5.20833 6.32167 5.20833 6.66667C5.20833 7.01167 4.92833 7.29167 4.58333 7.29167ZM3.33333 4.79168H4.58333C4.92833 4.79168 5.20833 4.51168 5.20833 4.16668C5.20833 3.82168 4.92833 3.54168 4.58333 3.54168H3.33333C2.98833 3.54168 2.70833 3.82168 2.70833 4.16668C2.70833 4.51168 2.98833 4.79168 3.33333 4.79168ZM8.74999 12.2917H7.49999C7.15499 12.2917 6.87499 12.0117 6.87499 11.6667C6.87499 11.3217 7.15499 11.0417 7.49999 11.0417H8.74999C9.09499 11.0417 9.37499 11.3217 9.37499 11.6667C9.37499 12.0117 9.09499 12.2917 8.74999 12.2917ZM7.49999 9.79167H8.74999C9.09499 9.79167 9.37499 9.51167 9.37499 9.16667C9.37499 8.82167 9.09499 8.54167 8.74999 8.54167H7.49999C7.15499 8.54167 6.87499 8.82167 6.87499 9.16667C6.87499 9.51167 7.15499 9.79167 7.49999 9.79167ZM8.74999 7.29167H7.49999C7.15499 7.29167 6.87499 7.01167 6.87499 6.66667C6.87499 6.32167 7.15499 6.04168 7.49999 6.04168H8.74999C9.09499 6.04168 9.37499 6.32167 9.37499 6.66667C9.37499 7.01167 9.09499 7.29167 8.74999 7.29167ZM7.49999 4.79168H8.74999C9.09499 4.79168 9.37499 4.51168 9.37499 4.16668C9.37499 3.82168 9.09499 3.54168 8.74999 3.54168H7.49999C7.15499 3.54168 6.87499 3.82168 6.87499 4.16668C6.87499 4.51168 7.15499 4.79168 7.49999 4.79168Z"
                  fill="#4B6A9B"
                />
                <path
                  id="Shape_2"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.9166 7.79251L18.85 9.03501C19.5308 9.18584 20 9.77168 20 10.46V18.5417C20 19.3458 19.3458 20 18.5416 20H12.9166V7.79251ZM15.625 17.5H16.875C17.22 17.5 17.5 17.22 17.5 16.875C17.5 16.53 17.22 16.25 16.875 16.25H15.625C15.28 16.25 15 16.53 15 16.875C15 17.22 15.28 17.5 15.625 17.5ZM16.875 15H15.625C15.28 15 15 14.72 15 14.375C15 14.03 15.28 13.75 15.625 13.75H16.875C17.22 13.75 17.5 14.03 17.5 14.375C17.5 14.72 17.22 15 16.875 15ZM15.625 12.5H16.875C17.22 12.5 17.5 12.22 17.5 11.875C17.5 11.53 17.22 11.25 16.875 11.25H15.625C15.28 11.25 15 11.53 15 11.875C15 12.22 15.28 12.5 15.625 12.5Z"
                  fill="#4B6A9B"
                />
              </g>
            </svg>
            {} {user?.url}
          </GitHub>
        </ContainerGrid>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 900px;
  height: 600px;
  margin: auto;
  margin-top: 20px;
  background: ${(props) => props.theme.colors.card};
  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
  border-radius: 15px;
`;

const ImgAvatar = styled.img`
  border-radius: 50%;
  height: 117px;
  width: 117px;
  margin: 50px;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const Gravatar = styled.div``;

const Title = styled.h2`
  font-family: "Space Mono";
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 39px;
  color: #2b3442;
`;

const Date = styled.p`
  font-family: "Space Mono";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;
  text-align: right;
  color: #697c9a;
`;
const NickName = styled.p`
  font-family: "Space Mono";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #0079ff;
`;

const BioResult = styled.p`
  font-family: "Space Mono";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 25px;
  color: #4b6a9b;
  mix-blend-mode: normal;
  opacity: 0.75;
`;

//const ContainerResult = styled.div`
//display: flex;  justify-content: flex-start;  background: #f6f8ff;  border-radius: 10px;  width: 480px;  height: 85px;`;

const UserStatistic = styled.div`
  display: flex;
  justify-content: center;
  background: #f6f8ff;
  border-radius: 10px;
  width: 65%;
  height: 20%;
  margin-left: 150px;
  &:hover {
    border: 1px solid #00bfff;
  }
`;

const Repos = styled.p`
  font-family: Space Mono;
  font-size: 13px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0px;
  text-align: center;
  flex: 1;
`;

const Followers = styled.p`
  font-family: Space Mono;
  font-size: 13px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0px;
  text-align: center;
  flex: 1;
`;

const Following = styled.p`
  font-family: Space Mono;
  font-size: 13px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0px;
  text-align: center;
  flex: 1;
`;

const ContainerGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  justify-content: center;
  margin-left: 100px;
  gap: 5px;
  weight: 700px;
  height: 200px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Location = styled.p`
  font-family: Space Mono;
  font-size: 20px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0px;
  text-align: left;
  color: #4b6a9b;
  margin-left: 5px;
  padding: 10px;
  border-radius: 10px;
  &:hover {
    background-color: rgb(246, 248, 255);
    color: #000000;
    cursor: pointer;
  }
`;
const GitHibLink = styled.p`
  font-family: Space Mono;
  font-size: 20px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0px;
  text-align: left;
  color: #4b6a9b;
  margin-left: 5px;
  padding: 10px;
  border-radius: 10px;
  &:hover {
    background-color: rgb(246, 248, 255);
    color: #000000;
    cursor: pointer;
  }
`;

const Twitter = styled.p`
  font-family: Space Mono;
  font-size: 20px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0px;
  text-align: left;
  color: #4b6a9b;
  margin-left: 5px;
  padding: 10px;
  border-radius: 10px;
  &:hover {
    background-color: rgb(246, 248, 255);
    color: #000000;
    cursor: pointer;
  }
`;
const GitHub = styled.p`
  font-family: Space Mono;
  font-size: 20px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0px;
  text-align: left;
  color: #4b6a9b;
  margin-left: 5px;
  padding: 10px;
  border-radius: 10px;
  &:hover {
    background-color: rgb(246, 248, 255);
    color: #000000;
    cursor: pointer;
  }
`;

export default UserInfo;

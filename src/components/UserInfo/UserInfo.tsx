import styled from "styled-components";
import { useContext, useEffect } from "react";
import ThemContext from "../../contexts/ThemContext";
import CountContext from "../../contexts/CountContext";

const UserInfo = ({ user }) => {
  const { lightMode, SwitchMode } = useContext(ThemContext);

  const { count, changeCount } = useContext(CountContext);

  useEffect(() => {
    console.log(lightMode);
    console.log(count);
  }, [lightMode, count]);

  return (
    <>
      <Container>
        <button onClick={SwitchMode}> Push me</button>
        <Title>{user}</Title>
        <Date>Today is Day</Date>
      </Container>
      <NickName>@Octocat</NickName>
      <BioResult>This profil has no bio</BioResult>
      <ContainerResult>
        <UserStatistic>
          <Repos>Repos</Repos>
          <Followers>Followers</Followers>
          <Following>Following</Following>
        </UserStatistic>
      </ContainerResult>
      <ContainerGrid>
        <Location>San Francisco</Location>
        <GitHibLink>https://github.blog</GitHibLink>
        <Twitter>Not Availible</Twitter>
        <GitHub>@github</GitHub>
      </ContainerGrid>
      <button onClick={changeCount}>Plus one</button>
    </>
  );
};

/*const Wrapper = styled.div`
  justify-content: space-between;
  flex-direction: row;
  display: flex;
  width: 730px;
  height: 419px;
  background: #fefefe;
  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
  border-radius: 15px;
`;}*/

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

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

const ContainerResult = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  background: #f6f8ff;
  border-radius: 10px;
  width: 480px;
  height: 85px;
`;

const UserStatistic = styled.ul``;

const Repos = styled.li`
  font-family: Space Mono;
  font-size: 13px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0px;
  text-align: left;
`;

const Followers = styled.li`
  font-family: Space Mono;
  font-size: 13px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0px;
  text-align: left;
`;

const Following = styled.li`
  font-family: Space Mono;
  font-size: 13px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0px;
  text-align: left;
`;

const ContainerGrid = styled.div`
  display: grid;
  grid-auto-rows: auto;
`;

const Location = styled.p`
  font-family: Space Mono;userStatistic
  font-size: 15px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0px;
  text-align: left;
  color: #4b6a9b;
`;
const GitHibLink = styled.p``;
const Twitter = styled.p`
  font-family: Space Mono;
  font-size: 15px;
  font-weight: 400;
`;
const GitHub = styled.p``;

export default UserInfo;

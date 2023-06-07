import styled from "styled-components";

import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import UserInfo from "./components/UserInfo/UserInfo";
import { ThemContextProvider } from "./contexts/ThemContext";
import { CountContextProvider } from "./contexts/CountContext";
import { useState } from "react";

function App() {
  const [user, setUser] = useState<UserType | null>(null);
  const [userInput, setUserInput] = useState("");
  const [isNotFound, setIsNotFound] = useState(false);

  const FetchUser = async (username: string) => {
    console.log(username);
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => {
        console.log(typeof res.status);
        if (res.status == 404) {
          console.log(res);
          console.log(res.status);
          setIsNotFound(true);
        }
        return res.json();
      })
      .then((res) => {
        setIsNotFound(false);
        setUser(res);
      });
  };
  return (
    <ThemContextProvider>
      <CountContextProvider>
        <AppWrapper>
          <Header />
          <Form
            userInput={userInput}
            setUserInput={setUserInput}
            FetchUser={FetchUser}
          />
          {user?.id ? <UserInfo user={user} /> : "No results"}
        </AppWrapper>
      </CountContextProvider>
    </ThemContextProvider>
  );
}
type UserType = {
  avatar_url: string;
  bio: string;
  blog: string;
  company?: string;
  created_at: string;
  email: string;
  events_url: string;
  followers: number;
  followers_url: string;
  following: number;
  following_url: string;
  gists_url: string;
  gravatar_id: string;
  hireable: string | null;
  html_url: string;
  id: number;
  location: string;
  login: string;
  name: string;
  node_id: string;
  organizations_url: string;
  public_gists: number;
  public_repos: number;
  received_events_url: string;
  repos_url: string;
  site_admin: false;
  starred_url: string;
  subscriptions_url: string;
  twitter_username: string;
  type: string | null;
  updated_at: string;
  url: string;
};

const AppWrapper = styled.div`
  width: 100%;
  heigth: 100vh;
  background: ${(props) => props.theme.colors.background};
`;
export default App;

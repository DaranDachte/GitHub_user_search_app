import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import UserInfo from "./components/UserInfo/UserInfo";
import UserContext from "./contexts/UserContext";
import { ThemContextProvider } from "./contexts/ThemContext";
import { CountContextProvider } from "./contexts/CountContext";
import { useEffect, useState } from "react";

const FetchUser = async (username: string) => {
  fetch(`https://api.github.com/users/${username}`)
    .then((res) => res.json())
    .then(console.log);
};

function App() {
  const [user, setUser] = useState<UserType | null>(null);
  useEffect(() => {
    FetchUser("DaranDachte");
  }, []);

  return (
    <UserContext.Provider value={"Hello World"}>
      <ThemContextProvider>
        <CountContextProvider>
          <Header />
          <Form />
          <UserInfo user={user} />
        </CountContextProvider>
      </ThemContextProvider>
    </UserContext.Provider>
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

export default App;

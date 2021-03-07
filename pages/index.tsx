import * as React from "react";
import {UserProfile, useUser, withPageAuthRequired} from "@auth0/nextjs-auth0";

const Home: React.FC = () => {
  const {user, error, isLoading} = useUser();
  const [serverUser, setServerUser] = React.useState<UserProfile>(null);

  function handleGetUserData() {
    return fetch(`/api/user`)
      .then((res) => res.json())
      .then(setServerUser);
  }

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div>
      <span>Hello world</span>

      <div>
        <img alt={user.name} src={user.picture} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        {JSON.stringify({user})}
      </div>

      <hr />
      {serverUser && JSON.stringify({serverUser})}
      <br />
      <button onClick={handleGetUserData}>Get user data</button>
      <hr />

      <br />
      <a href="/api/auth/logout">Logout</a>
    </div>
  );
};

export default withPageAuthRequired(Home);

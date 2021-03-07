import * as React from "react";
import {AppProps} from "next/app";
import {UserProvider} from "@auth0/nextjs-auth0";

const App: React.FC<AppProps> = ({Component, pageProps}) => {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
};

export default App;

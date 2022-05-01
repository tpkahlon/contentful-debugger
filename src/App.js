import React, { useState } from "react";
import { parseURL } from "./helpers";
import AccessToken from "./components/AccessToken";
import ContentTypeID from "./components/ContentTypeID";
import EntryID from "./components/EntryID";
import EnvironmentID from "./components/EnvironmentID";
import Host from "./components/Host";
import SpaceID from "./components/SpaceID";
import Type from "./components/Type";
import UI from "./components/UI";
import Buttons from "./components/Buttons";
import AppContext from "./context/AppContext";
import { labels } from "./helpers";

const App = () => {
  const initialState = {
    host: "",
    spaceId: "",
    accessToken: "",
    contentTypeId: "",
    environmentId: "master",
    type: "",
    url: "",
  };
  const [app, setApp] = useState(initialState);
  const handleChange = (e) => {
    const { name, value } = e?.target;
    setApp({
      ...app,
      [name]: value,
    });
  };
  const handleClick = (e) => {
    e.preventDefault();
    parseURL(app, setApp);
  };

  return (
    <AppContext.Provider
      value={{
        labels,
        app,
        handleChange,
        handleClick,
      }}
    >
      <main className="app">
        <UI />
        <div className="form">
          <Host />
          <SpaceID />
          <AccessToken />
          <EnvironmentID />
          <ContentTypeID />
          <EntryID />
          <Type />
          <Buttons />
        </div>
      </main>
    </AppContext.Provider>
  );
};

export default App;

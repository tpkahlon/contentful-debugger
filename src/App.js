import React, { useState } from "react";
import { parseURL } from "./helpers";
import AccessToken from "./components/AccessToken";
import AssetID from "./components/AssetID";
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
    query: "",
    url: "",
    cms: "",
  };
  const appState = localStorage?.getItem(labels?.saveState) ? JSON.parse(localStorage?.getItem(labels?.saveState)) : initialState;
  const [app, setApp] = useState(appState);
  const handleChange = (e) => {
    const { name, value } = e?.target;
    setApp({
      ...app,
      [name]: value,
    });
  };
  const handleReset = (e) => {
    e.preventDefault();
    localStorage?.removeItem(labels?.saveState);
  };
  const handleSave = (e) => {
    e.preventDefault();
    localStorage?.setItem(labels?.saveState, JSON.stringify(app));
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
        handleSave,
        handleReset,
      }}
    >
      <main className="app">
        <UI />
        <div className="form">
          <Host />
          <SpaceID />
          <AccessToken />
          <AssetID />
          <ContentTypeID />
          <EnvironmentID />
          <EntryID />
          <Type />
          <Buttons />
        </div>
      </main>
    </AppContext.Provider>
  );
};

export default App;

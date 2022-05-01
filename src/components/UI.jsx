import React from "react";
// import React, { useContext } from "react";
// import AppContext from "../context/AppContext";

const UI = () => {
  // const { app } = useContext(AppContext);
  // const { spaceId, accessToken, url } = app;
  return (
    <div className="ui">
      <h1 className="h1">Contentful Debugger</h1>
      <p className="p">
        Test API endpoints provided by Contentful. For more information,{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/synchronization/structure-of-deleted-entities/query-deleted-entries/console"
        >
          check their documentation
        </a>
        .
      </p>
      {/* {spaceId && <div>SID: {spaceId}</div>}
      {accessToken && <div>AT: {accessToken}</div>}
      {url && (
        <a href={url} target="_blank" rel="noopener noreferrer">
          Check JSON
        </a>
      )} */}
    </div>
  );
};

export default UI;

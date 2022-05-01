import React from "react";

const UI = () => {
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
    </div>
  );
};

export default UI;

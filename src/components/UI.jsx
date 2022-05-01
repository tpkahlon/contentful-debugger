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
          href="https://www.contentful.com/developers/docs/references/content-delivery-api/"
        >
          check their documentation
        </a>
        .
      </p>
      <p className="p">
        <strong>RESET</strong> button clears saved data.
      </p>
      <p className="p">
        <strong>SAVE</strong> button stores information submitted by user. Next
        time, when page is visited or refreshed, stored options are dynamically
        populated.
      </p>
      <p className="p">
        <strong>GENERATE</strong> creates <em>View JSON</em> link to view
        returned response in JSON format. It also creates{" "}
        <em>View in Contentful</em> link to visit entry in Contentful CMS.
      </p>
      <p className="p">
        <strong>View JSON</strong> opens returned response in a new tab.
      </p>
      <p className="p">
        <strong>View in Contentful</strong> opens returned response in Contentful CMS.
      </p>
    </div>
  );
};

export default UI;

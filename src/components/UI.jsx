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
        <strong>RESET</strong> button clears saved data in your browser.
      </p>
      <p className="p">
        <strong>SAVE</strong> button saves your options locally in your browser.
        Next time, when you visit the page or refresh, your configuration will
        be remembered and automatically filled.
      </p>
      <p className="p">
        <strong>GENERATE</strong> will create a <em>View JSON</em> link to view
        returned response in JSON format. It will also create a{" "}
        <em>View in Contentful</em> link to view entry in Contentful CMS.
      </p>
      <p className="p">
        <strong>View JSON</strong> can be used to check returned response in
        JSON format.
      </p>
      <p className="p">
        <strong>View in Contentful</strong> can be used to view entry within
        Contentful.
      </p>
    </div>
  );
};

export default UI;

import React from "react";

const UI = () => {
  return (
    <div className="ui">
      <h1 className="h1">Contentful Debugger</h1>
      <p className="p">
        This application provides a platform to make test calls to Content
        Management/Preview/Delivery API endpoints. There are two different types
        of tokens available. One is <em>Content delivery/preview token</em> and
        another is <em>Content management token</em>. Content management token
        can be used to make test calls to endpoint with <strong>API</strong>{" "}
        host. Delivery/Preview token can be used to make test calls to{" "}
        <strong>CDN/Preview</strong> host. Please make sure to generate valid
        token for each API endpoint. For more information,{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.contentful.com/developers/docs/references/"
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
        <strong>View in Contentful</strong> opens returned response in
        Contentful CMS.
      </p>
    </div>
  );
};

export default UI;

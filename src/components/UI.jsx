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
        <strong>SAVE</strong> button saves your options locally in your browser. Next time, when you visit the page or refresh, your configuration will be remembered and automatically filled.
      </p>
      <p className="p">
        <strong>GENERATE URL</strong> will create a CDN/Preview link for you to visit the returned response. Upon clicking, you will see <strong>View URL/JSON</strong> appear right next to it.
      </p>
      <p className="p">
        <strong>View URL/JSON</strong> allows you to check the returned response in JSON format.
      </p>
      <p className="p">
        <strong>🔥 PRO TIP:</strong> When you generate a URL and open it in a
        new tab, replace host from [CDN or PREVIEW] to <strong>app</strong> and
        Hit Enter. You will land in Contentful CMS with that specific set of
        data opened for you [<em>No more unnecessary clicks</em>].
      </p>
    </div>
  );
};

export default UI;

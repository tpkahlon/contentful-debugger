/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from "react";
import AppContext from "../context/AppContext";

const Buttons = () => {
  const { app, handleClick, handleSave, handleReset } = useContext(AppContext);
  const { url } = app;
  return (
    <>
      <div className="buttons">
        <a href="#" onClick={handleReset}>
          Reset
        </a>
        <a href="#" onClick={handleSave}>
          Save
        </a>
        <a href="#" onClick={handleClick}>
          Generate URL
        </a>
        {url && (
          <a href={url} target="_blank" rel="noopener noreferrer">
            View URL/JSON
          </a>
        )}
      </div>
      <div>
        <div>
          <strong>Source code:</strong>{" "}
          <a
            href="https://github.com/tpkahlon/contentful-debugger"
            target="_blank"
            rel="noopener noreferrer"
          >
            contentful-debugger
          </a>
        </div>
        <div>
          <strong>Version:</strong> 0.0.1
        </div>
      </div>
    </>
  );
};

export default Buttons;

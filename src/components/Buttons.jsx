/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from "react";
import AppContext from "../context/AppContext";

const Buttons = () => {
  const { app, handleClick, handleSave, handleReset, labels } =
    useContext(AppContext);
  const { url, cms, host, type } = app;
  return (
    <>
      {host && type && (
        <>
          <div className="buttons">
            <a href="#" onClick={handleReset}>
              Reset
            </a>
            <a href="#" onClick={handleSave}>
              Save
            </a>
            <a href="#" onClick={handleClick}>
              Generate
            </a>
            {host && url && (
              <a href={url} target="_blank" rel="noopener noreferrer">
                View JSON
              </a>
            )}
            {host && host !== labels?.api && cms && (
              <a href={cms} target="_blank" rel="noopener noreferrer">
                View in Contentful
              </a>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default Buttons;

import React, { useContext } from "react";
import AppContext from "../context/AppContext";

const AccessToken = () => {
  const { app, handleChange } = useContext(AppContext);
  const { accessToken, host } = app;
  return (
    <>
      {host && (
        <div className="form-group">
          <label htmlFor="accessToken">Access Token:</label>
          <input
            value={accessToken}
            name="accessToken"
            id="accessToken"
            placeholder="Enter Access Token"
            onChange={(e) => handleChange(e)}
            required
          />
        </div>
      )}
    </>
  );
};

export default AccessToken;

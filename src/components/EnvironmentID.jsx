import React, { useContext } from "react";
import AppContext from "../context/AppContext";

const EnvironmentID = () => {
  const { app, handleChange, labels } = useContext(AppContext);
  const { host, type, environmentId } = app;
  return (
    <>
      {host && type && host !== labels?.api && type !== "" && type !== labels?.spaces && (
        <div className="form-group">
          <label htmlFor="environmentId">Environment ID:</label>
          <input
            value={environmentId}
            name="environmentId"
            id="environmentId"
            placeholder="Enter Environment ID"
            onChange={(e) => handleChange(e)}
            required
          />
        </div>
      )}
    </>
  );
};

export default EnvironmentID;

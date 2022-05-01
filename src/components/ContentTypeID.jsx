import React, { useContext } from "react";
import AppContext from "../context/AppContext";

const EnvironmentID = () => {
  const { app, handleChange, labels } = useContext(AppContext);
  const { type, contentTypeId } = app;
  return (
    <>
      {type === labels?.contentTypeId && (
        <div className="form-group">
          <label htmlFor="contentTypeId">Content Type ID:</label>
          <input
            value={contentTypeId}
            name="contentTypeId"
            id="contentTypeId"
            placeholder="Enter Content Type ID"
            onChange={(e) => handleChange(e)}
            required
          />
        </div>
      )}
    </>
  );
};

export default EnvironmentID;

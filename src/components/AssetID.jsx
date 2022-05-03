import React, { useContext } from "react";
import AppContext from "../context/AppContext";

const AssetID = () => {
  const { app, handleChange, labels } = useContext(AppContext);
  const { type, assetId, host } = app;
  return (
    <>
      {host && host !== labels?.api && type === labels?.assetId && (
        <div className="form-group">
          <label htmlFor="assetId">Asset ID:</label>
          <input
            value={assetId}
            name="assetId"
            id="assetId"
            placeholder="Enter Asset ID"
            onChange={(e) => handleChange(e)}
            required
          />
        </div>
      )}
    </>
  );
};

export default AssetID;

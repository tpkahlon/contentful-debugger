import React, { useContext } from "react";
import AppContext from "../context/AppContext";

const SpaceID = () => {
  const { app, handleChange, labels } = useContext(AppContext);
  const { spaceId, host, type } = app;
  return (
    <>
      {host && type && type !== labels?.pat && type !== labels?.allOrganizations && type !== labels?.allSpaces && (
        <div className="form-group">
          <label htmlFor="spaceId">Space ID:</label>
          <input
            value={spaceId}
            name="spaceId"
            id="spaceId"
            placeholder="Enter Space ID"
            onChange={(e) => handleChange(e)}
            required
          />
        </div>
      )}
    </>
  );
};

export default SpaceID;

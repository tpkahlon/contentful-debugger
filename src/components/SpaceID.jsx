import React, { useContext } from "react";
import AppContext from "../context/AppContext";

const SpaceID = () => {
  const { app, handleChange } = useContext(AppContext);
  const { spaceId, host } = app;
  return (
    <>
      {host && (
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

import React, { useContext } from "react";
import AppContext from "../context/AppContext";

const EntryID = () => {
  const { app, handleChange, labels } = useContext(AppContext);
  const { type, entryId, host } = app;
  return (
    <>
      {host && type && host !== labels?.api && type === labels?.entryId && (
        <div className="form-group">
          <label htmlFor="entryId">Entry ID:</label>
          <input
            value={entryId}
            name="entryId"
            id="entryId"
            placeholder="Enter Entry ID"
            onChange={(e) => handleChange(e)}
            required
          />
        </div>
      )}
    </>
  );
};

export default EntryID;

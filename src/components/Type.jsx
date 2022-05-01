import React, { useContext } from "react";
import AppContext from "../context/AppContext";

const Type = () => {
  const { app, handleChange, labels } = useContext(AppContext);
  const { type } = app;
  return (
    <div className="form-group">
      <label htmlFor="type">Type:</label>
      <select
        value={type}
        name="type"
        id="type"
        placeholder="Select Type"
        onChange={(e) => handleChange(e)}
        required
      >
        <option value="">Select type</option>
        <option value={labels?.spaces}>Get space</option>
        <option value={labels?.contentType}>Get content model</option>
        <option value={labels?.contentTypeId}>Get a single content type</option>
        <option value={labels?.entries}>Get entries</option>
        <option value={labels?.entryId}>Get a single entry</option>
      </select>
    </div>
  );
};

export default Type;

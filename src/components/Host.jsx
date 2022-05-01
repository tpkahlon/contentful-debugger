import React, { useContext } from "react";
import AppContext from "../context/AppContext";

const Host = () => {
  const { app, handleChange } = useContext(AppContext);
  const { host } = app;
  return (
    <div className="form-group">
      <label htmlFor="host">Host:</label>
      <select
        value={host}
        name="host"
        id="host"
        placeholder="Select host"
        onChange={(e) => handleChange(e)}
        required
      >
        <option value="">Select Host</option>
        <option value="cdn">CDN</option>
        <option value="preview">Preview</option>
      </select>
    </div>
  );
};

export default Host;

import React, { useContext } from "react";
import AppContext from "../context/AppContext";

const Query = () => {
  const { app, handleChange, labels } = useContext(AppContext);
  const { query, host } = app;
  return (
    <>
      {host !== labels?.api && (
        <div className="form-group">
          <label htmlFor="query">Query:</label>
          <input
            value={query}
            name="query"
            id="query"
            placeholder="e.g. query=test&include=2"
            onChange={(e) => handleChange(e)}
            required
          />
        </div>
      )}
    </>
  );
};

export default Query;

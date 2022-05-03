import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import Query from "./Query";

const Type = () => {
  const { app, handleChange, labels } = useContext(AppContext);
  const { type } = app;
  return (
    <>
      <Query />
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
          <option disabled>For below types, use Content Delivery/Preview token</option>
          <option value={labels?.spaces}>Get space</option>
          <option value={labels?.contentType}>Get content model</option>
          <option value={labels?.contentTypeId}>
            Get a single content type
          </option>
          <option value={labels?.entries}>Get entries</option>
          <option value={labels?.entryId}>Get a single entry</option>
          <option value={labels?.assets}>Get assets</option>
          <option value={labels?.assetId}>Get a single asset</option>
          <option value={labels?.locales}>Get locales</option>
          <option value={labels?.tags}>Get tags</option>
          <option disabled>For below types, use Content Management token</option>
          <option value={labels?.allOrganizations}>Get all organizations</option>
          <option value={labels?.allEnvironments}>Get all environments</option>
          <option value={labels?.allEnvironmentsAliases}>Get all environments aliases</option>
          <option value={labels?.allHooks}>Get all webhooks</option>
          <option value={labels?.allRoles}>Get all roles</option>
          <option value={labels?.allSpaces}>Get spaces</option>
          <option value={labels?.pat}>Get personal access tokens</option>
          <option value={labels?.deliveryAPIKeys}>Get delivery API keys</option>
          <option value={labels?.previewAPIKeys}>Get preview API keys</option>
        </select>
      </div>
    </>
  );
};

export default Type;

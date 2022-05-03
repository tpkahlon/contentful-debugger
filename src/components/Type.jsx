import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import Query from "./Query";

const Type = () => {
  const { app, handleChange, labels } = useContext(AppContext);
  const { type, host } = app;
  return (
    <>
      {host && (
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
              <option disabled>
                For below types, use Content Delivery/Preview token
              </option>
              <option value={labels?.spaces} disabled={host === labels?.api}>
                Get space
              </option>
              <option
                value={labels?.contentType}
                disabled={host === labels?.api}
              >
                Get content model
              </option>
              <option
                value={labels?.contentTypeId}
                disabled={host === labels?.api}
              >
                Get a single content type
              </option>
              <option value={labels?.entries} disabled={host === labels?.api}>
                Get entries
              </option>
              <option value={labels?.entryId} disabled={host === labels?.api}>
                Get a single entry
              </option>
              <option value={labels?.assets} disabled={host === labels?.api}>
                Get assets
              </option>
              <option value={labels?.assetId} disabled={host === labels?.api}>
                Get a single asset
              </option>
              <option value={labels?.locales} disabled={host === labels?.api}>
                Get locales
              </option>
              <option value={labels?.tags} disabled={host === labels?.api}>
                Get tags
              </option>
              <option disabled>
                For below types, use Content Management token
              </option>
              <option
                value={labels?.allOrganizations}
                disabled={host !== labels?.api}
              >
                Get all organizations
              </option>
              <option
                value={labels?.allEnvironments}
                disabled={host !== labels?.api}
              >
                Get all environments
              </option>
              <option
                value={labels?.allEnvironmentsAliases}
                disabled={host !== labels?.api}
              >
                Get all environments aliases
              </option>
              <option value={labels?.allHooks} disabled={host !== labels?.api}>
                Get all webhooks
              </option>
              <option value={labels?.allRoles} disabled={host !== labels?.api}>
                Get all roles
              </option>
              <option value={labels?.allSpaces} disabled={host !== labels?.api}>
                Get spaces
              </option>
              <option value={labels?.pat} disabled={host !== labels?.api}>
                Get personal access tokens
              </option>
              <option
                value={labels?.deliveryAPIKeys}
                disabled={host !== labels?.api}
              >
                Get delivery API keys
              </option>
              <option
                value={labels?.previewAPIKeys}
                disabled={host !== labels?.api}
              >
                Get preview API keys
              </option>
            </select>
          </div>
        </>
      )}
    </>
  );
};

export default Type;

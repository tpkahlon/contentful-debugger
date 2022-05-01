const labels = {
  spaces: "spaces",
  contentType: "content_types",
  contentTypeId: "content_type_id",
  entries: "entries",
  entryId: "entry_id",
  saveState: "contentful_debugger_state"
};

function parseURL(app, setApp) {
  const { spaceId, host, accessToken, type, environmentId, entryId, contentTypeId } = app;
  switch (type) {
    case labels.spaces:
      setApp({
        ...app,
        url: `https://${host}.contentful.com/${type}/${spaceId}?access_token=${accessToken}`,
      });
      break;
    case labels?.contentType:
    case labels?.entries:
      setApp({
        ...app,
        url: `https://${host}.contentful.com/${labels?.spaces}/${spaceId}/environments/${environmentId}/${type}?access_token=${accessToken}`,
      });
      break;
    case labels?.contentTypeId:
      setApp({
        ...app,
        url: `https://${host}.contentful.com/spaces/${spaceId}/environments/${environmentId}/${labels?.contentType}/${contentTypeId}?access_token=${accessToken}`,
      });
      break;
    case labels?.entryId:
      setApp({
        ...app,
        url: `https://${host}.contentful.com/spaces/${spaceId}/environments/${environmentId}/${labels?.entries}/${entryId}?access_token=${accessToken}`,
      });
      break;
    default:
      return null;
  }
}

export { labels, parseURL };

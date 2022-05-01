const labels = {
  saveState: "contentful_debugger_state",
  spaces: "spaces",
  entries: "entries",
  tags: "tags",
  locales: "locales",
  assets: "assets",
  assetId: "asset_id",
  contentType: "content_types",
  entryId: "entry_id",
  contentTypeId: "content_type_id",
};

function parseURL(app, setApp) {
  const {
    spaceId,
    host,
    accessToken,
    type,
    environmentId,
    entryId,
    assetId,
    contentTypeId,
  } = app;
  switch (type) {
    case labels.spaces:
      setApp({
        ...app,
        url: `https://${host}.contentful.com/${type}/${spaceId}?access_token=${accessToken}`,
      });
      break;
    case labels?.assets:
    case labels?.contentType:
    case labels?.entries:
    case labels?.locales:
    case labels?.tags:
      setApp({
        ...app,
        url: `https://${host}.contentful.com/${labels?.spaces}/${spaceId}/environments/${environmentId}/${type}?access_token=${accessToken}`,
      });
      break;
    case labels?.assetId:
      setApp({
        ...app,
        url: `https://${host}.contentful.com/spaces/${spaceId}/environments/${environmentId}/${labels?.assets}/${assetId}?access_token=${accessToken}`,
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

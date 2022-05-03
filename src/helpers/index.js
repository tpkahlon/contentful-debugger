const labels = {
  // HOST
  api: "api",
  preview: "preview",
  cdn: "cdn",
  // CMN
  allOrganizations: "organizations",
  allEnvironmentsAliases: "environment_aliases",
  allEnvironments: "environments",
  allHooks: "webhook_definitions",
  allSpaces: "allSpaces",
  previewAPIKeys: "preview_api_keys",
  deliveryAPIKeys: "api_keys",
  pat: "pat",
  me: "me",
  users: "users",
  allRoles: "roles",
  accessTokens: "access_tokens",
  // CDN/CPN
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
    query,
    environmentId,
    entryId,
    assetId,
    contentTypeId,
  } = app;
  const queryString = query ? `&${query.trim()}` : '';
  switch (type) {
    // Content Management
    case labels?.allOrganizations:
      setApp({
        ...app,
        url: `https://${host}.contentful.com/${labels?.allOrganizations}?access_token=${accessToken}`,
      });
      break;
    case labels?.allSpaces:
      setApp({
        ...app,
        url: `https://${host}.contentful.com/${labels?.spaces}?access_token=${accessToken}${queryString}`,
      });
      break;
    case labels?.pat:
      setApp({
        ...app,
        url: `https://${host}.contentful.com/${labels?.users}/${labels?.me}/${labels?.accessTokens}?access_token=${accessToken}${queryString}`,
      });
      break;
    case labels?.allRoles:
      setApp({
        ...app,
        url: `https://${host}.contentful.com/${labels?.spaces}/${spaceId}/${labels?.allRoles}?access_token=${accessToken}`,
      });
      break;
    case labels?.allHooks:
      setApp({
        ...app,
        url: `https://${host}.contentful.com/${labels?.spaces}/${spaceId}/${labels?.allHooks}?access_token=${accessToken}`,
      });
      break;
    case labels?.allEnvironments:
      setApp({
        ...app,
        url: `https://${host}.contentful.com/${labels?.spaces}/${spaceId}/${labels?.allEnvironments}?access_token=${accessToken}`,
      });
      break;
    case labels?.allEnvironmentsAliases:
      setApp({
        ...app,
        url: `https://${host}.contentful.com/${labels?.spaces}/${spaceId}/${labels?.allEnvironmentsAliases}?access_token=${accessToken}`,
      });
      break;
    case labels?.deliveryAPIKeys:
      setApp({
        ...app,
        url: `https://${host}.contentful.com/${labels?.spaces}/${spaceId}/${labels?.deliveryAPIKeys}?access_token=${accessToken}`,
      });
      break;
    case labels?.previewAPIKeys:
      setApp({
        ...app,
        url: `https://${host}.contentful.com/${labels?.spaces}/${spaceId}/${labels?.previewAPIKeys}?access_token=${accessToken}`,
      });
      break;
    // Content Delivery/Preview
    case labels.spaces:
      setApp({
        ...app,
        url: `https://${host}.contentful.com/${type}/${spaceId}?access_token=${accessToken}`,
        cms: `https://app.contentful.com/${type}/${spaceId}?access_token=${accessToken}`,
      });
      break;
    case labels?.assets:
    case labels?.contentType:
    case labels?.entries:
    case labels?.locales:
    case labels?.tags:
      setApp({
        ...app,
        url: `https://${host}.contentful.com/${labels?.spaces}/${spaceId}/environments/${environmentId}/${type}?access_token=${accessToken}${queryString}`,
        cms: `https://app.contentful.com/${labels?.spaces}/${spaceId}/environments/${environmentId}/${type}?access_token=${accessToken}${queryString}`,
      });
      break;
    case labels?.assetId:
      setApp({
        ...app,
        url: `https://${host}.contentful.com/spaces/${spaceId}/environments/${environmentId}/${labels?.assets}/${assetId}?access_token=${accessToken}`,
        cms: `https://app.contentful.com/spaces/${spaceId}/environments/${environmentId}/${labels?.assets}/${assetId}?access_token=${accessToken}`,
      });
      break;
    case labels?.contentTypeId:
      setApp({
        ...app,
        url: `https://${host}.contentful.com/spaces/${spaceId}/environments/${environmentId}/${labels?.contentType}/${contentTypeId}?access_token=${accessToken}`,
        cms: `https://app.contentful.com/spaces/${spaceId}/environments/${environmentId}/${labels?.contentType}/${contentTypeId}?access_token=${accessToken}`,
      });
      break;
    case labels?.entryId:
      setApp({
        ...app,
        url: `https://${host}.contentful.com/spaces/${spaceId}/environments/${environmentId}/${labels?.entries}/${entryId}?access_token=${accessToken}`,
        cms: `https://app.contentful.com/spaces/${spaceId}/environments/${environmentId}/${labels?.entries}/${entryId}?access_token=${accessToken}`,
      });
      break;
    default:
      return null;
  }
}

export { labels, parseURL };

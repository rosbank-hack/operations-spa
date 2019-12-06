export const serializeQueryParams = queryObject => {
  return Object.keys(queryObject)
    .map(item => `${encodeURIComponent(item)}=${encodeURIComponent(queryObject[item])}`)
    .join('&');
};

function getResponseFromAPI() {
  return Promise.resolve('true').catch('false');
}

export default getResponseFromAPI;
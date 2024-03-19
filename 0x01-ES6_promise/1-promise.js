function getFullResponseFromAPI(apiEndpoint) {
  return new Promise((resolve, reject) => {
    if (apiEndpoint) resolve({ status: 200, body: 'Success' });
    reject(Error('The fake API is not working currently'));
  });
}
// Export the function for external use
export default getFullResponseFromAPI;

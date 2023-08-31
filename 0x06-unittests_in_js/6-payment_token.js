const getPaymentTokenFromAPI = (success) => {
  if (success === true) {
    return Promise.resolve({ data: 'Successful response from the API' });
  }
  return null;
};

module.exports = getPaymentTokenFromAPI;

const fetchSelectState = (apiPath, labelResolver = ({ name }) => name) => {
  const requestParams = {
    headers: { "Content-Type": "application/json; charset=utf-8" }
  }
  // TODO fix url to work in production
  return fetch(`http://localhost:9292/api/${apiPath}`, requestParams)
    .then(response => response.json())
    .then(parsedResponse => ({
      [apiPath]: parsedResponse.map(({ id, ...values }) => ({
        value: id,
        label: labelResolver(values)
      }))
    }))
    .catch(error => {
      console.log(error);
      return { error: error };
    });
};

export default fetchSelectState

export default fetchSelectState = async (apiPath, setState, labelResolver = { name } => name) => {
  const requestParams = {
    headers: { "Content-Type": "application/json; charset=utf-8" }
  }
  // TODO fix url to work in production
  fetch(`http://localhost:9292/api/${apiPath}`, requestParams)
    .then(response => response.json())
    .then(parsedResponse => (
        setState({
          [apiPath]: parsedResponse.map(({ id, ...values }) => ({
            value: id,
            label: labelResolver(values)
          })
        })
    ))
    .catch(error => {
      console.log(error);
      setState({ error: error });
    });
};

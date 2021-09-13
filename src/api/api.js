import env from '../../mock_env';

const getData = async (url) => {
  const response = await fetch(`${env.base_url_api}${url}`);
  const data = await response.json();

  return data;
};

export default getData;

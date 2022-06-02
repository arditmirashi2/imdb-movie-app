import Request from '../../../helpers/request';
import getEnvironmentConfiguration from '../../../helpers/config';

const environmentConfiguration = getEnvironmentConfiguration();

export function fetchMovies() {
  return Request.doRequest({
    method: "GET",
    url: environmentConfiguration.apiBaseUrl + "/" + environmentConfiguration.apiKey,
    query: {
      groups: "top_250",
      count: "250"
    }
  })
}

import Request from '../../../helpers/request';
import getEnvironmentConfiguration from '../../../helpers/config';

const environmentConfiguration = getEnvironmentConfiguration();

export function fetchMoviesByFilters(filters: any) {
  return Request.doRequest({
    method: 'GET',
    url:
      environmentConfiguration.apiBaseUrl +
      '/AdvancedSearch/' +
      environmentConfiguration.apiKey,
    query: filters,
  });
}

export function fetchMovieById(movieId: string) {
  return Request.doRequest({
    method: 'GET',
    url:
      environmentConfiguration.apiBaseUrl +
      '/Title/' +
      environmentConfiguration.apiKey +
      '/' +
      movieId,
  });
}

export function fetchMovieTrailerById(movieId: string) {
  return Request.doRequest({
    method: 'GET',
    url:
      environmentConfiguration.apiBaseUrl +
      '/YouTubeTrailer/' +
      environmentConfiguration.apiKey +
      '/' +
      movieId,
  });
}

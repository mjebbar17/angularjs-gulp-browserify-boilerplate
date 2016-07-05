function GitApiService($http, AppSettings) {
  'ngInject';

  const service = {};

  service.getGistsForUser = (username) => {
      return $http.get(AppSettings.apiUrl + 'users/' + username + '/gists');
  };
  service.getGistForks = (id) => {
      return $http.get(AppSettings.apiUrl + 'gists/' + id + '/forks');
  };

  return service;

}

export default {
  name: 'GitApiService',
  fn: GitApiService
};

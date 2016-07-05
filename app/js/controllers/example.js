function ExampleCtrl(GitApiService) {
  'ngInject';

  // ViewModel
  const vm = this;

  vm.title = 'AngularJS, Gulp, and Browserify! Written with keyboards and love!';
  vm.number = 1234;
  vm.gists = {};
  vm.username = 'octocat';


  vm.getGistsForUser = () => {
    GitApiService.getGistsForUser(vm.username).success((data) => {
      vm.gists = data;
    }).error((err) => {
      console.log('error ' + err)
    })
  }

  vm.getGistsForUser();

  vm.selectGist = (index) => {
    console.log('select gist number ' + index)
    vm.selectedGist = vm.gists[index];
    getForksForSelectedGist();
  }

  var getForksForSelectedGist = () => {
    GitApiService.getGistForks(vm.selectedGist.id).success((data) => {
      vm.selectedGistForks = data;
      console.log(data);
    }).error((err) => {
      console.log('error ' + err)
    })
  }

}

export default {
  name: 'ExampleCtrl',
  fn: ExampleCtrl
};

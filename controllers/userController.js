app.controller('UserController', function($scope) {
  $scope.users = [];

  $scope.addUser = function() {
    if ($scope.user) {
      $scope.users.push({
        name: $scope.user.name,
        email: $scope.user.email
      });
      $scope.user = {};
    }
  };
});

// controller
function AppController($scope, $http) {
    console.log("Hello world from controller");

// http request
    $http.get('/task').success(function(response) {
        console.log("I got the data I requested.");
        $scope.textToDisplay = response;
    })
}
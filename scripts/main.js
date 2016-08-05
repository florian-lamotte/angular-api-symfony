var blog = angular.module('blog', ['ngRoute','routeAppControllers']);

blog.config(['$routeProvider', function($routeProvider) { 
        $routeProvider
        .when('/home', {
            templateUrl: 'templates/home.html',
            controller: 'HomeController'
        })
        .when('/post', {
            templateUrl: 'templates/posts.html',
            controller: 'PostsController'
        })
        .otherwise({
            redirectTo: '/home'
        });
    }
]);

var routeAppControllers = angular.module('routeAppControllers', []);

routeAppControllers.controller('HomeController', function($scope, $http){
	$http.get("http://symfony.dev/api/post").then(function (response) {
	  	$scope.Mydata = response.data.posts;
	  	console.log($scope.Mydata);
  	});
});

routeAppControllers.controller('PostsController', function($scope, $http){
		$http.get("http://symfony.dev/api/post/{id}/show").then(function (response) {
	  	$scope.Mydata = response.data.posts;
	  	console.log($scope.Mydata);
  	});
});

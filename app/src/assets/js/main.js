// require('./config');
require('./services');
require('./controllers');
// require('./directives');
// require('./filters');

var app = angular.module('teste', [
	'ngRoute',
	'teste.controllers',
  'teste.services'
]);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) { //configora hash tag
  //$locationProvider.html5Mode(true);

  $routeProvider
    .when('/', {
      templateUrl: 'home.html', 
      controller: 'ctrHome', 
      title: 'Teste Home'
  	})
    
}]);

app.run(['$rootScope', '$route', function($rootScope, $route) { // inicializacao do ng
    $rootScope.$on('$routeChangeSuccess', function(newVal, oldVal) { //executa quando altera a rashtag da url
        if (oldVal !== newVal && $route.current.title != 'undefined') {
            document.title = $route.current.title;//altera titulo da pagina
        }
    });
}]);
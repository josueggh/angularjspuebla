var urlBase = '/listdemos/'
var pueblaApp = angular.module( "pueblaApp", [] );

pueblaApp.controller('pueblaController', function ($scope, $templateCache, $http, $location){

  $scope.demo_template  = '';
  $scope.demo_html      = '';
  $scope.demo_code      = '';

  $scope.demos = [
    {'title' : 'Data binding' ,         url : urlBase+'1. Data biding.html'},
    {'title' : 'Ng-repeat' ,            url : urlBase+'1. Ngrepeat.html'},
    {'title' : 'Filters' ,              url : urlBase+'1. Ngrepeat.html'},
    {'title' : 'Búsquedas y filtros' ,  url : urlBase+'1. Ngrepeat.html'},
    {'title' : 'Testing' ,              url : urlBase+'1. Ngrepeat.html'},
    {'title' : 'Directivas' ,           url : urlBase+'1. Ngrepeat.html'},
    {'title' : 'Controladores' ,        url : urlBase+'1. Ngrepeat.html'},
    {'title' : 'Estructura de datos' ,  url : urlBase+'1. Ngrepeat.html'},
    {'title' : 'CRUD' ,                 url : urlBase+'1. Ngrepeat.html'},
    {'title' : 'Extras' ,               url : urlBase+'1. Ngrepeat.html'},
    {'title' : 'Keep in touch' ,        url : urlBase+'0. A cerca de.html'},

  ];

  $scope.today = Date.now();

  $scope.loadDemo = function(demo){
    if( demo.href ){
      document.location = demo.href;
    }

    $scope.demo_template = demo.url;
    $http({ 
        method  : 'GET' , 
        url     : demo.url,
        cache   : $templateCache
    }).success(function(html){
        $scope.demo_html  = html;

        /*Funciones para PrettyPrint*/
        document.getElementById("code").className = "";
        document.getElementById("code").innerHTML = html.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        PR.prettyPrint();

    }).error(function(html, status){
        $scope.demo_html  = "No se puede cargar el ejemplo "  + status;
    });
  }

});


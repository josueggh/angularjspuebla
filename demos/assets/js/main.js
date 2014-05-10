var urlBase = '/listdemos/'
var pueblaApp = angular.module( "pueblaApp" ,[]);

pueblaApp.controller('pueblaController', function ($scope, $templateCache, $http, $location){
  /*+Variables para los demos**/
  /*Fecha de Hoy*/
  $scope.today = Date.now();

  /*Lista de super heroés*/
  $scope.superheroes = [
    {'name' :  'Batman',                'realname' : 'Bruce Wayne'      ,'intelligence' : 10, 'strenght' : 4,   'speed' : 3,  'defence' : 8},
    {'name' :  'Spiderman',             'realname' : 'Peter Parker'     ,'intelligence' : 9,  'strenght' : 7,   'speed' : 10, 'defence' : 6},
    {'name' :  'Superman',              'realname' : 'Clark  Kent'      ,'intelligence' : 6,  'strenght' : 10,  'speed' : 8,  'defence' : 10},
    {'name' :  'Hulk',                  'realname' : 'Bruce Banner'     ,'intelligence' : 2,  'strenght' : 10,  'speed' : 4,  'defence' : 9},
    {'name' :  'Thor',                  'realname' : 'Thor'             ,'intelligence' : 4,  'strenght' : 9,   'speed' : 6,  'defence' : 8},
    {'name' :  'Wolverine',             'realname' : 'James Howlett'    ,'intelligence' : 6,  'strenght' : 8,   'speed' : 7,  'defence' : 7},
    {'name' :  'Iceman',                'realname' : 'Bobby Drake'      ,'intelligence' : 7,  'strenght' : 3,   'speed' : 6,  'defence' : 5},
    {'name' :  'Wonder woman',          'realname' : 'Diana Temiscira'  ,'intelligence' : 8,  'strenght' : 9,   'speed' : 7,  'defence' : 3},
    {'name' :  'Quicksilver',           'realname' : 'Pietro Django'    ,'intelligence' : 5,  'strenght' : 5,   'speed' : 10, 'defence' : 5},
    {'name' :  'Aquaman',               'realname' : 'Arthur Curry'     ,'intelligence' : 5,  'strenght' : 7,   'speed' : 5,  'defence' : 4},
    {'name' :  'Captain America',       'realname' : 'Steve Rogers'     ,'intelligence' : 5,  'strenght' : 8,   'speed' : 3,  'defence' : 8},
    {'name' :  'El chapulin colorado',  'realname' : 'Roberto Gomez'    ,'intelligence' : 10, 'strenght' : 10,  'speed' : 10, 'defence' : 10},
  ];

  $scope.cls = function(idx) {
    return idx % 2 === 0 ? 'odd' : 'even';
  }
  /*Fin de las variables para los demos*/

  /**Construcción del PlayGround**/
  $scope.demo_template  = '';
  $scope.demo_html      = '';
  $scope.demo_code      = '';

  $scope.demos = [
    {'title' : 'Data binding' ,       url : urlBase+'1. Data biding.html'},
    {'title' : 'Ng-repeat' ,          url : urlBase+'2. Ngrepeat.html'},
    {'title' : 'Formatos' ,           url : urlBase+'3. Filters.html'},
    {'title' : 'Búsquedas y order' ,  url : urlBase+'4. Busquedas.html'},
    {'title' : 'Directivas' ,         url : urlBase+'5. Directivas.html'},
    {'title' : 'Ng-click',            url : urlBase+'1. Ngrepeat.html'},
    {'title' : 'Testing' ,            url : urlBase+'1. Ngrepeat.html'},
    {'title' : 'CRUD' ,               url : urlBase+'1. Ngrepeat.html'},
    {'title' : 'Extras' ,             url : urlBase+'1. Ngrepeat.html'},
    {'title' : 'Keep in touch' ,      url : urlBase+'0. A cerca de.html'},
  ];

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

/*Filtro personalizado*/
pueblaApp.filter('personalname', function(){
  return function( input , start){
    return input.replace( /(^|\s)([a-z])/g , function(m,p1,p2){ return p1+p2.toUpperCase(); } );
  }
});

/*Directiva*/
pueblaApp.directive('heroAvatar',function(){
  return {
    restrict : 'E',
    replace  : true,
    template : "<img />",
    link : function(scope,element,attrs){
      var filename  = attrs.name || "default";
      var urlImg    = '/assets/img/superheroes/'

      filename = filename.replace(/\s+/g, '').toLowerCase();

      element.attr({ 
        src : urlImg+filename+'.jpg',
        alt : attrs.name,
        title : attrs.name
      });
    }
  };
});
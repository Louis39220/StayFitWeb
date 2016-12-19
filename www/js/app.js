angular.module('starter', ['ionic', 'menu.controllers','objectif.controllers', 'profil.controllers', 'suivi.controllers', 'sport.controllers', 'information.controllers', 'services', 'amChartsDirectiveExample', 'ngMessages'])
.run(function($ionicPlatform,$rootScope) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(false);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });

  $rootScope.user = {
  	mail:'',
    id: null, 
  	isConnected:false, 
  	firstName: "", 
  	lastName: "", 
  	birthday: "13/01/1995",
  	size: 193,
    sexe: "Masculin",
  	is_coach: true,
  	is_dietitian: true,
    idgoal: null,
    goal_image: "ressources/prisedemasse.jpg"
  };

  $rootScope.bodyUser = {
    weight: 0,
    gracemass: 0
  };

  $rootScope.goal = {
    id: null,
    objectif: ''
  }
})

.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider,$httpProvider) {
  $ionicConfigProvider.tabs.position('top');
  //$httpProvider.defaults.headers.post = {'Origin': 'http://localhost:8080'};

  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'pages/menu/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.welcome', {
    url: '/welcome',
    views: {
      'menuContent': {
        templateUrl: 'pages/welcome/welcome.html'
      }
    }
  })

  .state('app.profil', {
    url: '/',
    views: {
      'menuContent': {
        templateUrl: 'pages/profil/profil.html',
        controller: 'ProfilCtrl'
      }
    }
  })

  .state('app.information', {
    url: '/',
    views: {
      'menuContent': {
        templateUrl: 'pages/information/information.html',
        controller: 'InformationCtrl'
      }
    }
  })

  .state('app.objectif', {
      url: '/',
      views: {
        'menuContent': {
          templateUrl: 'pages/objectif/objectif.html'
        }
      }
    })

  .state('app.suivi', {
      url: '/',
      views: {
        'menuContent': {
          templateUrl: 'pages/suivi/suivi.html',
          controller: 'SuiviCtrl'
        }
      }
    })

  .state('app.sport', {
      url: '/',
      views: {
        'menuContent': {
          templateUrl: 'pages/sport/sport.html',
          controller: 'SportCtrl'
        }
      }
    })

  .state('app.nutrition', {
      url: '/',
      views: {
        'menuContent': {
          templateUrl: 'pages/nutrition/nutrition.html'
        }
      }
    })

  .state('app.contact', {
      url: '/',
      views: {
        'menuContent': {
          templateUrl: 'pages/contact.html'
        }
      }
    })

  .state('app.about', {
      url: '/',
      views: {
        'menuContent': {
          templateUrl: 'pages/about.html'
        }
      }
    })
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/welcome');
});

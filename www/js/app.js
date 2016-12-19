angular.module('starter', ['ionic', 'menu.controllers','objectif.controllers', 'profil.controllers', 'suivi.controllers', 'sport', 'information.controllers', 'services', 'amChartsDirectiveExample', 'ngMessages'])
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
  	mail:'test@mail.com',
    id: null, 
  	isConnected:true, 
  	firstName: "testfirstName", 
  	lastName: "testlastName", 
  	birthday: "13/01/1995",
  	size: 193,
    sexe: "Masculin",
  	is_coach: true,
  	is_dietitian: true,
    goal:"Prise de masse", 
    goal_description: "Description Prise de masse",
    goal_image: "ressources/prisedemasse.jpg"
  };

  $rootScope.bodyUser = {
    weight: 0,
    gracemass: 0
  };

  $rootScope.goal = {
    id: null,
    objectif:"Prise de masse"
  }

  $rootScope.goals =  [
    {'name' : 'Prise de masse', 'description' : 'description prise de masse', 'image' : 'ressources/prisedemasse.jpg'},
    {'name' : 'Maintien Musculaire', 'description' : 'description Maintien de poids', 'image' : 'ressources/maintien_musculaire.jpg'},
    {'name' : 'Seche Musculaire', 'description' : 'description Seche musculaire', 'image' : 'ressources/seche.jpg'}
  ]

  $rootScope.practises =  [
    {'name' : 'Séance Hypertrophie', 'objectif' : 'Prise de masse','exercises' : [
      {'name' : 'Développé Couché', 'description' : 'Sur un banc de musculation efféctué des répétition de descente et remonté de poids', 'image' : 'ressources/sport/developpecouche.jpg' ,'set' : '4', 'rep':'10','duration':'20'},
      {'name' : 'Tirage Poulie', 'description' : 'à l aide d une poulie effectué des mouvement de descente/ monté', 'image' : 'ressources/sport/tiragepoulie.jpg', 'set' : '4', 'rep':'10','duration':'20'},
      {'name' : 'Pompes', 'description' : 'Soyez bien gainé et effectué un mouvement de pompes', 'image' : 'ressources/sport/pompes.jpg', 'set' : '4', 'rep':'10','duration':'20'}
    ]}, 
    {'name' : 'Séance de seche', 'objectif':'Seche Musculaire','exercises' :[
      {'name' : 'Pompes', 'description' : 'Soyez bien gainé et effectué un mouvement de pompes', 'image' : 'ressources/sport/pompes.jpg', 'set' : '4', 'rep':'10','duration':'20'}
    ]},
    {'name' : 'Séance de course', 'objectif':'Maintien Musculaire', 'exercises' : [
      {'name' : 'Course à pied', 'description' : 'Soyez bien gainé et effectué un mouvement de pompes', 'image' : 'ressources/sport/pompes.jpg', 'set' : '4', 'rep':'10','duration':'20'}
    ]}
  ]

//  $rootScope.excerices =  [
//    {'name' : 'Développé Couché', 'description' : 'Sur un banc de musculation efféctué des répétition de descente et remonté de poids', 'image' : 'ressources/sport/developpecouche.jpg' ,'set' : '4', 'rep':'10','duration':'20'},
//    {'name' : 'Tirage Poulie', 'description' : 'à l aide d une poulie effectué des mouvement de descente/ monté', 'image' : 'ressources/sport/tiragepoulie.jpg', 'set' : '4', 'rep':'10','duration':'20'},
//    {'name' : 'Pompes', 'description' : 'Soyez bien gainé et effectué un mouvement de pompes', 'image' : 'ressources/sport/pompes.jpg', 'set' : '4', 'rep':'10','duration':'20'}
//  ]

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
          controller: 'SportCtrl as vm',
          resolve : {
            'exercices' : function () {
              return ['test', 'rest'];
            }
          }
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

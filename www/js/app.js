angular.module('starter', ['ionic', 'menu.controllers','objectif.controllers', 'profil.controllers', 'suivi.controllers', 'sport', 'nutrition', 'information.controllers', 'creationpractise.controllers', 'creationexercise.controllers','creationmeal.controllers','creationdish.controllers', 'services', 'ngMessages'])
.run(function($ionicPlatform,$rootScope,goalService,sportService) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    $rootScope.isMobile = false; //initiate as false
    // device detection
    if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) $rootScope.isMobile = true;

    console.log(ionic.Platform);
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
  	birthday: "",
  	size: null,
    sexe: "",
  	is_coach: false,
  	is_dietitian: false,
    idGoal: null,
    picture: ""
  };


  $rootScope.bodyUser = {
    weight: 0,
    gracemass: 0
  };

  $rootScope.goal = {
    idGoal: 0,
    description: '',
    name:'',
    image: '',
    checked: false
  }

  $rootScope.bodyUsers = [];
  $rootScope.weights = [];
  $rootScope.gracemasses = [];
  goalService.getGoals()
  .then(function(response){
    console.log(response);
    $rootScope.goals = response.data;
  });

  $rootScope.updateWeight = false;
  $rootScope.updateGraceMass = false;

 /*$rootScope.goals =  [

    {'name' : 'Prise de masse', 'description' : 'description prise de masse', 'image' : 'ressources/prisedemasse.jpg'},
    {'name' : 'Maintien Musculaire', 'description' : 'description Maintien de poids', 'image' : 'ressources/maintien_musculaire.jpg'},
    {'name' : 'Seche Musculaire', 'description' : 'description Seche musculaire', 'image' : 'ressources/seche.jpg'}
  ]*/

  /*
  $rootScope.practices =  [
    {'name' : 'Séance Hypertrophie', 'objectif' : 'Prise de masse','exercises' : [
      {'name' : 'Développé Couché', 'description' : 'Sur un banc de musculation efféctué des répétition de descente et remonté de poids', 'image' : 'ressources/sport/developpecouche.jpg' ,'set' : '4', 'rep':'10','duration':'20'},
      {'name' : 'Tirage Poulie', 'description' : 'à l aide d une poulie effectué des mouvement de descente/ monté', 'image' : 'ressources/sport/tiragepoulie.jpg', 'set' : '4', 'rep':'10','duration':'20'},
      {'name' : 'Pompes', 'description' : 'Soyez bien gainé et effectué un mouvement de pompes', 'image' : 'ressources/sport/pompes.jpg', 'set' : '4', 'rep':'10','duration':'20'}
    ]}, 
    {'name' : 'Séance de seche', 'objectif':'Seche Musculaire','exercises' :[
      {'name' : 'Pompes', 'description' : 'Soyez bien gainé et effectué un mouvement de pompes', 'image' : 'ressources/sport/pompes.jpg', 'set' : '4', 'rep':'10','duration':'20', 'cheastDifficulty':'3', 'legDifficulty':'0'}
    ]},
    {'name' : 'Séance de course', 'objectif':'Maintien Musculaire', 'exercises' : [
      {'name' : 'Course à pied', 'description' : 'Effectué une course', 'image' : 'ressources/sport/course.png', 'set' : '4', 'rep':'10','duration':'20'}
    ]}
  ]
  */

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
    url: '/',
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
          templateUrl: 'pages/objectif/objectif.html',
          controller: 'ObjectifCtrl'
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
          templateUrl: 'pages/nutrition/nutrition.html',
          controller: 'NutritionCtrl'
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

  .state('app.creationpractise', {
      url: '/',
      views: {
        'menuContent': {
          templateUrl: 'pages/creationpractise/creationpractise.html',
          controller: 'CreationpractiseCtrl'
        }
      }
    })

  .state('app.creationexercise', {
      url: '/',
      views: {
        'menuContent': {
          templateUrl: 'pages/creationexercise/creationexercise.html',
          controller: 'CreationexerciseCtrl'
        }
      }
    })

  .state('app.creationmeal', {
      url: '/',
      views: {
        'menuContent': {
          templateUrl: 'pages/creationmeal/creationmeal.html',
          controller: 'CreationmealCtrl'
        }
      }
    })

  .state('app.creationdish', {
      url: '/',
      views: {
        'menuContent': {
          templateUrl: 'pages/creationdish/creationdish.html',
          controller: 'CreationdishCtrl'
        }
      }
    })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/');
});

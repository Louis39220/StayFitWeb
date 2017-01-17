angular.module('services', [])

.factory('userService', function($http) {
	return {
		authenticate: function(user){
			var data = {email: user.mail, psw: user.password};
			return $http({
				method: 'POST',
				url: 'http://54.214.204.132:8080/userConnect/login',
				params: data
			})
		},

		subscribe: function(user){
			var data = {email: user.mail, psw: user.password};
			return $http({
				method: 'POST',
				url: 'http://54.214.204.132:8080/userConnect/create',
				params: data
			})
		},

		setInfos: function(infos){
			var data = {id: infos.id, firstname: infos.firstName, lastname: infos.lastName, birthday: infos.birthday, sexe: infos.sexe, size: infos.size | 0,weight: infos.weight | 0};
			return $http({
				method: 'POST',
				url: 'http://54.214.204.132:8080/user/create',
				params: data
			})
		},

		getInfos: function(id){
			return $http({
				method: 'GET',
				url: 'http://54.214.204.132:8080/user/find/'+id
			})
		},

		setGoal: function(user){
			var data = {id: user.id, idGoal: user.idGoal};
			return $http({
				method: 'POST',
				url: 'http://54.214.204.132:8080/user/setgoal',
				params: data
			})
		}
	}
})

.factory('bodyUserService', function($http) {
	return {
		getBodyUser: function(id){
			return $http({
				method: 'GET',
				url: 'http://54.214.204.132:8080/bodyUser/findLast/'+id
			})
		},

		setBodyUser: function(bodyUserAndId){
			return $http({
				method: 'POST',
				url: 'http://54.214.204.132:8080/bodyUser/insert',
				params: bodyUserAndId
			})
		},

		getAllBodyUser: function(id){
			return $http({
				method: 'GET',
				url: 'http://54.214.204.132:8080/bodyUser/find/' + id
			})
		}
	}
})

.factory('goalService', function($http) {
	return {
		getGoals: function(){
			return $http({
				method: 'GET',
				url: 'http://54.214.204.132:8080/goal'
			})
		},

		getGoal: function(id){
			return $http({
				method: 'GET',
				url: 'http://54.214.204.132:8080/goal/find/'+id
			})
		},

		setGoal: function(idGoal){
			return $http({
				method: 'POST',
				url: 'http://54.214.204.132:8080/user/setgoal',
				params: idGoal
			})
		}
	}
})

.factory('nutritionService', function($http) {
	return {
		getMeals: function(id){
			return $http({
				method: 'GET',
				url: 'http://54.214.204.132:8080/meal/findmeals/'+id
			})
		},
		setMeal: function(param){
			return $http({
				method: 'POST',
				url: 'http://54.214.204.132:8080/meal/create/',
				params: param
			})
		},
		getDishs: function(){
			return $http({
				method: 'GET',
				url: 'http://54.214.204.132:8080/dish'
			})
		},
		addDish: function(param){
			return $http({
				method: 'POST',
				url: 'http://54.214.204.132:8080/meal/addDish/',
				params: param
			})
		}
	}
})

.factory('sportService', function($http) {
	return {
		getPractices: function(id){
			return $http({
				method: 'GET',
				url: 'http://54.214.204.132:8080/practice/findpractices/'+id
			})
		},
		setPractice: function(param){
			return $http({
				method: 'POST',
				url: 'http://54.214.204.132:8080/practice/create',
				params: param
			})
		},
		getExercises: function(){
			return $http({
				method: 'GET',
				url: 'http://54.214.204.132:8080/exercise'
			})
		},
		addExercise: function(param){
			return $http({
				method: 'POST',
				url: 'http://54.214.204.132:8080/practice/addExo',
				params: param
			})
		},
		createExercise: function(param){
			return $http({
				method: 'POST',
				url: 'http://54.214.204.132:8080/exercise/create',
				params: param
			})
		}
	}
})
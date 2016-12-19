angular.module('services', [])

.factory('userService', function($http) {
	return {
		authenticate: function(user){
			var data = {email: user.mail, psw: user.password};
			console.log(data);
			return $http({
				method: 'POST',
				url: 'http://localhost:8080/userConnect/login',
				params: data
			})
		},

		subscribe: function(user){
			var data = {email: user.mail, psw: user.password};
			console.log(data);
			return $http({
				method: 'POST',
				url: 'http://localhost:8080/userConnect/create',
				params: data
			})
		},

		setInfos: function(infos){
			var data = {id: infos.id, firstname: infos.firstName, lastname: infos.lastName, birthday: infos.birthday, sexe: infos.sexe, size: infos.size | 0,weight: infos.weight | 0};
			console.log(data);
			return $http({
				method: 'POST',
				url: 'http://localhost:8080/user/create',
				params: data
			})
		},

		getInfos: function(id){
			return $http({
				method: 'GET',
				url: 'http://localhost:8080/user/find/'+id
			})
		}
	}
})

.factory('bodyUserService', function($http) {
	return {
		getBodyUser: function(id){
			return $http({
				method: 'GET',
				url: 'http://localhost:8080/bodyUser/findLast/'+id
			})
		},

		setBodyUser: function(bodyUserAndId){
			return $http({
				method: 'POST',
				url: 'http://localhost:8080/bodyUser/insert',
				params: bodyUserAndId
			})
		}
	}
})

.factory('SportService', function($http) {
	return {
		getBodyUser: function(id){
			return $http({
				method: 'GET',
				url: 'http://localhost:8080/bodyUser/find/'+id
			})
		},

		setBodyUser: function(bodyUser){
			return $http({
				method: 'POST',
				url: 'http://localhost:8080/bodyUser/create/',
				params: bodyUser
			})
		}
	}
})
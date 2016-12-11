angular.module('services', [])

.factory('userService', function($http) {
	var user = [];

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

		suscribe: function(user){
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
angular.module('services', [])

.factory('userService', function($http) {
	var user = [];

	return {
		authenticate: function(user){
			var data = {email: user.mail, psw: user.password};
			console.log(data);
			return $http({
				method: 'POST',
				url: 'http://localhost:8080/userConnect/create',
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
		}
	}
})
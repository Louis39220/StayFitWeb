angular.module('services', [])

.factory('userService', function($http) {
	return {
		authenticate: function(user){
			var data = {email: user.mail, psw: user.password};
			console.log(data);
			return $http({
				method: 'POST',
				url: 'http://localhost:8090/userConnect/login',
				params: data
			})
		},

		subscribe: function(user){
			var data = {email: user.mail, psw: user.password};
			console.log(data);
			return $http({
				method: 'POST',
				url: 'http://localhost:8090/userConnect/create',
				params: data
			})
		},

		setInfos: function(infos){
			var data = {id: infos.id, firstname: infos.firstName, lastname: infos.lastName, birthday: infos.birthday, sexe: infos.sexe, size: infos.size | 0,weight: infos.weight | 0};
			console.log(data);
			return $http({
				method: 'POST',
				url: 'http://localhost:8090/user/create',
				params: data
			})
		},

		getInfos: function(id){
			return $http({
				method: 'GET',
				url: 'http://localhost:8090/user/find/'+id
			})
		},

		setGoal: function(user){
			var data = {id: user.id, idGoal: user.idGoal};
			console.log(data);
			console.log(user);
			return $http({
				method: 'POST',
				url: 'http://localhost:8090/user/setgoal',
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
				url: 'http://localhost:8090/bodyUser/findLast/'+id
			})
		},

		setBodyUser: function(bodyUserAndId){
			return $http({
				method: 'POST',
				url: 'http://localhost:8090/bodyUser/insert',
				params: bodyUserAndId
			})
		},

		getAllBodyUser: function(id){
			return $http({
				method: 'GET',
				url: 'http://localhost:8090/bodyUser/find/' + id
			})
		}
	}
})

.factory('goalService', function($http) {
	return {
		getGoals: function(){
			return $http({
				method: 'GET',
				url: 'http://localhost:8090/goal'
			})
		},

		getGoal: function(id){
			return $http({
				method: 'GET',
				url: 'http://localhost:8090/goal/find/'+id
			})
		},

		setGoal: function(idGoal){
			return $http({
				method: 'POST',
				url: 'http://localhost:8090/user/setgoal',
				params: idGoal
			})
		}
	}
})

.factory('SportService', function($http) {
	return {
		getBodyUser: function(id){
			return $http({
				method: 'GET',
				url: 'http://localhost:8090/bodyUser/find/'+id
			})
		},

		setBodyUser: function(bodyUser){
			return $http({
				method: 'POST',
				url: 'http://localhost:8090/bodyUser/create/',
				params: bodyUser
			})
		}
	}
})
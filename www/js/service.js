angular.module('services', [])

.factory('userService', function($http) {
	return {
		authenticate: function(user){
			var data = {email: user.mail, psw: user.password};
			return $http({
				method: 'POST',
				url: urlWS+'/userConnect/login',
				params: data
			})
		},

		subscribe: function(user){
			var data = {email: user.mail, psw: user.password};
			return $http({
				method: 'POST',
				url: urlWS+'/userConnect/create',
				params: data
			})
		},

		setInfos: function(infos){
			var data = {id: infos.id, firstname: infos.firstName, lastname: infos.lastName, birthday: infos.birthday, sexe: infos.sexe, size: infos.size | 0,weight: infos.weight | 0};
			return $http({
				method: 'POST',
				url: urlWS+'/user/create',
				params: data
			})
		},

		getInfos: function(id){
			return $http({
				method: 'GET',
				url: urlWS+'/user/find/'+id
			})
		},

		setGoal: function(user){
			var data = {id: user.id, idGoal: user.idGoal};
			return $http({
				method: 'POST',
				url: urlWS+'/user/setgoal',
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
				url: urlWS+'/bodyUser/findLast/'+id
			})
		},

		setBodyUser: function(bodyUserAndId){
			return $http({
				method: 'POST',
				url: urlWS+'/bodyUser/insert',
				params: bodyUserAndId
			})
		},

		getAllBodyUser: function(id){
			return $http({
				method: 'GET',
				url: urlWS+'/bodyUser/find/' + id
			})
		}
	}
})

.factory('goalService', function($http) {
	return {
		getGoals: function(){
			return $http({
				method: 'GET',
				url: urlWS+'/goal'
			})
		},

		getGoal: function(id){
			return $http({
				method: 'GET',
				url: urlWS+'/goal/find/'+id
			})
		},

		setGoal: function(idGoal){
			return $http({
				method: 'POST',
				url: urlWS+'/user/setgoal',
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
				url: urlWS+'/meal/findmeals/'+id
			})
		}
	}
})

.factory('sportService', function($http) {
	return {
		getPractices: function(id){
			return $http({
				method: 'GET',
				url: urlWS+'/practice/findpractices/'+id
			})
		},
		setPractice: function(param){
			return $http({
				method: 'POST',
				url: urlWS+'/practice/create',
				params: param
			})
		},
		getExercises: function(){
			return $http({
				method: 'GET',
				url: urlWS+'/exercise'
			})
		},
		addExercise: function(param){
			return $http({
				method: 'POST',
				url: urlWS+'/practice/addExo',
				params: param
			})
		},
		createExercise: function(param){
			return $http({
				method: 'POST',
				url: urlWS+'/exercise/create',
				params: param
			})
		}
	}
})

.factory('uploadService', function() {
	return {
		upload: function(file){
			var formData = new FormData();
		    formData.append("file", file[0]);
		    console.log(file[0]);
		    formData.append("name",file[0].name);
		    var xhr = new XMLHttpRequest();
			xhr.open("POST", urlWS+'/upload');
			xhr.send(formData);
			return xhr;
		}
	}
})
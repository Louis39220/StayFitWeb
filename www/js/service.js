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
			var data = {id: infos.id, firstname: infos.firstname, lastname: infos.lastname, birthday: infos.birthday, sexe: infos.sexe, size: infos.size | 0,weight: infos.weight | 0, picture: infos.picture};
			return $http({
				method: 'POST',
				url: urlWS+'/user/create',
				params: data
			})
		},

		updateInfos: function(infos){
			var data = {id: infos.id, firstname: infos.firstname, lastname: infos.lastname, birthday: infos.birthday, sexe: infos.sexe, picture: infos.picture};
			return $http({
				method: 'POST',
				url: urlWS+'/user/updateInfos',
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
		},
		createDish: function(param){
			return $http({
				method: 'POST',
				url: urlWS+'/dish/create',
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
		upload: function(file,name){
			var formData = new FormData();
		    formData.append("file", file[0]);
		    console.log(file[0]);
		    formData.append("name",name);
		    var xhr = new XMLHttpRequest();
			xhr.open("POST", urlWS+'/upload');
			xhr.send(formData);
			return xhr;
		}
	}
})
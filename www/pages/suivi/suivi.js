angular.module('suivi.controllers', [])

.controller('SuiviCtrl', function($scope,$document,$compile,bodyUserService) {
	console.log('SuiviCtrl');
	$scope.init = function (){
		/*bodyUserService.getAllBodyUser($scope.user.id)
		.then(function(response){
			console.log(response);
			$scope.bodyUsers = response.data;
			$scope.bodyUsers.forEach(function(item){
				item.recordDate = item.recordDate.split(" ")[0];
				$scope.weights.push({date: item.recordDate, weight: item.weight});
			});
			console.log($scope.bodyUsers);
			console.log($scope.weights);
			
			var myElement = angular.element($document[0].querySelector('weightChart'));
			console.log(myElement);
			var newDirective = angular.element('<my-elem></my-elem>');
			console.log(newDirective);
			myElement.append(newDirective);
			$compile(newDirective)($scope)
			console.log($document.find(newDirective));
			
			var div = document.getElementById('weightChart');
			div.appendChild(document.createElement('my-elem'));
		})*/
	};

	$scope.init();

	var dataSimualted = [55,55,56,56,56,60,60,61];

	$scope.chartConfig = {
        loadRandomData: false, // fess
        chart: {
             renderTo: 'container'
        },
   
        title: {
            text: 'Evolution du poids'
        },          
        xAxis: {
            title: {
                text: 'Date'
            },
            labels: {
                formatter: function() {
                    return this.value;
                }
            }
        },
        yAxis: {
            title: {
                text: 'Poids'
            },
            labels: {
                formatter: function() {
                    return this.value;
                }
            }
        },
        tooltip: {
            pointFormat: '{point.y:,.0f} kg le {point.x}'
        },
        
        plotOptions: {
            area: {
                pointStart: 1,
                marker: {
                    enabled: false,
                    symbol: 'circle',
                    radius: 2,
                    states: {
                        hover: {
                            enabled: true
                        }
                    }
                }
            }
        },
        series: [{
            name: 'Simulated',
            color: '#F73333',
            data: dataSimualted,
            type: 'line',
            dataLabels: {enabled:true}
        }]
    };
    
  


	


})


.directive('myElem',
   function () {
       return {
           restrict: 'E',
           replace:true,
            scope: {
            config: '='  
           },
           template: '<div id="container" style="min-width: 310px; height: 400px; margin: 0 auto"></div>',
           link: function (scope, element, attrs) {
               
                var chart = false;
               
                var initChart = function() {
                  if (chart) chart.destroy();
                  var config = scope.config || {};
                  chart = new Highcharts.Chart(config);
                    
                
                  if(config.loading) {
                    chart.showLoading();
                  }
        
                };
                initChart();
   
        scope.$watch('config.loading', function (loading) {
          if(loading) {
            chart.showLoading();
          } else {
            chart.hideLoading();
          }
        });
               
       scope.$watch('config.series[0].type', function (type) {        
         chart.series[0].update({type: type});       
        });
               
        scope.$watch('config.series[0].dataLabels.enabled', function (enableDataLabels) {          
         chart.series[0].update({dataLabels: {enabled: enableDataLabels}});       
        });                
         }//end watch           
       }
   }) ;


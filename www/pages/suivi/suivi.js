angular.module('suivi.controllers', [])

.controller('SuiviCtrl', function($scope,$document,$ionicSideMenuDelegate,$state,bodyUserService) {
	$ionicSideMenuDelegate.canDragContent(false);
	$scope.init = function (){
	};


	$scope.init();

  $scope.$on("$ionicView.beforeEnter", function(event, data){
    //$state.reload();
    if ($scope.update){
      console.log("on");
      $scope.update();
    }
  });


})

.controller('Weight', function($scope) {
  console.log('ok');
  console.log($scope.weights);
  $scope.$on("$ionicView.beforeEnter", function(event, data){
    console.log("on");
  });
})

.directive('myElem',
   function () {
       return {
           restrict: 'E',
           replace:true,
           controller: 'Weight',
           template: '<div id="chartdiv" style="min-width: 310px; height: 400px; margin: 0 auto"></div>',
           link: function (scope, element, attrs) {
                var chart = false;
               
                var initChart = function() {
                  if (chart) chart.destroy();
                  var config = scope.config || {};
                   chart = AmCharts.makeChart("chartdiv",
                    {
                      "type": "serial",
                      "categoryField": "date",
                      "dataDateFormat": "YYYY-MM-DD",
                      "theme": "default",
                      "categoryAxis": {
                        "parseDates": true
                      },
                      "chartCursor": {
                        "enabled": true
                      },
                      "chartScrollbar": {
                        "enabled": true
                      },
                      "trendLines": [],
                      "graphs": [
                        {
                          "bullet": "round",
                          "id": "AmGraph-1",
                          "title": "graph 1",
                          "valueField": "weight"
                        },
                        {
                          "bullet": "square",
                          "id": "AmGraph-2",
                          "title": "graph 2",
                          "valueField": "column-2"
                        }
                      ],
                      "guides": [],
                      "valueAxes": [
                        {
                          "id": "ValueAxis-1",
                          "title": "Poids"
                        }
                      ],
                      "allLabels": [],
                      "balloon": {
                        "animationDuration": 0.38
                      },
                      "dataProvider": scope.weights
                    }
                  );
                    
                        
                };
                initChart();
                   
         }//end watch           
       }
   })


.directive('myElemMg',
   function () {
       return {
           restrict: 'E',
           replace:true,
          
           template: '<div id="chartdiv2" style="min-width: 310px; height: 400px; margin: 0 auto"></div>',
           link: function (scope, element, attrs) {
                var chart = false;
               
                var initChart = function() {
                  if (chart) chart.destroy();
                  var config = scope.config || {};
                   chart = AmCharts.makeChart("chartdiv2",
        {
          "type": "serial",
          "categoryField": "date",
          "dataDateFormat": "YYYY-MM-DD",
          "theme": "default",
          "categoryAxis": {
            "parseDates": true
          },
          "chartCursor": {
            "enabled": true
          },
          "chartScrollbar": {
            "enabled": true
          },
          "trendLines": [],
          "graphs": [
            {
              "bullet": "round",
              "id": "AmGraph-1",
              "title": "graph 1",
              "valueField": "gracemass"
            },
            {
              "bullet": "square",
              "id": "AmGraph-2",
              "title": "graph 2",
              "valueField": "column-2"
            }
          ],
          "guides": [],
          "valueAxes": [
            {
              "id": "ValueAxis-1",
              "title": "Masse graisseuse"
            }
          ],
          "allLabels": [],
          "balloon": {
            "animationDuration": 0.38
          },
          "dataProvider": scope.gracemasses
        }
      );
                    
                        
                };
                initChart();
                   
         }//end watch           
       }
   })

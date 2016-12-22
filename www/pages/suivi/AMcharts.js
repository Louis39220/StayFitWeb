angular.module('amChartsDirectiveExample',['amChartsDirective'])
   

.directive('myElemMg',
   function () {
       return {
           restrict: 'E',
           replace:true,
          
           template: '<div id="chartdiv2" style="min-width: 310px; height: 400px; margin: 0 auto"></div>',
           link: function (scope, element, attrs) {
               /*
                var chart = false;
               
                var initChart = function() {
                  if (chart) chart.destroy();
                  var config = scope.config || {};
                   chart =       AmCharts.makeChart("chartdiv2",
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
              "valueField": "Poids"
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
              "title": "Axis title"
            }
          ],
          "allLabels": [],
          "balloon": {
            "animationDuration": 0.38
          },
          "titles": [
            {
              "id": "Title-1",
              "size": 15,
              "text": "Chart Title"
            }
          ],
          "dataProvider": [
            {
              "date": "2014-03-01",
              "Poids": 8
            },
            {
              "date": "2014-03-02",
              "Poids": 6
            },
            {
              "date": "2014-03-03",
              "Poids": 2
            },
            {
              "date": "2014-03-04",
              "Poids": 1
            },
            {
              "date": "2014-03-05",
              "Poids": 2
            },
            {
              "date": "2014-03-06",
              "Poids": 3
            },
            {
              "date": "2014-03-07",
              "Poids": 6
            }
          ]
        }
      );
                    
                        
                };
                initChart();
                */
                   
         }//end watch   
       }

});
angular.module('amChartsDirectiveExample',['amChartsDirective'])
   
.directive('myElem',
   function () {
       return {
           restrict: 'E',
           replace:true,
          
           template: '<div id="chartdiv" style="min-width: 310px; height: 400px; margin: 0 auto"></div>',
           link: function (scope, element, attrs) {
               
                var chart = false;
               
                var initChart = function() {
                  if (chart) chart.destroy();
                  var config = scope.config || {};
                   chart = AmCharts.makeChart("chartdiv", {
                "type": "serial",
                "theme": "none",
                "marginLeft": 20,
                "pathToImages": "/lib/amcharts/images/",
                "dataProvider": [{
                    "year": "1950",
                    "value": 85
                }, {
                    "year": "1951",
                    "value": 90
                }, {
                    "year": "1952",
                    "value": 93
                }, {
                    "year": "1953",
                    "value": 100
                }, {
                    "year": "1954",
                    "value": 103
                }, {
                    "year": "1955",
                    "value": 100
                }, {
                    "year": "1956",
                    "value": 95
                }, {
                    "year": "1957",
                    "value": 90
                }, {
                    "year": "1958",
                    "value": 92
                }, {
                    "year": "1959",
                    "value": 93
                }, {
                    "year": "1960",
                    "value": 94
                }, {
                    "year": "1961",
                    "value": 95
                }, {
                    "year": "1962",
                    "value": 95
                }, {
                    "year": "1963",
                    "value": 87
                },  {
                    "year": "2005",
                    "value": 100
                }],
                "valueAxes": [{
                    "axisAlpha": 0,
                    "inside": true,
                    "position": "left",
                    "ignoreAxisWidth": true
                }],
                "graphs": [{
                    "balloonText": "[[category]]<br><b><span style='font-size:14px;'>[[value]]</span></b>",
                    "bullet": "round",
                    "bulletSize": 6,
                    "lineColor": "#d1655d",
                    "lineThickness": 2,
                    "negativeLineColor": "#637bb6",
                    "type": "smoothedLine",
                    "valueField": "value"
                }],
                "chartScrollbar": {},
                "chartCursor": {
                    "categoryBalloonDateFormat": "YYYY",
                    "cursorAlpha": 0,
                    "cursorPosition": "mouse"
                },
                "dataDateFormat": "YYYY",
                "categoryField": "year",
                "categoryAxis": {
                    "minPeriod": "YYYY",
                    "parseDates": true,
                    "minorGridAlpha": 0.1,
                    "minorGridEnabled": true
                }
            });
                    
                        
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
                   chart = AmCharts.makeChart("chartdiv2", {
                "type": "serial",
                "theme": "none",
                "marginLeft": 20,
                "pathToImages": "/lib/amcharts/images/",
                "dataProvider": [{
                    "date": "20-10-1950",
                    "value": 17
                }, {
                    "date": "21-10-1950",
                    "value": 20
                }, {
                    "date": "22-10-1950",
                    "value": 20
                }, {
                    "date": "23-10-1950",
                    "value": 20
                }, {
                    "date": "25-10-1950",
                    "value": 20
                }, {
                    "date": "26-10-1950",
                    "value": 21
                }, {
                    "date": "27-10-1950",
                    "value": 22
                }, {
                    "date": "28-10-1950",
                    "value": 20
                }, {
                    "date": "30-10-1950",
                    "value": 20
                }, {
                    "date": "03-11-1950",
                    "value": 19
                }, {
                    "date": "10-11-1950",
                    "value": 18
                }, {
                    "date": "22-11-1950",
                    "value": 17
                }, {
                    "date": "25-11-1950",
                    "value": 18
                }, {
                    "date": "02-12-1950",
                    "value": 18
                },  {
                    "date": "19-10-1950",
                    "value": 19
                }],
                "valueAxes": [{
                    "axisAlpha": 0,
                    "inside": true,
                    "position": "left",
                    "ignoreAxisWidth": true
                }],
                "graphs": [{
                    "balloonText": "[[category]]<br><b><span style='font-size:14px;'>[[value]]</span></b>",
                    "bullet": "round",
                    "bulletSize": 6,
                    "lineColor": "#d1655d",
                    "lineThickness": 2,
                    "negativeLineColor": "#637bb6",
                    "type": "smoothedLine",
                    "valueField": "value"
                }],
                "chartScrollbar": {},
                "chartCursor": {
                    "categoryBalloonDateFormat": "DD-MM-YYYY",
                    "cursorAlpha": 0,
                    "cursorPosition": "mouse"
                },
                "dataDateFormat": "DD-MM-YYYY",
                "categoryField": "date",
                "categoryAxis": {
                    "minPeriod": "DD-MM-YYYY",
                    "parseDates": true,
                    "minorGridAlpha": 0.1,
                    "minorGridEnabled": true
                }
            });
                    
                        
                };
                initChart();
                   
         }//end watch           
       }

});
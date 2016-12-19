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
                    "date": AmCharts.stringToDate("01-11-2014", "DD-MM-YYYY"),
                    "value": 17
                }, {
                    "date": AmCharts.stringToDate("01-12-2014", "DD-MM-YYYY"),
                    "value": 20
                }, {
                    "date": AmCharts.stringToDate("10-10-2014", "DD-MM-YYYY"),
                    "value": 20
                }, {
                    "date": AmCharts.stringToDate("11-10-2014", "DD-MM-YYYY"),
                    "value": 20
                }, {
                    "date": AmCharts.stringToDate("21-10-2014", "DD-MM-YYYY"),
                    "value": 20
                },  {
                    "date": AmCharts.stringToDate("06-10-2014", "DD-MM-YYYY"),
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
                    "categoryBalloonDateFormat": "YYYY-MM-DD",
                    "cursorAlpha": 0,
                    "cursorPosition": "mouse"
                },
                "dataDateFormat": "DD/MM/YYYY",
                "categoryField": "date",
                "categoryAxis": {
                    "minPeriod": "DD/MM/YYYY",
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
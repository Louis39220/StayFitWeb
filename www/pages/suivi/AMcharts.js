angular.module('amChartsDirectiveExample',['amChartsDirective'])
   
.directive('myElem',
   function () {
       return {
           restrict: 'E',
           replace:true,
          
           template: '<div id="chartdiv" style="min-width: 310px; height: 400px; margin: 0 auto"></div>',
           link: function (scope, element, attrs) {
                console.log(scope.weights);
                var chart = false;
               
                var initChart = function() {
                  if (chart) chart.destroy();
                  var config = scope.config || {};
                   chart = AmCharts.makeChart("chartdiv", {

                        "dataProvider": scope.weights,
                        "type": "serial",
                        "marginLeft": 20,
                        "pathToImages": "/lib/amcharts/images/",
                        "categoryField": "date",
                        "dataDateFormat": "YYYY-MM-DD",
                        "categoryAxis": {
                            "minPeriod": "YYYY-MM-DD",
                            "parseDates": true,
                            "minorGridAlpha": 0.1,
                            "minorGridEnabled": true
                        },
                        "trendLines": [],
                        "graphs": [
                            {
                                "bullet": "round",
                                "id": "AmGraph-1",
                                "title": "evolution",
                                "valueField": "weight"
                            }
                        ],
                        "valueAxes": [
                            {
                                "id": "ValueAxis-1",
                                "title": "Poids",
                                "axisAlpha": 0,
                                "inside": true,
                                "position": "left"
                            }
                        ],
                        "allLabels": [],
                        "balloon": {}
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
               /*
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
                    "categoryBalloonDateFormat": "DD/MM/YYYY",
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
                */
                   
         }//end watch   
       }

});
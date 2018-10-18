/* global angular */
var app = angular.module('myApp', []); 
app.controller('myCtrl', function($scope) {
    
    $scope.stylePage = function() {
        $scope.headerStyle = {
            "color": $scope.hTextColor,
            "background-color": $scope.hBgColor,
            "padding": $scope.hPadding,
            "margin": $scope.hMargin
        }
        
        $scope.headerTextStyle = {
            "font-size": $scope.hFontSize
        }
        
        $scope.bodyStyle = {
            "color": $scope.textColor,
            "background-color": $scope.bgColor,
            "font-size": $scope.fontSize,
            "padding": $scope.padding,
            "margin": $scope.margin
        }
        $scope.ImageStyle = {
            "background-image": "url('" + $scope.imgUrl + "')",
            "border-width":  $scope.borderpx,
            "border-style": $scope.borderstyle,
            "border-color": $scope.bordercolor,
            "filter": "invert(" + $scope.imgfilter + "%)"
        }
        $scope.imageText = {
            "opacity": 0
        }
    }
});
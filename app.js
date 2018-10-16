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
    }
});
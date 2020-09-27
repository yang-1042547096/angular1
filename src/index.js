require('./index.css')
require('./other.css')
// 引入angular
import angular from 'angular';
var app = angular.module('shop', []);
app.controller('car', function($scope) {
    $scope.name="apple"
    $scope.price=7
})



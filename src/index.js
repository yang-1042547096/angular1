require('./index.css')
require('./other.css')
// 引入angular
import angular from 'angular';
var app = angular.module('shop', []);
app.controller('car', function($scope) {
    $scope.name="apple2"
    $scope.price=7
    $scope.arr=["罗永浩","蔡徐坤","李雪琴","李诞","张雨绮"]
    $scope.flag=false
    $scope.students=[{name:'zs',sex:0},{name:'mz',sex:1},{name:'ls',sex:0}]
    $scope.eat=function(){
        alert('吃点好的很有必要');
    }
    $scope.s={
        color:'blue',
        fontSize:'100px'
    }
    $scope.u="./static/dog.jpg"
    
})




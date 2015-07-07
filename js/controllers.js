var phonecatApp = angular.module('phonecatApp', []);
phonecatApp.controller('PhoneListCtrl', function ($scope) {
    $scope.phones = [
    {'name': 'Nexus S', 'snippet': 'Fast just got faster with Nexus S.'},
    {'name': 'Motorola XOOM™ with Wi-Fi', 'snippet': 'The Next, Next Generation tablet.'},
    {'name': 'MOTOROLA XOOM™','snippet': 'The Next, Next Generation tablet.'}
    ];
    $scope.val = 1
    $scope.even = false
    $scope.myarr = [1,2,3,4,5,5]
    $scope.users = [{'name':'user1'},{'name':'user2'},{'name':'user3'}]

    $scope.inc = function(){
        $scope.val +=1
        $scope.even = $scope.val%2==0
    }

    $scope.isEven = function(){
       return $scope.val%2 == 0
    }

    $scope.obj = {name:'name1',age:'age1',title:'Mr.'}

    $scope.classVar = 'orange'
});
var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', function ($scope) {
    //console.log('1');
$scope.phones = [
    {'name': 'Nexus S', 'snippet': 'Fast just got faster with Nexus S.'},
    {'name': 'Motorola XOOM™ with Wi-Fi','snippet': 'The Next, Next Generation tablet.'},
    {'name': 'MOTOROLA XOOM™','snippet': 'The Next, Next Generation tablet.'}
  ];
   alert('Hi');
    $scope.val = 1
    //console.log('1')
    $scope.inc = function(){
        //console.log('1')
        $scope.val +=1
    }
});
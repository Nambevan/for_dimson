'use strict';

angular.module('application')

    .controller('loginController', ['$scope','$http', function($scope,$http) {
        
        $scope.loginSubmit = function (login,password) {
            console.log(login,password);
            $http({
                method: 'POST',
                url: 'http://example.com',
                data : {
                            'login'  : login,
                            'password' : password
                        }
            }).then(
                function successCallback(response) {
                console.log('Vde ok, krasava',response);
            },
                function errorCallback(response) {
                    $scope.errorMss = 'Something wrong, ' + ' status ' + '" '+response.status+' "';
                    
            });
        }
    }])

    .controller('mainController', ['$scope','usersFactory','$http', function($scope, usersFactory, $http) {
        
        //test
        // $scope.users= usersFactory.getUsers();
        
        $scope.getFollowers = function (username,direction) {
            console.log(username,direction) ;
            $http({
                method: 'POST',
                url: 'https://nambevan.github.io/for_dimson/app/new.txt',
                data : {
                    'username'  : username,
                    'direction' : direction
                }
            }).then(
                function successCallback(response) {
                    console.log(response);
                    $scope.users = response.data;
                },
                function errorCallback(response) {
                    $scope.errorMss = 'Something wrong, ' + ' status ' + '" ' + response.status+' "';
                });
        }
    }])
;
































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
                console.log('ok',response);
            },
                function errorCallback(response) {
                    $scope.errorMss = 'Something wrong, ' + ' status ' + '" '+response.status+' "';
                    
            });
        }
    }])

    .controller('mainController', ['$scope','usersFactory','$http', function($scope, usersFactory, $http) {
        
        // $scope.users= usersFactory.getUsers();
        
        $scope.getFollowers = function (username,direction) {
            console.log(username,direction) ;
            $http({
                method: 'GET',
                url: '../new.json',
                data : {
                    'username'  : username,
                    'direction' : direction
                }
            }).then(
                function successCallback(response) {
                    // console.log(response);
                    $scope.users = response.data;
                },
                function errorCallback(response) {
                    $scope.errorMss = 'Something wrong, ' + ' status ' + '" ' + response.status+' "';
                });
        };

        $scope.checkAll = function () {
            var elements = document.querySelectorAll('.checkbox');
            for( var i = 0; i <= elements.length; i++){
                elements[i].checked = true;
            }
        };

        $scope.unCheckAll = function () {
            var elements = document.querySelectorAll('.checkbox');
            for( var i = 0; i <= elements.length; i++){
                var elements = document.querySelectorAll('.checkbox');
                elements[i].checked = false;
            }
        };

        $scope.unSubscribe =function () {
            var elements = document.querySelectorAll('.checkbox');
            var arrChecked = [];
            $scope.errorMss = '';
            for( var i = 0; i <= elements.length; i++){
                if(elements[i].checked == true){
                   arrChecked.push(elements[i].id);
                    console.log(arrChecked);
                }
            }
        }
    }])
;
































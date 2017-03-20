'use strict';

angular.module('application', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
        // route for the home page
        .state('app', {
            url:'/',
            views: {
                'header': {
                    templateUrl : 'views/header.html'
                },
                'content': {
                    templateUrl : 'views/login.html',
                    controller  : 'loginController'
                },
                'footer': {
                    templateUrl : 'views/footer.html'
                }
            }
        })

        .state('app.main', {
            url:'main',
            views: {
                'content@': {
                    templateUrl : 'views/main.html',
                    controller  : 'mainController'
                }
            }
        })

        .state('app.tasks', {
            url:'tasks',
            views: {
                'content@': {
                    templateUrl : 'views/tasks.html',
                    controller  : 'getTasksController'
                }
            }
        })

        .state('app.task', {
            url:'task',
            views: {
                'content@': {
                    templateUrl : 'views/task.html',
                    controller  : 'mainController'
                }
            }
        });

        $urlRouterProvider.otherwise('/');
    })
;
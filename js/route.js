/**
 * Created by wwk on 2017/8/9.
 *
 */
var mainRoutes = ['woman','man','beauty','design']
var app = angular.module('higo',['ionic']);

app.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
        .state('main',{
            url : '/main',
            templateUrl : 'templates/main/main.html',
            controller : 'mainCtrl'
        })
            // // main 子路由
            // .state(mainRoutes[0], {
            //     url : '/woman',
            //     templateUrl : 'template/main/template/woman.html',
            //     parent : 'main',
            //     controller : 'womanCtrl'
            // })
            // .state(mainRoutes[1], {
            //     url : '/man',
            //     templateUrl : 'template/main/template/man.html',
            //     parent : 'main',
            //     controller : 'manCtrl'
            // })
            // .state(mainRoutes[2], {
            //     url : '/beauty',
            //     templateUrl : 'template/main/template/beauty.html',
            //     parent : 'main',
            //     controller : 'beautyCtrl'
            // })
            // .state(mainRoutes[3], {
            //     url : '/design',
            //     templateUrl : 'template/main/template/design.html',
            //     parent : 'main',
            //     controller : 'designCtrl'
            // })
        .state('product',{
            url : '/product',
            templateUrl : 'templates/product.html'
        })
        .state('mode',{
            url : '/mode',
            templateUrl : 'templates/mode.html'
        })
        .state('news',{
            url : '/news',
            templateUrl : 'templates/product.html'
        })
        .state('person',{
            url : '/person',
            templateUrl : 'templates/person.html'
        })
        .state('login',{
            url : '/login',
            templateUrl : 'templates/login.html'
        })
        .state('register', {
            url : '/register',
            templateUrl : 'templates/register.html'
        });
    $urlRouterProvider.otherwise('/main');
});
//  主页面控制

// woman页面控制
app.controller('footerCtrl', ['$scope', '$state', function($scope, $state) {
        $scope.footers =  [
            {
                index: 0,
                className: 'ion-home',
                title: '首页'
            },
            {
                index: 1,
                className: 'ion-bag',
                title: '新品'
            },
            {
                index: 2,
                className: 'ion-social-nodejs',
                title: '时尚圈'
            },
            {
                index: 3,
                className: 'ion-earth',
                title: '消息'
            },
            {
                index: 4,
                className: 'ion-person',
                title: '我的'
            }
        ]
    }
]);

// man页面控制
app.controller('manCtrl', ['$scope', '$state', function($scope, $state) {

    }
]);

//  beauty页面控制
app.controller('beautyCtrl', ['$scope', '$state', function($scope, $state) {

    }
]);

//  beauty页面控制
app.controller('designCtrl', ['$scope', '$state', function($scope, $state) {

}
]);




























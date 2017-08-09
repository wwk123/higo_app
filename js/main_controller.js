/**
 * Created by wenke-wang on 2017/8/9.
 */


app.controller('mainCtrl', ['$scope', '$ionicSlideBoxDelegate', function ($scope, $ionicSlideBoxDelegate) {
    $scope.tabNames=['首页','女士','男士','美妆','DESIGN'];
    $scope.slectIndex=0;
    $scope.activeSlide=function(index){//点击时候触发
        $scope.slectIndex=index;
        $ionicSlideBoxDelegate.slide(index);
        console.log(index);
    };
    $scope.slideChanged=function(index){//滑动时候触发
        $scope.slectIndex=index;
        console.log(index);
    };
    $scope.pages=[
                "templates/main/templates/index.html",
                "templates/main/templates/woman.html",
                "templates/main/templates/man.html",
                "templates/main/templates/beauty.html",
                "templates/main/templates/design.html"
            ];
}])
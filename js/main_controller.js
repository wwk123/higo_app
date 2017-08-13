/**
 * Created by wenke-wang on 2017/8/9.
 */

app.controller('mainCtrl', ['$scope', '$ionicSlideBoxDelegate', function ($scope, $ionicSlideBoxDelegate) {
    $scope.tabNames = ['首页','女士','男士','美妆','DESIGN'];
    $scope.womanNames = ['服装','鞋履','包袋'];
    $scope.manNames = ['上装','腕表','下装','腰带','运动鞋','包袋'];
    $scope.beautyNames = ['护肤','彩妆','香水'];
    $scope.designNames = ['厨卫/卫浴','数码/家电','生活/办公'];
    // $scope.navNames = [1, 2,  3];
    $scope.slectIndex=0;
    $scope.activeSlide=function(index){//点击时候触发
        $scope.slectIndex=index;
        $ionicSlideBoxDelegate.slide(index);
        console.log(index);
        window.scrollTo(0,0);
    };
    $scope.slideChanged=function(index){//滑动时候触发
        $scope.slectIndex=index;
        console.log(index);
        window.scrollTo(0,0);
    };
    $scope.pages=[
                "templates/main/templates/index.html",
                "templates/main/templates/woman.html",
                "templates/main/templates/man.html",
                "templates/main/templates/beauty.html",
                "templates/main/templates/design.html"
            ];
}]);

// 轮播图控制器
// 绑定控制器的注意事项， 无法直接在ionic的自定义指令上绑定 必须在原生的html元素上
app.controller('slideBoxCtrl',['$scope','$ionicSlideBoxDelegate',function ($scope, $ionicSlideBoxDelegate) {
    // 更新数据
        $scope.slideList = [
            {img: 'slide05.png', title01: '好穿时髦还很好买', title02: '爱上storets的博主几天都说不完'},
            {img: 'slide01.png', title01: '我的ASSC和你不一样', title02: 'Anti Social Social Club AW发售'},
            {img: 'slide02.png', title01: '提升幸福感的好物分享', title02: '晒单搜罗   深度种草'},
            {img: 'slide03.png', title01: '全球限量1000双', title02: 'KITH x Coca-Cola x Converse'},
            {img: 'slide04.png', title01: '一颗桃心怎能如此诱人', title02: 'Dior是这样制作高跟鞋的'},
            {img: 'slide06.png', title01: '为什么HIGO只做正品', title02: '两个北大人的亲笔信'},
            {img: 'slide07.png', title01: '这只包直击我的少女心', title02: 'Queen Margaret背后的悲情故事'},
            {img: 'slide08.png', title01: '牙齿也要做美白spa', title02: '没有一口好看的牙，哪能笑得灿烂'},
        ];
        $scope.myActiveSlide = 0;
    }
]);
























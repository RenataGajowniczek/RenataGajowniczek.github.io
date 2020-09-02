var app = angular.module('App', ['ngRoute', 'ngAnimate', 'duScroll', 'angular-parallax', 'dm.stickyNav']).value('duScrollGreedy', true)

    .config(function ($locationProvider) {
        $locationProvider.html5Mode(true);
    })
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                id: 'home',
                templateUrl: 'app/home/homeView.html',
                controller: 'HomeCtrl'
            })
            .when('/kitchen-beats', {
                id: 'kitchen-beats',
                templateUrl: 'app/portfolio/kitchenBeatsView.html',
                controller: 'PortfolioProjectCtrl',
                portfolioSlider: true
            })
            .when('/me-daily', {
                id: 'me-daily',
                templateUrl: 'app/portfolio/MeDailyView.html',
                controller: 'PortfolioProjectCtrl',
                portfolioSlider: true
            })
            .when('/indie-rock', {
                id: 'indie-rock',
                templateUrl: 'app/portfolio/indieRockView.html',
                controller: 'PortfolioProjectCtrl',
                portfolioSlider: true
            })
            .when('/lutenitsa', {
                id: 'lutenitsa',
                templateUrl: 'app/portfolio/lutenitsaView.html',
                controller: 'PortfolioProjectCtrl',
                portfolioSlider: true
            })
            .when('/movie-series', {
                id: 'movie-series',
                templateUrl: 'app/portfolio/movieSeriesView.html',
                controller: 'PortfolioProjectCtrl',
                portfolioSlider: true
            })
            .when('/no-way', {
                id: 'no-way',
                templateUrl: 'app/portfolio/noWayView.html',
                controller: 'PortfolioProjectCtrl',
                portfolioSlider: true
            })
            .when('/dcmn', {
                id: 'dcmn',
                templateUrl: 'app/portfolio/dcmnView.html',
                controller: 'PortfolioProjectCtrl',
                portfolioSlider: true
            })
            .when('/craftsy', {
                id: 'craftsy',
                templateUrl: 'app/portfolio/craftsyView.html',
                controller: 'PortfolioProjectCtrl',
                portfolioSlider: true
            })
            .when('/overcome-autism', {
                id: 'overcome-autism',
                templateUrl: 'app/portfolio/overcomeAutismView.html',
                controller: 'PortfolioProjectCtrl',
                portfolioSlider: true
            })
            .when('/illustration', {
                id: 'illustration',
                templateUrl: 'app/portfolio/illustrationView.html',
                controller: 'PortfolioProjectCtrl',
                portfolioSlider: true
            })
            .when('/words', {
                id: 'words',
                templateUrl: 'app/portfolio/WordsView.html',
                controller: 'PortfolioProjectCtrl',
                portfolioSlider: true
            })
            .when('/nope', {
              id: 'nope',
              templateUrl: 'app/portfolio/nope.html',
              controller: 'PortfolioProjectCtrl',
              portfolioSlider: true
            })
            .otherwise({
                redirectTo: '/'
            });
    })
    .config(['$compileProvider', function ($compileProvider) {
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|mailto|tel):/);
    }])
    .run(function ($rootScope, $route, $templateCache, $timeout, $http) {

        var routes = [];
        angular.forEach($route.routes, function (config, route) {
            if (config.portfolioSlider)
                routes.push(config);
        });
        $rootScope.portfolioProjects = routes;

        $rootScope.$on("$routeChangeSuccess", function (e, currentRoute, previousRoute) {

            if (currentRoute) {
                $rootScope.currentRoute = currentRoute.$$route;
            }

            $rootScope.previousRoute = previousRoute;
            angular.forEach($rootScope.portfolioProjects, function (portfolioProject) {
                portfolioProject.current = portfolioProject.id === currentRoute.$$route.id;
            });
        });

        angular.forEach($rootScope.portfolioProjects, function (portfolioProject) {
            if ($templateCache.get(portfolioProject.templateUrl)) return;
            $http.get(portfolioProject.templateUrl).success(function (t) {
                    $templateCache.put(portfolioProject.templateUrl, t);
                }
            );
        });

    });


app.controller('HomeCtrl', function ($rootScope, $scope, $location, $document, $timeout, $interval) {

    $timeout(function () {
        $rootScope.overflowY = false;
        $rootScope.animationClass = '';
        if ($rootScope.backId) {
            $timeout(function () {
                $document.scrollToElement($(['#', $rootScope.backId].join('')), 200, 300);
                delete $rootScope.backId;
            });
        }
    });

    $scope.goTo = function ($event, href) {
        var target = $($event.target);
        $rootScope.backId = target.attr('id');
        animateProjectBorderOut(target);
        $timeout(function () {
            $location.path(href);
        }, 600);
    };

    $scope.paralaxOffset = $('#portfolio').offset().top;

    $scope.homeSlider = 1;

    var lastScrollPosition = 0;
    var scrollBind = function () {
        var top = (window.pageYOffset || $document.scrollTop) - ($document.clientTop || 0);

        var scrollingTop = !(lastScrollPosition < top);
        lastScrollPosition = top;
        if ($scope.scrollingTop !== scrollingTop)
            $timeout(function () {
                $scope.scrollingTop = scrollingTop;
            });
    };

    angular.element($window).bind("scroll", scrollBind);


    $scope.$on('$destroy', function () {
        angular.element($window).unbind("scroll", scrollBind);
    })


});

app.controller('PortfolioProjectCtrl', function ($rootScope, $scope, $location, $timeout, $window) {

    var portfolioProjects = $rootScope.portfolioProjects;
    var currentPortfolioProject = _.findWhere(portfolioProjects, {id: $rootScope.currentRoute.id});
    var currentIndex = _.indexOf(portfolioProjects, currentPortfolioProject);


    $scope.initializing = false;
    $scope.infoLayer = false;

    $scope.goTo = function ($event, href) {
      var target = $($event.target);
      $rootScope.backId = target.attr('id');
      animateProjectBorderOut(target);
      $timeout(function () {
        $location.path(href);
      }, 600);
    };

    $timeout(function () {
        $rootScope.overflowY = false;
        $scope.initializing = true;
        $scope.loading = true;
        $('.animation-container').removeAttr('style');
    }, 1000);

    $timeout(function () {
        $scope.initializing = true;
        $scope.loading = false;
    }, 2200);

    // close button
    $scope.goHome = function () {

        if ($scope.infoLayer) {
            $scope.infoLayer = false;
            return;
        }

        $rootScope.animationClass = 'slideup';
        $timeout(function () {
            $timeout(function () {
                $location.path('/');
            }, 150);
        });
    };

    // portfolio navigation
    $scope.previousPortfolioProject = function () {
        currentIndex = currentIndex !== 0 ? currentIndex - 1 : portfolioProjects.length - 1;
        $rootScope.animationClass = 'slide-left';
        $timeout(function () {
            $location.path(portfolioProjects[currentIndex].originalPath);
        })
    };

    $scope.nextPortfolioProject = function () {
        currentIndex = currentIndex !== portfolioProjects.length - 1 ? currentIndex + 1 : 0;
        $rootScope.animationClass = 'slide-right';
        $timeout(function () {
            $location.path(portfolioProjects[currentIndex].originalPath);
        });
    };

    // gallery
    $scope.gallerySlider = function (items, start) {
        $scope.imageIndex = start;
        $scope.imagesCount = items;
    };

    $scope.slideTo = function (index) {
        if (index !== $scope.imageIndex) {
            if (index > $scope.imageIndex)
                $scope.imageSlideClass = 'gallery-slider-right';
            else
                $scope.imageSlideClass = 'gallery-slider-left';
            $timeout(function () {
                $scope.imageIndex = index;
            })
        }
    };

    $scope.range = function (n) {
        return new Array(n);
    };


    $scope.showHideInfo = function () {
        $timeout(function () {
            $scope.infoLayer = !$scope.infoLayer;
        });
    };

    $scope.getAssetDir = function() {
      return $scope.isMobile ? 'mobile' : 'desktop';
    };

    var onResize = function () {

        var isMobile = $(window).innerWidth() <= 767;
        $scope.isMobile = isMobile;
        var windowHeight = $(window).innerHeight();
        $('.gallery-slider-image-container').css('min-height', windowHeight);
        $('.fullscreen-slider').css('min-height', windowHeight + 'px');

        var imageContainerHeight = $('.gallery-slider-image-container').height();
        var imageHeight = $('.gallery-image').height();

        if (imageContainerHeight && imageHeight) {
            var marginTop = (imageContainerHeight - imageHeight) / 2;

            marginTop = marginTop - 60;
            if (marginTop <= 0 || isMobile)
                marginTop = 0;

            $('.gallery-slider-image-container').css('padding-top', [marginTop, 'px'].join(''));

            return true;
        }

        $timeout(function () {
            onResize();
        }, 150);
    };

    $scope.onResize = function () {
        onResize();
    };

    angular.element($window).bind('resize', onResize);

    $scope.$on('$destroy', function () {
        angular.element($window).unbind('resize', onResize);
    });

});

console.log = function() {};

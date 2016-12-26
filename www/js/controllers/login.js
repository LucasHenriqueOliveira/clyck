starter.controller("LoginCtrl", function($scope, $ionicHistory, $localStorage, $location, AuthService) {

	$scope.user = {};

	if(AuthService.isLogged()) {
		$ionicHistory.nextViewOptions({
	  		disableBack: true
		});
		$location.path('/app/events');
	}

	var lang = AuthService.getLang();

	$scope.login = function() {
		AuthService.loginSnack4me($scope.user).then(function(response) {
			if(response.data.error) {
	            $scope.hasError = true;
	            $scope.errorMsg = response.data.message[lang];
				$scope.user.password = '';
			} else {
				$scope.user = {};
				$scope.modal.hide();
				$scope.errorMsg = '';
				$ionicHistory.nextViewOptions({
		  			disableBack: true
				});
				$location.path('/app/events');
			}
		});
	};

	$scope.loginFacebook = function() {
		AuthService.loginFacebook();
	};

	$scope.loginGoogle = function() {
		AuthService.loginGoogle();
	};
	
    $scope.signUp = function() {
    	$location.path("/signup");
    };

	$scope.termsUse = function(){
		$location.path("/terms");
	};

});
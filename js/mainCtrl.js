angular.module('chatroom').controller('mainCtrl', function($scope, messageService){

  $scope.postMessage = function(){
    messageService.postMessage($scope.message);
    $scope.message = '';
  }

  $scope.postCookie = function(){
    messageService.postCookie($scope.cookie);
    $scope.cookie = '';
  }

  $scope.getMessages = function(){
    messageService.getMessages().then(function(response){
      $scope.messages = response.data.reverse();
    });
  }

  $scope.getCookie = function(){
    messageService.getCookie().then(function(response){
      $scope.messages = response.data.reverse();
    });
  }

  setInterval(function(){
    $scope.getMessages();
  }, 1500)
})

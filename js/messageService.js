angular.module('chatroom').service('messageService', function($http){

  this.postMessage = function(message){
    return $http({
      method: 'POST',
      url: 'http://practiceapi.devmounta.in/api/chats',
      data: {message: message}
    });
  };

  this.postCookie = function(cookie){
    return $http({
      method: 'POST',
      url: 'http://practiceapi.devmounta.in/api/cookie',
      data: {cookie: cookie}
    });
  };

  this.getMessages = function(){
    return $http({
      method: 'GET',
      url: 'http://practiceapi.devmounta.in/api/chats'
    });
  };

  this.getCookie = function(){
    return $http({
      method: 'GET',
      url: 'http://practiceapi.devmounta.in/api/cookie'
    });
  };

});

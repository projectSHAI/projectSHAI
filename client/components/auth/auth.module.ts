'use strict';

angular.module('projectshaiApp.auth', [
  'projectshaiApp.constants',
  'projectshaiApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });

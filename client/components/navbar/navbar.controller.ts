'use strict';

class NavbarController {
  //start-non-standard
  menu = [{
    'title': 'Home',
    'state': 'main'
  },
{
  'title': 'One',
  'state': 'one'
},
{
  'title': 'Two',
  'state': 'two'
},
{
  'title': 'Three',
  'state': 'three'
},
{
  'title': 'Four',
  'state': 'four'
}];

  isCollapsed = true;
  //end-non-standard

  constructor(Auth) {
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
  }
}

angular.module('projectshaiApp')
  .controller('NavbarController', NavbarController);

'use strict';

angular.module('100days',[])
.factory('people',function(){
  var service = {};

  var list = [{
    name:'Winter',
    image: 'http://placehold.it/250/227594/fff',
    description:'Vestibulum id ligula porta felis euismod semper.',
    link:'http://twitter.com',
    keywords: ' Magna Pharetra Tristique Venenatis Fringilla'
    },{
      name: 'Wisam',
      image: 'http://placehold.it/250/944122/fff',
      description: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam.',
      link:'http://google.com',
      keywords: 'Elit Cras Cursus Fringilla Bibendum'
    }];

  service.getAll = function(){
    return list;
  }
  return service;
})
.controller('MainController',function(people){
  var vm = this;

  //get all people from service
  vm.list = people.getAll();
});
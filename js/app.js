'use strict';

angular.module('100days',['3rdParty'])
.factory('people',function(Tabletop, API_ROOT, $q){
  var service = {};

  service.getData = function(){
    var defer = $q.defer();
    Tabletop.init( { key: API_ROOT, callback: resolve, simpleSheet: true } );

    //Promisify Tabletop API
    function resolve(data){
      defer.resolve(data);
    }

    return defer.promise;
  };

  return service;
})
.controller('MainController',function(people){
  var vm = this;

 people.getData().then(function(data){
  vm.list = data;
 });
})
.constant('API_ROOT','https://docs.google.com/spreadsheets/d/1BoJ2Fpko3qeax4-nq2U4Ur6NoIkxckPSfKr50IyH3fM/pubhtml?gid=0&single=true');
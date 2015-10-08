angular.module('starter.services', [])

  .factory('CodesQR', ['$q', '$http', function ($q, $http) {
    // Might use a resource here that returns a JSON array
    // Some fake testing data

    var codesQR = {};

    var dataAccountSet = {
      get: {
        all: function () {
          var defer = $q.defer();
          var parms = {
            method: "GET",
            url: 'https://billtocrm.crm4.dynamics.com/XRMServices/2011/OrganizationData.svc/',
            header: {
              "Accept": "application/json",
              "Content-Type": "application/json; charset=utf-8",
              "Authorization": 'Basic QU5JU0BCSUxMVE9DUk0ub25taWNyb3NvZnQuY29tOlBAJCR3MHJk'
            }
          };
          $http(parms)
            .success(function (data) {
              // this callback will be called asynchronously
              // when the response is available

              return defer.resolve(data);
            });

          return defer.promise;
        }
      }
    };


    return {
      all: function () {
        return dataAccountSet.get.all();
      },
      remove: function (codeID) {
        codesQR.splice(codesQR.indexOf(codeID), 1);
      },
      get: function (codeID) {
        for (var i = 0; i < codesQR.length; i++) {
          if (codesQR[i].id === codeID) {
            return codesQR[i];
          }
        }
        return null;
      }
    };
  }]);

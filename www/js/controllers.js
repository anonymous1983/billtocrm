angular.module('starter.controllers', [])

  .controller('DashCtrl', function ($scope, $cordovaBarcodeScanner, CodesQR) {

    $scope.scannerClick = false;
    $scope.codeFound = false;

    $scope.scanBarcode = function () {
      $scope.scannerClick = true;
      $scope.code
      //$scope.code = CodesQR.get('55f4066ca64e3294d300392d');
      $cordovaBarcodeScanner.scan().then(function (imageData) {
        $scope.code = CodesQR.get(imageData.text);
        if($scope.code){
          $scope.codeFound = true;
        }else{
          $scope.codeFound = false;
          $scope.code = imageData;
        }
      }, function (error) {
        console.log("An error happened -> " + error);

      });
    };

  })


  .controller('DashProducts', function ($scope, $cordovaBarcodeScanner, CodesQR) {

    $scope.codes = CodesQR.all();

  });



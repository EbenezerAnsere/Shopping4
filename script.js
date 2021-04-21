var script = angular.module("ShoppingListApp", []);

script.controller("ListController", function ($scope) {
    $scope.List = ["Milo", "Bread", "Sugar"];
    
    $scope.addition = function (z) {
        $scope.List.push(z);
        $scope.newItem = "";
    }

    $scope.remove = function (y) {
        var removeItem = $scope.List.indexOf(y);
        $scope.List.splice(removeItem, 1);
    }
});
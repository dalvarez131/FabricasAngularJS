let fabricaApp = angular.module("FabricaApp",[])
let controladorUno = function($scope){
    $scope.dato = {mensaje: 'Saludos desde el Controlador Uno'};
};
// let controladorDos = function($scope){
//     $scope.dato = {mensaje: 'Saludos desde el Controlador Dos'};
// };
fabricaApp.controller('controladorUno',ControladorUno);
// fabricaApp.controller('controladorDos',ControladorDos);


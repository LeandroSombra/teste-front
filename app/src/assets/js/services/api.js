var _module = angular.module('teste.services');
 
_module.factory('api', [function() { 

    var api = {
        gotoNext: function(){
            console.log(this.status.atual);
        },
        status: {
            atual: 0,
            respondidas: [],
            maxPermitida: 1
        },
        links: [
            '/',
            '/sua-cidade',
            '/forca-bruta'
        ],
        respostas: []
    }

    return api;

}]);
 
module.exports = _module;
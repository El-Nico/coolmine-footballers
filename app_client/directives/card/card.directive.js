(function () {
    angular
        .module('footballers')
        .directive('card', card);

    function card() {
        return {
            restrict: 'EA',
            //basically inline scope
            scope: {
                //property of inline scope called rating
                //find any mada in the inline named rating and assign
                event: "=eventdir"
            },
            controller:"cardCtrl as cvm",
            templateUrl: "/directives/card/card.template.html"
        };
    };
})();
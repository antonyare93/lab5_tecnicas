angular.module("JuegoRuedaSuerte", [])
    .controller("ControladorJuegoRuedaSuerte", function ($scope) {
        $scope.figuras = [];
        $scope.mensaje = "";
        $scope.haGanado = false;
        $scope.estadisticas = {
            victorias: 0,
            pares: 0,
            sinCoincidencias: 0
        };

        function inicializarFiguras(indice) {
            for (var i = 0; i < 3; i++) {
                $scope.figuras[i] = new Figura(indice);
            }
        }

        function verificarResultado() {
            var indices = $scope.figuras.map(function(f) { return f.indice; });

            if (indices[0] === indices[1] && indices[1] === indices[2]) {
                return 'victoria';
            }

            if (indices[0] === indices[1] || indices[0] === indices[2] || indices[1] === indices[2]) {
                return 'par';
            }

            return 'sin_coincidencia';
        }

        inicializarFiguras(6);

        $scope.jugar = function () {
            if ($scope.haGanado) {
                return;
            }

            $scope.mensaje = "";
            inicializarFiguras();

            var resultado = verificarResultado();

            if (resultado === 'victoria') {
                $scope.mensaje = "¡FELICIDADES! ¡Has ganado con 3 '" + $scope.figuras[0].getNombre() + "'!";
                $scope.haGanado = true;
                $scope.estadisticas.victorias++;
            } else if (resultado === 'par') {
                $scope.mensaje = "¡Bien! Sacaste un par, sigue intentando.";
                $scope.estadisticas.pares++;
            } else {
                $scope.mensaje = "Sin coincidencias, ¡inténtalo de nuevo!";
                $scope.estadisticas.sinCoincidencias++;
            }
        };
    });

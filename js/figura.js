function Figura(indiceInicial) {
    this.indice = indiceInicial !== undefined ? indiceInicial : Math.floor(Math.random() * 6) + 1;

    this.getNombre = function () {
        switch (this.indice) {
            case 1:
                return "bar";
            case 2:
                return "campana";
            case 3:
                return "cereza";
            case 4:
                return "limon";
            case 5:
                return "palanca";
            case 6:
                return "siete";
            default:
                return "";
        }
    }

    this.getImagen = function(){
        return "imagenes/" + this.getNombre() + ".jpg";
    }
}

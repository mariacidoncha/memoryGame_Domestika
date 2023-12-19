function acierto(tarjetas){
  tarjetas.forEach(function(elemento) {
    elemento.classList.add("acertada");
  });
}

function error(tarjetas){
  tarjetas.forEach(function(elemento) {
    elemento.classList.remove("descubierta");
  });
}
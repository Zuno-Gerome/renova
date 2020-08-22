// Esta es la ip y puerto en que necesitamos que esté el backend disponible

var server = 'http://localhost:5000';

function CompetenciasController () {

this.Listas = function (){
	var self = this;
	$.getJSON(server+"/agrupaciones", function (data) {
			// Se carga la información obtenida en el DOM
			self.cargarAgrupaciones(data);
	 });
},

this.cargarAgrupaciones = function (data){

	// Oculto la plantilla
	$(".competenciaPlantilla").hide();
	// Se recorren iterativamente, uno a uno, los resultados de competencias
	var cantidad = data.length;
	var idColor = 1;
	var idColorCrece = true;
	for (i = 0; i < cantidad; i++) {
		// Se clona la plantilla y la nueva copia ya no es una plantilla
		var divCompetencia = $(".competenciaPlantilla").clone().removeClass("competenciaPlantilla");
		// Se coloca el id correcto (data[i].id) de cada competencia en los links de acciones
		$(divCompetencia).find('.link').each( function(){
			$( this ).attr("href",$( this ).attr("href")+data[i].codigo);
		});
		// Se coloca el nombre de cada competencia
		$(divCompetencia).find('.titulo').text(data[i].descripcion);
		$(divCompetencia).find('.card').addClass('color'+idColor); 
	
		
		//if (idColorCrece){
		//	idColor++;
		//} else {
		//	idColor--;
		//}
//
		//if (idColor > 4 || idColor < 1) {
		//	idColor = idColorCrece ? 4 : 1;
		//	idColorCrece = !idColorCrece;
		//}
		// Se incorpora el nuevo div generado al DOM dentro del div con clase competencias
		$(".competencias").append(divCompetencia);
		// Se muestra el nuevo div con la competencia (la plantilla estaba oculta)
		$(divCompetencia).show();
	}
}


}

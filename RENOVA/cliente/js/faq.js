import {constantes2} from './parameters.js';

 //WHATSAPP FUNCTION
$(function () {
        $('#WAButton').floatingWhatsApp({
          phone: '5491165106333', //WhatsApp Business phone number
           //headerTitle: 'Escribinos!', //Popup Title
          popupMessage: 'Hola! en que te podemos ayudar?', //Popup Message
          showPopup: true, //Enables popup display
          buttonImage: '<img src="images/whatsappModern.png" />', //Button Image
          //headerColor: 'crimson', //Custom header color
          backgroundColor: 'crimson', //Custom background button color
          position: "right" //Position: left | right
   
        });
})()



// FUNCTION

function inserstartextos(id,element){
  document.getElementById(id).innerHTML=element;
}


inserstartextos("Nosotros",         constantes2.nosotros);
inserstartextos("tituloServicios1", constantes2.tituloServicios1);
inserstartextos("descServicios1",   constantes2.descServicios1);
inserstartextos("tituloServicios2", constantes2.tituloServicios2);
inserstartextos("descServicios2",   constantes2.descServicios2);
inserstartextos("tituloServicios3", constantes2.tituloServicios3);
inserstartextos("descServicios3",   constantes2.descServicios3);
inserstartextos("tituloServicios4", constantes2.tituloServicios4);
inserstartextos("descServicios4",   constantes2.descServicios4);







construirElementoPregunta: function (pregunta) {
    var contexto = this;
    var nuevoItem;

    //completar
    //asignar a nuevoitem un elemento li con clase "list-group-item", id "pregunta.id" y texto "pregunta.textoPregunta"
    nuevoItem = $(document.createElement('li'));
    nuevoItem.addClass('list-group-item');
    nuevoItem.attr('id', pregunta.id);
    nuevoItem.text(pregunta.textoPregunta);

    var interiorItem = $('.d-flex');
    var titulo = interiorItem.find('h5');
    titulo.text(pregunta.textoPregunta);
    interiorItem.find('small').text(pregunta.cantidadPorRespuesta.map(function (resp) {
      return " " + resp.textoRespuesta;
    }));
    nuevoItem.html($('.d-flex').html());
    return nuevoItem;
  },

  reconstruirLista: function () {
    var lista = this.elementos.lista;
    lista.html('');
    var preguntas = this.modelo.preguntas;
    for (var i = 0; i < preguntas.length; ++i) {
      lista.append(this.construirElementoPregunta(preguntas[i]));
    }
  },
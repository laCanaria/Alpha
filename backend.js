var APP = function() {

	function crearLista(item){
        var lista =
            '<tr>'+
			'<th class="pedido"></th>'+
			'<th class="nombre"></th>'+
			'<th class="email"></th>'+
			'<th><button type="button" class="btn btn-danger btn-xs">'+
			'<span class="glyphicon glyphicon-ok" aria-hidden="true"></span> '+
			'Pedido Listo</button></th>'+
			'<th><button type="button" class="btn btn-default btn-xs">'+
			'<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>' +
			'Cancelar</button></th>'+
			'</tr>';

		$("#listita").append(lista);
        };

    function cargarPedidos() {

    };

	return {

		generarGrilla: function(){
			//la llamo desde el html con jQuery(document).ready();
			var antesGrilla = $('#listita').append('<thead><tr><th>Pedido</th><th>Nombre</th><th>Email</th><th></th></tr></thead><tbody>');
			for(var i=1; i<4; i++){
				var impresionGrilla = $('#listita').append('<tr data-idPedido="'+i+'">'+
				'<th id="pedido">Muzza grande</th>'+
				'<th id="nombre">Pepe</th>'+
				'<th id="email">pepe@example.com</th>'+
				'<th><button type="button" class="btn btn-danger btn-xs" onclick="return APP.enviarPedido(' + i + ');>'+
				'<span class="glyphicon glyphicon-ok" aria-hidden="true"></span> '+
				'Pedido Listo</button></th>'+
				'</tr>');
			};
			var despuesGrilla = $('#listita').append('</tbody>');
			var item = $(impresionGrilla);
			console.log("Grilla de demostración impresa");
		},

		enviarPedido: function(i) {
			var idPedido = i;
			//acá eliminaríamos la row
			//item.data('idPedido').remove(); ???????
			console.log(idPedido);

		},


	}


}

window.APP = new APP();




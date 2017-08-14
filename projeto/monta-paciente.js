function montaPaciente(trPaciente){
	var tdPeso = trPaciente.getElementsByClassName("info-peso")[0];
	var tdAltura = trPaciente.getElementsByClassName("info-altura")[0];

	var paciente = {"peso"		: tdPeso.textContent,
					"altura"	: tdAltura.textContent,
					pegaImc		: function(){ //definindo a função já na declaração do objeto!

						if(this.altura > 0){

							return this.peso / (this.altura * this.altura);

						}else{

							console.log("Altura inválida");
							return 0;
						}

					}

				};

	return paciente;

}
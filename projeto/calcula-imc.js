var botao = document.getElementById("calcula-imcs");
//botao.click = calculaImcs; //Equivalente, mas só permite uma funcao, o listener permite várias.

botao.addEventListener("click",function(){

	var trPacientes = document.getElementsByClassName("paciente");

	percorreArray(trPacientes,function(trPaciente){
		//percorreArray recebe a lista de TRs, itera sobre ela e passa 
		//uma a uma para esta funcao anonima, que eh o parametro comportamento
		//da funcao percorreArray
		var paciente = montaPaciente(trPaciente);
		var imc = paciente.pegaImc();
		var tdImc = trPaciente.getElementsByClassName("info-imc")[0];
		tdImc.textContent = imc;
		console.log(imc); 

	});

});

botao.addEventListener("click",function(){alert('Calculando')}); //vantagem do listener
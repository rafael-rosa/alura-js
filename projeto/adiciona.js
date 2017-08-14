var botao = document.querySelector("#adicionar-paciente");

botao.addEventListener("click",function(event){ // o navegador se encarrega de fornecer o event

	event.preventDefault(); //Evita o comportamento padrao do botao (submeter o form)

	var campoNome = document.querySelector("#campo-nome"); // # necessario para pesquisar pelo ID - Para buscar pelo nome da classe, usar o .
	var campoPeso = document.querySelector("#campo-peso");
	var campoAltura = document.querySelector("#campo-altura");

	//Alternativas ao getElementById ou TagName
	//document.querySelectorAll("table") // retorna um array
	var tabela = document.querySelector("table") // retorna o primeiro elemento

	var paciente = "<tr class='paciente'>"+
						"<td class='info-nome'>" + campoNome.value + "</td>"+
						"<td class='info-peso'>" + campoPeso.value + "</td>"+
						"<td class='info-altura'>" + campoAltura.value + "</td>"+
						"<td class='info-imc'></td>"+
					"</tr>";

	tabela.innerHTML = tabela.innerHTML + paciente; //tabela.innerHTML +=  paciente;
	
	/*
	campoNome.value = "";
	campoPeso.value = "";
	campoAltura.value = "";
	*/
	//alternativamente, voce pode remover os valores do formulário com a função padrão do formulário reset
    var formPaciente = document.querySelector("form");
    formPaciente.reset();

    var botao = document.getElementById("calcula-imcs");
    botao.click();

});
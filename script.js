function consultaCep(){
	var cep = document.getElementById('cep').value;

	 if(cep.length != "8") {
	 	alert("Cep Invalido")
	 	return false;
	 }

	var url = `https://viacep.com.br/ws/${cep}/json/`;

	fetch(url).then(function(resposta){
		resposta.json().then(function(data){
			mostrarEndereco(data)
		})
	});
}

function mostrarEndereco(dados) {
	var resultado = document.getElementById('resultado');

	if (dados.erro) {
		resultado.innerHTML = "Endereço não encontrado"
	}else{
		resultado.innerHTML = `<h2>Resultado:</h2>
							   <h3>Cep: ${dados.cep}</h3>
							   <h3>Rua: ${dados.logradouro}</h3>
							   <h3>Complemento: ${dados.complemento}</h3>
							   <h3>Bairro: ${dados.bairro}</h3>
							   <h3>Cidade: ${dados.localidade} - ${dados.uf}</h3>`

	resultado.style.color = "rgba(0, 0, 0, 0.8)"
	}
}
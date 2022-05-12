

const calcular = document.getElementById('btn-calcular');

function imc() {
	const nome = document.getElementById('nome');
	const altura = document.getElementById('altura');
	const peso = document.getElementById('peso');
	const resultado = document.getElementById('resultado');

	if (nome.value !== '' && altura.value !== '' && peso.value !== '') {
		const valorIMC = (peso.value / (altura.value * altura.value)).toFixed(2)

		let classificacao = '';

		if ( valorIMC < 18.1){
			classificacao = 'Abaixo do peso.'

    }

	    if (valorIMC > 20.1){
    	classificacao = 'Peso normal.'
    }
	    if (valorIMC > 26){
    	classificacao = 'Acima do peso.'
    }


		resultado.textContent = nome.value + " seu IMC é " + valorIMC + " e sua classificação é " + classificacao


	} else{
		resultado.textContent = 'Preencha todos os campos'
	}
	
} 

calcular.addEventListener('click', imc)


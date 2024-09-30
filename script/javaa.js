function converterParaFahrenheit() {
    let celsius = document.getElementById('celsius').value;
    if (celsius === '') {
        document.getElementById('resultado').innerHTML = 'Por favor, insira um valor.';
        return;
    }
    let fahrenheit = (celsius * 9/5) + 32;
    document.getElementById('resultado').innerHTML = `${celsius}°C é igual a ${fahrenheit.toFixed(2)}°F`;

    alterarCorDeFundo(fahrenheit);  
}

function converterParaCelsius() {
    let fahrenheit = document.getElementById('fahrenheit').value;
    if (fahrenheit === '') {
        document.getElementById('resultado').innerHTML = 'Por favor, insira um valor.';
        return;
    }
    let celsius = (fahrenheit - 32) * 5/9;
    document.getElementById('resultado').innerHTML = `${fahrenheit}°F é igual a ${celsius.toFixed(2)}°C`;

    alterarCorDeFundo(fahrenheit);  
}

function alterarCorDeFundo(temperatura) {
    if (temperatura < 62) {
        document.body.style.background = 'rgb(181, 232, 248)';  // Cor fria
    } else if (temperatura >= 62 && temperatura <= 77) {
        document.body.style.background = 'rgb(0, 189, 247)';   // Cor intermediária
    } else {
        document.body.style.background = 'rgb(233, 163, 58)';  // Cor quente
    }
}

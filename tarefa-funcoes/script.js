function calcularMedia() {

    var num1 = parseFloat(document.getElementById('numero1').value);
    var num2 = parseFloat(document.getElementById('numero2').value);
    var num3 = parseFloat(document.getElementById('numero3').value);
    var num4 = parseFloat(document.getElementById('numero4').value);
    var num5 = parseFloat(document.getElementById('numero5').value);

    if (isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4) || isNaN(num5)) {
        alert('Preencha todos os campos com números!');
        return;
    }

    var media = (num1 + num2 + num3 + num4 + num5) / 5;

    document.getElementById('resultado').innerText = 'A média obtida é: ' + media;
}
var valorEmDolar = 64;
var cotacaoDoDolar = 5.32;
var cotacaoEuro = 6.22;
var cotacaoLibra = 7.12;

var valorEmReal = valorEmDolar * cotacaoDoDolar;
var valorEmEuro = valorEmDolar * cotacaoEuro;
var valorEmLibra = valorEmDolar * cotacaoLibra;

alert(
  "R$" + valorEmReal.toFixed(2) +
  "\n€" + valorEmEuro.toFixed(2) +
  "\n£" + valorEmLibra.toFixed(2)
);


//Conversor de quilômetros para anos-luz

var quilometros = 50000; // Defina a distância em quilômetros
var velocidadeDaLuzEmKmPorAno = 9.461e+12;
var anosLuz = quilometros / velocidadeDaLuzEmKmPorAno;

alert("A distância de " + quilometros + " km equivale a aproximadamente " + anosLuz.toFixed(2) + " anos-luz.");


//Conversor de temperaturas entre Fahrenheit, Kelvin e Celsius

function fahrenheitParaCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
  }
  
  function celsiusParaKelvin(celsius) {
    return celsius + 273.15;
  }
  
  function kelvinParaCelsius(kelvin) {
    return kelvin - 273.15;
  }
  
  // Exemplo de uso:
  var temperaturaFahrenheit = 77; // Por exemplo, 77°F
  var temperaturaCelsius = fahrenheitParaCelsius(temperaturaFahrenheit);
  var temperaturaKelvin = celsiusParaKelvin(temperaturaCelsius);
  
  alert(
    temperaturaFahrenheit + "°F é equivalente a " + temperaturaCelsius.toFixed(2) + "°C e " +
    temperaturaKelvin.toFixed(2) + "K."
  );
  

  //Inserir uma linha ao projeto para exibir o valor em Bitcoin

  var cotacaoDoBitcoin = 60000; // Simulação de cotação do Bitcoin em dólares
  var valorEmBitcoin = valorEmDolar / cotacaoDoBitcoin;
  
  alert("Valor em Bitcoin: " + valorEmBitcoin.toFixed(8) + " BTC");
  

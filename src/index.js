module.exports = function warmup(temperature) {
  function userSubmit() {
        var chislo=document.getElementById('userInput').value;
        var res= (chislo * 9/5) + 32;
        document.getElementById('result').innerHTML='Celsius to Fahrenheit conversion is: '+ res;
    }
};

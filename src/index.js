module.exports = function warmup(temperature) {
   <input id='userInput' size=30>
    <button onClick='userSubmit()'>Translate</button>
    <div id='result'></div>
  
    <script type='text/javascript'>
        function userSubmit() {
            var chislo=document.getElementById('userInput').value;
            var res= (chislo * 9/5) + 32;
            document.getElementById('result').innerHTML='Celsius to Fahrenheit conversion is: '+ res;
        }

        
    </script>
};

var tempC;
var tempF;

function msgC() {
    tempC = document.getElementById('celsius').value;
    tempC=(tempC-32)*0.55; 
    alert("A temperatura em Celsius é " + tempC.toFixed(1));
  }

function msgF() {
    tempF = document.getElementById('fareheint').value;
    tempF=tempF*1.8+32;
    alert("A temperatura em Fareheint é " + tempF.toFixed(1));
  }

  
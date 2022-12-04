function somar(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var num3 = document.getElementById("num3").value;
    var res = document.getElementById("resultado");

    var res = parseInt(num1) + parseInt(num2) + parseInt(num3);
    alert(res); 
}

function calculation(){
    var miles = document.getElementById('miles').value;
    var mpg = document.getElementById('mpg').value; 
    var price = document.getElementById('price').value; 
    var people = document.getElementById('people').value;
    var gas_money = (((miles/mpg)*price)/people); 
    var result = Math.round(gas_money* 100)/100
    return result;
}
function myCalculation(){
    document.getElementById('display').innerHTML = calculation();   
}
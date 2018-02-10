

function myFunction() {
    var result=true
    var qty1= document.getElementById("qty1").value;
    var qty2= document.getElementById("qty2").value;
    var price1= document.getElementById("unitPrice1").innerHTML;
    var price2= document.getElementById("unitPrice2").innerHTML;
    var result=(qty1*price1)+(qty2*price2);
    document.getElementById("totalPrice").innerHTML = result;

}


$("#caculate").click(myFunction);  
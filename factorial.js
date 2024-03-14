

function text1(num)   
{  
if (num == 0) {  
return 1;  
}  
else {  
return num * text1( num - 1 );  
}  
}  
function text()  
{  
var num = document.getElementById("number").value;  
var f = text1(num);  
document.getElementById("result").innerHTML="The factorial of the number " + num + " is: " + f ;  
}
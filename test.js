
function f3(){
	var num1,num2,num3,num4,num5,num6,num7,result;
	num1= document.getElementById('n1').value;
	num1=parseInt(num1);
	
	num2=8;
	num2=parseInt(num2);
	
	num3= document.getElementById('n2').value;
	num3=parseInt(num3);
	
	num4=28;
	num4=parseInt(num4);
	
	num5= document.getElementById('n3').value;
	num5=parseInt(num5);
	
	num6=1.2
	num6=parseInt(num6);
	result=(num1*num2)+(num3*num4)+(num5*num6);
	console.log(result);
	document.getElementById('out').innerHTML=result;
}

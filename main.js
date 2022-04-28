var clearmsg = false;
var ispoint = true;
function show(obj){
	var data =	obj.value;
	var text = document.getElementById("text");
	if(clearmsg){
		text.value = "";
		clearmsg=false;
	}
	if(data == "+" || data == "-" || data == "*" || data == "/"){
		ispoint = true;
	}
	if(data == "0" && text.value == "0"){
		text.value = parseInt(text.value) + 0;	
	}else if(text.value == "0" && data != "+" && data != "-" && data != "*" && data != "/"){
		text.value = parseInt(text.value) + parseInt(data);
	}else{
		text.value += data;
	}
}

function func(obj){
	var f = obj.value;
	var text = document.getElementById("text");
	if (f=="sin")
    text.value = Math.sin(text.value/180 * Math.PI);
	else if (f=="cos")
    text.value = Math.cos(text.value/180 * Math.PI);
    else if (f=="tan")
    text.value = Math.tan(text.value/180 * Math.PI);
	else if (f=="√")
    text.value = Math.sqrt(text.value);
	else if (f=="x2")
    text.value = text.value*text.value;
	else if (f=="x!")
	{n=text.value;
		f=1;
	for(i=1;i<=n;i++)
		f*=i;
	text.value=f;}
	//else if (f=="1/x")
    //text.value = 1/text.value;
}
 // Resultados de cálculo
function getResult(){
	var data = document.getElementById("text");
	try{
		ispoint = true;
		data.value = eval(data.value);
		clearmsg = true;
	}catch(err){
		 alerta ("?¿?");
		data.value = "0";
	}
}
 //Punto decimal
function point(){
	var p = document.getElementById(".");
	var text = document.getElementById("text");
	
	if(ispoint){
		text.value += p.value;
		ispoint = false;
	}		
}
 //Vacío
function funclear(){
	var a = document.getElementById("text").value = "0";
	clearmsg = false;
	ispoint = true;
}
 // Retroceso
function funback(){
	var text = document.getElementById("text");
	if(text.value == "0" || text.value == ""){
		text.value = "0";
	}else{
		document.getElementById("text").value=document.getElementById("text").value.slice(0,-1);
	}
}
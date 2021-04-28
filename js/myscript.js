function getinput(){
	var pa = document.getElementById('myinput1').value;
	var ia = document.getElementById('myinput2').value;
	var y = document.getElementById('myinput3').value;
	calculate(pa,ia,y);
}

function calculate(pa,ia,y){
	var r = ia/12/100;
	var a = Math.pow(r+1,y*12);
	var b = a/(a-1)
	var res = pa*r*b
	var total = res*y*12
	var temi = total-pa
	output(res,total,temi)
}

function output(res,total,temi){
	document.getElementsByName('displayemi')[0].value= res.toFixed(0);
	document.getElementsByName('displaytemi')[0].value= Math.round(temi);
	document.getElementsByName('displaytotal')[0].value= Math.round(total);
}
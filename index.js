
const readline = require('readline').createInterface({
	input : process.stdin,
	output : process.stdout,
});
var stack = [];
var stackException = function(){
	if(stack.length <=1){
		throw "Need one more operand to be calculated!";
	}
}
var add = function(){
	stackException();
	const a = stack.pop();
	const b = stack.pop();
	stack.push(a+b);
	display();
	
}
var subtract = function(){
	stackException();
	const a = stack.pop();
	const b = stack.pop();
	stack.push(b-a);
	display();
	
}
var multiply = function(){
	stackException();
	const a = stack.pop();
	const b = stack.pop();
	stack.push(a*b);
	display();
	
}
var divide = function(){
	stackException();
	const a = stack.pop();
	const b = stack.pop();
	if(a == 0){
		throw "Divided by zero Exception!";
	}
	stack.push(Math.round(b/a));
	display();
}
var store = function(input){
	if(isNaN(input)){
		throw "Input must be Number";
	}
	stack.push(parseInt(input));
	console.log(input);
	display();
}
var equal = function(){
	if(stack.length == 0){
		throw "Invalid Equal.There is no calculation yet";
	return 0;	
	}
	if(stack.length > 1){
		throw "There is no operator to perform calculation";
	return 0;	
	}
	console.log("total:",stack.pop());
	}
var display = function(){
	var str = stack.toString();
	console.log('Display:',str.replace(/,\s?/g, " "));
}
console.log('Reverse Polish Notation Calculator');

var recursiveReadline = function(){
	readline.question("Enter operator or number :",function(input){
		switch(input){
		   case 'exit' : return readline.close();break;	 
		   case '='	: try { equal()} catch(e) {console.log(e);};break;
           case '+' : try { add() } catch(e){ console.log(e);};break;
           case '-' : try { subtract() } catch(e){ console.log(e);};break;
           case '*' : try { multiply() } catch(e){ console.log(e);};break;
           case '/' : try { divide() } catch(e){ console.log(e);};break;
           default  : try{store(input)} catch(e){console.log(e)};break;
		 }
		 recursiveReadline();
		})
}
try{
recursiveReadline();
}
catch(e){
  console(e);
}

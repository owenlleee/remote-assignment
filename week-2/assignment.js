// 任務1: Function and Array
function max(numbers){
	var max = numbers[0];
	for(var i = 1; i <= numbers.length; i++){
		if(max < numbers[i]){
			max = numbers[i];
		}	    
	}
	return max;
}
max([1,2,4,5]);
max([5,2,7,1,6]);

// 任務2: Object
var args = {
  n1: 1,
  n2: 2,
  op: "+"
};
function calculate(args){
	let result;
	if(args.op==="+"){
		result = args.n1 + args.n2;
	}else if(args.op==="-"){
		result = args.n1-args.n2;
	}else{
		result="Not supported";
	}
	return result;
}
calculate(args);

// /分隔線/

class Test {
	constructor(n1,n2,op){
	this.n1 = n1
	this.n2 = n2
	this.op = op
	}
}
const args = new Test(1,2,"+");
function calculate(args){
	let result;
	if(args.op==="+"){
		result = args.n1 + args.n2;
	}else if(args.op==="-"){
		result = args.n1-args.n2;
	}else{
		result="Not supported";
	}
	return result;
}
calculate(args);

// 任務3: Function, Array, and Object
function avg(data){
	let number = 0;
	for(let i = 0; i < data.products.length; i++){
			number += data.products[i].price;
	}
	return number / data.products.length;
}
const data = {
		size: 3,
		products:[
	    {name: "Product1", price: 100},
	    {name: "Product2", price: 700},
	    {name: "Product3", price: 250} 
]}
avg(data);
//console.log(data.products[1].price);
//console.log(data.products.length);
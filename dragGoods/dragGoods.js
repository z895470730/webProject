console.log(1)
let node = null;
const onDrage = (event) =>{
	node = event.target.cloneNode();
	console.log(event)
}
const dropdrop = (event) =>{
	event.target.appendChild(node);
}
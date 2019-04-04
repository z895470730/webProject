let node = null;
const onDrage = (event) =>{
	event.dataTransfer.setData("Text", event.target.id);
	console.log(Text)
}
function drop(event) {
    event.preventDefault();
	let data = event.dataTransfer.getData("Text");
	let node = document.getElementById(data).cloneNode(true); 
    event.target.appendChild(node);
}
function allowDrop(event) {
    event.preventDefault();
}
let arr =[];
		for(let i = 0; i < arr.length; i++){
				next.append(arr[i]);
			}
		const shuttle = () =>{
			const obj = document.getElementsByName("animal");
			let next = document.getElementById("next");
			let person = document.getElementById("pre");
			let arr =[];
			let i = 0;
			while(i < obj.length){
				if(obj[i].checked){
					obj[i].checked = false;
					arr.push(obj[i].parentElement);				
					person.removeChild(obj[i].parentElement);
				}else{
					i++;
				};
			};
			for(let i = 0; i < arr.length; i++){
				next.append(arr[i]);
			}
			arr = [];
			i=0;
		}
		const reverseShuttle = () =>{
			let person = document.getElementById("pre");
			const obj = document.getElementsByName("animal");
			let nextPerson = document.getElementById('next');
			let arr = [];
			let i = 0;
			while(i < obj.length){
				if(obj[i].checked){
					obj[i].checked = false;	
					arr.push(obj[i].parentElement);	
					nextPerson.removeChild(obj[i].parentElement);		
				}else{
					i++;
				};
				for(let n = 0; n < arr.length; n ++){
					person.append(arr[n]);
				};
			}
		}
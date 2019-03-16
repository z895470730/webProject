const list = ['img1','img2','img3'];
		let pointer = 0;
		let change = (arg) =>{
			document.getElementById(list[pointer]).style.display = arg;
			document.getElementById('c'+pointer).style.background = arg === 'none' ? 'gray' : 'lightblue';
		};
		const next = () =>{
			change('none');
			pointer = pointer < 2 ? pointer + 1 : 0;
			change('block');
		};
		const pre = () =>{
			change('none');
			pointer = pointer > 0 ? pointer - 1 : 2;
			change('block');
		};
		const choose = (id) =>{
			change('none');
			pointer = Number(document.getElementById(id).getAttribute('value'));
			change('block');
		};
		let action =  window.setInterval(next,3000);
		const hover = () =>{
			window.clearInterval(action);
		};
		const leave = () =>{
			action =  window.setInterval(next,3000);
		};
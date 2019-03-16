let hover = document.getElementById('hover');	
			//添加onmousemove监听 实时获取鼠标位置 然后不断修整弹窗位置
			//通过修改弹窗的display属性来控制该元素是否显示
			let content = display = (ev) =>{  
				let oEvent=ev||event;
				hover.style.display = 'inline-block';
				hover.style.top = oEvent.clientY+20+'px';
				hover.style.left = oEvent.clientX+20+'px';				
			};
			//当鼠标离开该区域后 将弹窗隐藏
			//并且把弹窗的文本内容删除
			const unmount = () =>{
				hover.style.display = 'none';
				hover.removeChild(hover.childNodes[0])
			}
			//获取调用该方法的id 显示在弹窗
			const getContent = (id) =>{
				let text = document.createTextNode(id);
				hover.append(text);
			}
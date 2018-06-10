//获取视口的宽高
window.onload = function(){
		var viewport = getViewport();
		console.log(`viewportWidth: ${viewport.width} viewportHeight: ${viewport.height}`);
	};
	//返回一个对象包含视口的width和height
	function getViewport(){
			if(document.compatMode == "BackCompat"){//检测浏览器是否为混杂模式
				return {
					width:document.body.clientWidth,
					height:document.body.clientHeight
				};
			}else{
				return {
					width:document.documentElement.clientWidth,
					height:document.documentElement.clientHeight
				};
			}
		}//end of fun
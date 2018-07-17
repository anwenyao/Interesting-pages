//传入元素和其需要删除的类名
function deleteClassName(node,deletedName){
	var searchstr = deletedName;
	var newClassName;
	var reg = new RegExp('\\s*' + searchstr + '\\s*');//为了匹配想要删除的类名左右的空格
	var classNames =  node.className.split(/\s+/);
	var index;
	console.log(classNames);
	for(i = 0,len = classNames.length;i < len -1;++i){
		if(classNames[i] == searchstr){//找到要删除类名的位置
			index = i;
			break;
		}
	}
	classNames.splice(i,1);
	//将修改后的类名数组转换为字符串并赋值给元素的className属性
	node.className = classNames.join(' ');
	console.log('['+node.className+']');
}//end of deleteClassName
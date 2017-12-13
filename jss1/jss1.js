function loadPageContent(){
	var pageName = getQueryStringParam('page');
	var request = new XMLHttpRequest();
	request.open('GET', 'content/${pageName}.html', true);
	request.onreadystatechange  = function(){
		if(this.readyState !== 4){
			return
		}
	document.getElementById('content').innerHTML=this.responseText;
	
	}
	request.send();
}
function getQueryStringParam(name){
	var regex = new RegExp('[?&]${name}=([^&#]*)', 'i');
	var value = regex.exec(window.location.href);
	return value? value[1]:null;
	
}

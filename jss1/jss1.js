var currentYear = new Date().getFullYear();

init();

function init() {
    loadPageContent();
    setCopyrightDates();

}

function setCopyrightDates() {
    if (currentYear > 2016) {
        var copyYear = document.getElementById('currentYear');
        copyYear.innerText = ` - ${currentYear}`;
    }
}


function loadPageContent(){
 
   	var pageName = getQueryStrinParam('page') || 'about';
   	var request = new XMLHttpRequest();
    request.open('GET', `content/${pageName}.html`, true);
   	request.onreadystatechange = function(){
       	if (this.readyState !== 4){
            return;
       
 	}
   
    var html = this.responseText;
		document.getElementById('content').innerHTML = html;
   
 	};

    request.send();
}


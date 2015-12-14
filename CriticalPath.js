var CriticalPath = function(){

	var that = this;
	var resources = [];
	var current;
	var index = 0;
	var endClb;

	var isImgs = ['jpg', 'jpeg', 'png', 'gif'];
	var isScript = ['js', 'css', 'html', 'json'];
	var isCss = ['css'];
	var isDoc = ['html', 'htm'];

	var isIE = false;

	var startItem = function(){
		var p = resources[index];

		if(p.type == 'img'){
			loadImg();
		}
		if(p.type == 'script'){
			loadScript();
		}
	}


	var checkQueue = function(){
		index++;
		if(index>=resources.length){
			if(endClb) endClb();
		}else{
			startItem();
		}
	}

	var loadImg = function(){

		var o = resources[index];
		var p = o.path;

		var img = new Image();
		img.src = p;

		console.log(p);
		
		img.onload = function(){
			if(o.clb) o.clb(p);
			if(o.selector){
				if(o.src){
					var arr = document.querySelectorAll(o.selector);
					console.log(arr)
					for(var i=0; i<arr.length; ++i){
						arr[i].src = p;
					}
				}
				if(o.background){
					var arr = document.querySelectorAll(o.selector);
					for(var i=0; i<arr.length; ++i){
						arr[i].style.backgroundImage = 'url('+p+')';
					}
				}
			}
			checkQueue();
		}

		img.onerror = function(){
			console.log('on error');
		}
	}


	var loadScript = function(){

		var o = resources[index];
		var p = o.path;

		var request = new XMLHttpRequest();
		request.open('GET', p, true);

		request.onload = function() {
			  if (request.status >= 200 && request.status < 400) {

			  	if(o.clb) o.clb(p, request.responseText);

			  	if(o.inject){
				  	if(o.css){
				  		var l = document.createElement('style')
				      	l.type = "text/css";
				      	if(isIE){
				      		l.href = p;
				  			l.rel = "stylesheet";
				      	}else{
				      		l.textContent = request.responseText;
				      	}
				  		document.head.appendChild(l);
				  	}else{
				  		var s = document.createElement('script')
				  		s.type = "text/javascript";
				  		if(isIE){
				      		s.src = p;
				      	}else{
				      		s.textContent = request.responseText;
				      	}
				  		document.body.appendChild(s);
				  	}
				  }
			  } else {
			  	console.log('CriticalPath status error:', request.status)
			  }
			  checkQueue();
		}

		request.onerror = function() {
		  	console.log('CriticalPath network error')
		};

		request.send();

	}


	

	this.load = function(path, type){

		current = {path:path, clb:null, selector:null}
		
		if(!type){
			var extarr = path.split('.');
			var ext = extarr[extarr.length-1];

			if(isImgs.indexOf(ext)>=0) current.type = 'img';
			if(isScript.indexOf(ext)>=0) current.type = 'script';
			if(isCss.indexOf(ext)>=0) current.css = true;
			if(isDoc.indexOf(ext)>=0) current.doc = true;
		}else{
			current.type = type;
			current.css = (isCss.indexOf(type)>=0)
			current.doc = (isDoc.indexOf(type)>=0)
		}

		resources.push(current);
		return that;
	}

	this.then = function(clb){
		current.clb = clb;
		return that;
	}

	this.src = function(selector){
		var p = current;
		p.selector = selector;
		p.src = true
		return that;
	}

	this.background = function(selector){
		var p = current;
		p.selector = selector;
		p.background = true
		return that;
	}

	this.inject = function(){
		var p = current;
		p.inject = true
		return that;
	}


	this.start = function(){
		startItem();
	}

	this.end = function(clb){
		endClb = clb;
		return that;
	}

	return that;
};

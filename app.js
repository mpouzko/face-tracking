window.app = {
	"slides" : {
		0: { 
			"init": function(){
				navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;
				if (navigator.getUserMedia) {       
				    navigator.getUserMedia({video: true}, handleVideo, videoError);
				}

				function handleVideo(stream) {
				    app.video.src = window.URL.createObjectURL(stream);
				}
				 
				function videoError(e) {
				    alert("something went wrong. see devTools console");
				}
			},
			"destroy": function() {
				 
			}
		},
		1: {
			"init":function(){

					app.video.classList.add("mirrorY");
					app.video.classList.remove("normal");
				 
			},
			"destroy": function(){
				app.video.classList.remove("mirrorY");
				app.video.classList.add("normal");
				

			}

		},
		2: {
			"data" : {},
			"init":function(){
					app.slides[2].data = {
						destroy:false,
						cc: app.overlay.getContext('2d'),
						ctracker: new clm.tracker(),
					}
					//app.slides[2].data.destroy2 = false;
					//app.ctracker = new clm.tracker();
					app.slides[2].data.ctracker.init(pModel);
					app.slides[2].data.ctracker.start(app.video);
 					 
					function drawLoop() {
						if (app.slides[2].data.destroy) return;
					    requestAnimationFrame(drawLoop);
					    app.slides[2].data.cc.clearRect(0, 0, app.overlay.width, app.overlay.height);
					    app.slides[2].data.ctracker.draw(app.overlay);
					}
					drawLoop();

					
			},
			"destroy": function(){
				app.slides[2].data.destroy = true;
				app.slides[2].data.ctracker.stop(app.video);
			    app.slides[2].data.cc.clearRect(0, 0, app.overlay.width, app.overlay.height);

				app.slides[2].data.ctracker = null;
			}

		},

		

	},


	"current" : 0,
	"video": document.getElementById('videoStream'),
	"overlay": document.getElementById('overlay'),
	"music": document.getElementById('music'),
 	 
	"controls" : {

		"moveRight" : function(){
			if ( app.current > 0 ) app.controls.goto(-1);

		},
		"moveLeft" : function(){

			if ( app.current < (app.slides.length-1) ) app.controls.goto(1);
		},
		"restartCurrent": function(){
			app.controls.goto();

		},
		"sound": function(){
			if (app.music.paused ) app.music.play()
			else app.music.pause();
			

		},
		"feed": function(){
			if (app.video.paused) 
				app.video.play()
			else 
				app.video.pause();
 
		},
		"restart": function(){
			app.slides[app.current].destroy();
			app.current = 0;
			app.controls.goto();
		},
		"goto": function (inc) {
			if ( !inc || inc===undefined ) inc = 0;
			app.slides[app.current].destroy();
			app.slides[app.current = app.current + inc].init();
			console.log( "slide: " +app.current);
		}
	} 
};



// keyboard contols feature
window.addEventListener('keydown', function(event) {
  switch (event.keyCode) {
    case 37: // Left
      app.controls.moveLeft();
    break;

    case 38: // Up
      //app.controls.moveUp();
    break;

    case 39: // Right
      app.controls.moveRight();
    break;

    case 40: // Down
    //  app.controls.moveDown();
    break;
    
    case 32: // space
      app.controls.feed();
    break;

    case 82: // R
      app.controls.restartCurrent();
    break;

   case 83: // S
      app.controls.sound();
    break;

	case 8: // bs
      app.controls.restart();
    break;

  }
}, false);
 

//define getter for slides 
app.slides.__defineGetter__(
	'length',
	function(){
		length = 0;
		for (e in this) {
			if ( parseInt(e) >= 0) length++;
		}
		return length;
	}
	);


//Responsivness
window.addEventListener('load', function(){
	var body = document.getElementById("body");
	var ratio = app.video.videoHeight / app.video.videoWidth;
	var width = body.clientWidth;
	var height = width * ratio;
	console.log(width,ratio,height,body.clientHeight);
	var container = document.getElementById("container");
	app.video.setAttribute('width',width);
	app.video.setAttribute('height',height);
	container.setAttribute('width',width);
	container.setAttribute('height',height);
	
	app.overlay.setAttribute('width',width);
	
	app.overlay.setAttribute('height',height);

/* var script = document.createElement("script");
    
    script.src = "/lib/clmtrackr/examples/ext_js/jsfeat_detect.js";
    script.type = "text/javascript";
    document.getElementsByTagName("body")[0].appendChild(script);*/
});
 window.addEventListener('resize', function(){
	var body = document.getElementById("body");
	var foobar = document.getElementById("foobar");
	var ratio = app.video.videoHeight / app.video.videoWidth;
	var width = body.clientWidth;
	var height = width * ratio;
	var margin = (body.clientHeight - height) /2;
	var container = document.getElementById("container");
	foobar.style.setProperty('height',margin+"px");
	app.video.setAttribute('width',width);
	app.video.setAttribute('height',height);
	container.setAttribute('width',width);
	container.setAttribute('height',height);
	
	app.overlay.setAttribute('width',width);
	
	app.overlay.setAttribute('height',height);

/* var script = document.createElement("script");
    
    script.src = "/lib/clmtrackr/examples/ext_js/jsfeat_detect.js";
    script.type = "text/javascript";
    document.getElementsByTagName("body")[0].appendChild(script);*/
});
 
//Init the first slide
window.app.controls.goto(0);

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

					app.video.classList.add("mirrorX");
					app.video.classList.remove("normal");
				 
			},
			"destroy": function(){
				app.video.classList.remove("mirrorX");
				app.video.classList.add("normal");
				

			}

		},
		2: {
			"init":function(){
					var vid = app.video;
					var ctracker = new clm.tracker();
					ctracker.init(pModel);
					ctracker.start(videoInput);
					var canvasInput = app.overlay;
					var cc = canvasInput.getContext('2d');
					function drawLoop() {
					    requestAnimationFrame(drawLoop);
					    cc.clearRect(0, 0, canvasInput.width, canvasInput.height);
					    ctracker.draw(canvasInput);
					}
					drawLoop();

					
			},
			"destroy": function(){

			}

		},

		

	},


	"current" : 0,
	"video": document.getElementById('videoStream'),
	"overlay": document.getElementById('overlay'),
 	 
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

		},
		"feed": function(){
			if (app.video.paused) 
				app.video.play()
			else 
				app.video.pause();
 
		},
		"restart": function(){
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
/*window.addEventListener('load', function(){
	var body = document.getElementById("body");
	var width = body.clientWidth;
	var height = body.clientHeight;
	app.video.setAttribute('width',width);
	app.video.setAttribute('height',height);
	app.overlay.setAttribute('width',width);
	
	app.overlay.setAttribute('height',height);

 var script = document.createElement("script");
    
    script.src = "/lib/clmtrackr/examples/ext_js/jsfeat_detect.js";
    script.type = "text/javascript";
    document.getElementsByTagName("body")[0].appendChild(script);
});*/
 
//Init the first slide
window.app.controls.goto(0);

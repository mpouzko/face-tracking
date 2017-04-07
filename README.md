
v 0.1
installation
-------------
- git clone git@github.com:mpouzko/face-tracking.git
- cd into project dir
- git submodule init
- git submodule update
- make project directory available through webserver


how to use 
---------------------
In order to make Chrome allow access to webcam, you need to configure some ssl domain on your webserver (with https:// secure connection), 

OR 

set up local webserver and make it available at http://localhost.
For development purposes, Chrome allows to use webcam at http://localhost without ssl. So, the project must be availble at http://localhost/index.html

NOTE. If you open index.html in browser as a local file (file:///), you won't gain an access to webcam. Use webserver with localhost host instead




what is implemented
---------------------
1.Display pure webcam
2. Mirror webcam image horizontally or vertically (???how to define whether to flip horz or vert? - in config?, or add extra keys- on for horz flip, one for vert? )
3. Face features overlay (https://www.auduno.com/clmtrackr/clm_video.html) 


KEYBORARD CONTROLS 

- Arrow left key: advance one slide 
- Arrow right key: go back one slide 
- Up key: ???
- R key: restart at current slide 
- S key: play background sound on/off 
- Space key: stop webcam feed / resume webcam feed 
- backspace Key: restart at first slide 

Stops at first and last slides (no looping) 







Credits
------------------

music from http://www.bensound.com/royalty-free-music/cinematic

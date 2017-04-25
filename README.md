v 0.5
----------
What is implemented:


0. Display pure webcam + 
1. Mirror webcam image horizontally or vertically + 
2. Face features overlay (https://www.auduno.com/clmtrackr/clm_video.html) + 
3. Numbers feature overlay +
4. triangulated face overlay (http://imgur.com/yzaQM6j)  +
5. Face substitution (https://www.auduno.com/clmtrackr/examples/facesubstitution.html) +
6. Image over face (PNG with transparency that moves with nose tracking point) +
7. Video over face + 
8. Face distortion (https://www.auduno.com/clmtrackr/examples/facedeform.html) +

10. display image instead of webcam feed +
11. display semi transparent image overlay over webcam +
12. Video over face with no clipping (rectangle) + 


++ added config.json.example file to see, how to use config
++ fixed resize bug


v 0.4
----------
What is implemented:


1. Display pure webcam + 
2. Mirror webcam image horizontally or vertically + 
2. Face features overlay (https://www.auduno.com/clmtrackr/clm_video.html) + 
3. Numbers feature overlay +
4. triangulated face overlay (http://imgur.com/yzaQM6j)  +
5. Face substitution (https://www.auduno.com/clmtrackr/examples/facesubstitution.html) +
6. Image over face (PNG with transparency that moves with nose tracking point) +
7. Video over face + 
8. Face distortion (https://www.auduno.com/clmtrackr/examples/facedeform.html) +

10. display image instead of webcam feed +
11. display semi transparent image overlay over webcam +


known bugs:
- when switch to slides #5 and #8  theres camera feed resize bug. The workaround - to resize broser window manually

v 0.3
----------
What is implemeted:

- 1. Display pure webcam + 
- 2. Mirror webcam image horizontally or vertically + 
- 2. Face features overlay (https://www.auduno.com/clmtrackr/clm_video.html) + 
- 3. Numbers feature overlay +
- 4. triangulated face overlay (http://imgur.com/yzaQM6j)  +
- 5. Face substitution (https://www.auduno.com/clmtrackr/examples/facesubstitution.html) +
- 6. Image over face (PNG with transparency that moves with nose tracking point) +

- 8. Face distortion (https://www.auduno.com/clmtrackr/examples/facedeform.html) +

- 10. display image instead of webcam feed +
- 11. display semi transparent image overlay over webcam +



v 0.2
----------

What is implemeted:

- 1. Display pure webcam + 
- 2. Mirror webcam image horizontally or vertically + 
- 2. Face features overlay (https://www.auduno.com/clmtrackr/clm_video.html) + 

- 5. Face substitution (https://www.auduno.com/clmtrackr/examples/facesubstitution.html) +

- 8. Face distortion (https://www.auduno.com/clmtrackr/examples/facedeform.html) +

- 10. display image instead of webcam feed +
- 11. display semi transparent image overlay over webcam +


added config.json 




v 0.1
-----------------

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
Slides:

- Display pure webcam

- Mirror webcam image horizontally or vertically (???how to define whether to flip horz or vert? - in config?, or add extra keys- on for horz flip, one for vert? )

- Face features overlay (https://www.auduno.com/clmtrackr/clm_video.html) 



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

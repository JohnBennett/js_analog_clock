### ON HOW IT'S SET UP ###

The script creates a set of divs.  One set is created with the numbers 1 - 12 and the other with the strong bullet-list bullet.  The number divs are then rotated in a circle, and the dot divs are placed in a line in an angle according to the time.  The setInterval method drives the updates to the position of the 'hands' of the clock.

There are quite a few tweaks to get the numbers and hands to show up how I would like.  For example, numbers seem to be rendered from the top-left, which causes a problem.  If I were smarter, I would use the text width to position the numbers in the center, but I'm not.  I offset the numbers 10 - 12 to the left through trial and error.  I also shifted the entire clock face to the left, to make the clock and bullets match up properly.  The bullet point sits on the far left of a character box, which makes the 'hands' look like they're slightly off to the left.  So, in short, change fonts and sizes at your own risk.  It may not appear how you like.  At some point, I may get around to accommodating font changes and other visuals for ease of use.  

### USING THE CLOCK ###

1. Place the following markup in your html where you want the widget to show up  


    `<div id="analog_clock"></div>`
    
2. Make sure to reference the JavaScript file in the usual way

And that's pretty much it.  If you want to adjust the size, it can be done by adjusting the 'size' variable  

    window.onload = function (){
    	var size = 100; // adjust this to resize the clock
    	setAnalogClockStyles( size );
    	var fontSize = getFontSize();
    	makeClockFace( size );
    	setInterval( function(){ makeClockHands( size, fontSize ) }, 1000);
    };
    
If you want to make other changes, they can be made by hunting around in the script and finding what needs to change. Sorry about that.  It's kind of an 'As-Is' kind of thing.  But, hit me up if you're having trouble with it and I can help.

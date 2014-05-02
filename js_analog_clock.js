//main function
window.onload = function (){
	var size = 100;
	 //to do: create a circle with numbers
	 makeClockFace( size );
	 //to do: create hands 
	 makeClockHands( size );
	 //to do: make em move
};

 //commonly used functions
function cout( string ){ console.log( string ); }
function id( string ){ return document.getElementById( string ); }

function makeClockFace( _size ){
	//create and move divs
	//empty string in third arg tells createDivs to use
	//counter as innerHTML
	createDivs(12, "num", "" );
	moveDivs(12, "num", 30, _size );
}

function makeClockHands( _size ){
	//create the second hand
	var secondHand = 7;
	var secondID = "second";
	createDivs( secondHand, secondID, "." );
	moveDivs( secondHand, secondID, 0, _size );

	//create the minute hand
	var minuteHand = 7;
	var minuteID = "minute";
	createDivs( minuteHand, minuteID, "." );
	moveDivs( minuteHand, minuteID, 30, _size ); 

	//create the hour hand
	var hourHand = 7;
	var hourID = "hour";
	createDivs( hourHand, hourID, "." );
	moveDivs( hourHand, hourID, 60, _size ); 
}
 //add divs for the numbers of the clock face to the DOM 
function createDivs( _numberOfDivs, _idName, _innerHTML ){
	for( var i=0; i < _numberOfDivs; i++ ){
		div = document.createElement( "div" );
		div.id = _idName + ( i + 1 );
		//bit of hackery on the next line for the sake of code reuse
		div.innerHTML = ( _innerHTML === "" ? ( i + 1 ) : _innerHTML );
		div.style.position = "absolute";
		id( "analog_clock" ).appendChild( div );	
	}
}

//puts clock face number divs in a circle
function moveDivs( _numberOfDivs, _idName, _degree, _size ){
	var degrees = 360;
	var degree = _degree;
	var convertToRadian = Math.PI / 180;
	var degreeOffset = 90;
	var clockRadius = _size;
	var incrementValue;

	//checks if creating clock face or hands
	//if clock face, the for loop will iterate degrees
	//if clock hands, the for loop will iterate the radius
	if( _idName === "num" ){
		incrementValue = degrees / _numberOfDivs;
	}else{
		incrementValue = clockRadius / _numberOfDivs;
		clockRadius = 0;
	}
	
	//loop iterates through the set of divs and
	//either moves the numbers around in a circle
	//or places the dot divs in a line
	for( var i = 0; i < _numberOfDivs; i++ ){
		var top = clockRadius * Math.sin( ( degree - degreeOffset ) * convertToRadian );
		var left = clockRadius * Math.cos( ( degree - degreeOffset ) * convertToRadian );
		id( _idName + ( i + 1 ) ).style.position = "absolute";
		id( _idName + ( i + 1 ) ).style.top = top + "px";

		//if creating the clock face and the numbers are 10 or larger
		//create an offset to position the numbers a little better
		if( _idName === "num" && i > 8 ){ 
			id( _idName + ( i + 1 ) ).style.left = ( left - 4 ) + "px";
		}else{
			id( _idName + ( i + 1 ) ).style.left = left + "px";
		}
		
		//if creating the clock face,
		//increment by degrees, otherwise icrement by the radius
		if( _idName === "num" ){
			degree += incrementValue;
		}else{
			clockRadius += incrementValue;
		}
	}
}

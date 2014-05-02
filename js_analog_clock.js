//main function
window.onload = function (){
	 //to do: create a circle with numbers
	 makeClockFace();
	 //to do: create hands 
	 makeClockHands();
	 //to do: make em move
};

 //commonly used functions
function cout( string ){ console.log( string ); }
function id( string ){ return document.getElementById( string ); }

function makeClockFace(){
	//create and move divs
	//empty string in third arg tells createDivs to use
	//counter as innerHTML
	createDivs(12, "num", "" );
	moveDivs(12, "num", 30);
}

function makeClockHands(){
	var secondHand = 7;
	var secondID = "second";
	createDivs( secondHand, secondID, "." );
	moveDivs( secondHand, secondID, 0 );
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
function moveDivs( _numberOfDivs, _idName, _degree ){
	var degrees = 360;
	var degree = _degree;
	var convertToRadian = Math.PI / 180;
	var degreeOffset = 90;
	var clockRadius = 50;
	var incrementValue;
	if( _idName === "num" ){
		incrementValue = degrees / _numberOfDivs;
	}else{
		incrementValue = clockRadius / _numberOfDivs;
		clockRadius = 0;
	}
	cout( clockRadius );

	for( var i = 0; i < _numberOfDivs; i++ ){
		var top = clockRadius * Math.sin( ( degree - degreeOffset ) * convertToRadian );
		var left = clockRadius * Math.cos( ( degree - degreeOffset ) * convertToRadian );
		id( _idName + ( i + 1 ) ).style.position = "absolute";
		id( _idName + ( i + 1 ) ).style.top = top + "px";

		//fix this for refractoring
		if( _idName === "num" && i > 8 ){ 
			id( _idName + ( i + 1 ) ).style.left = ( left - 4 ) + "px";
		}else{
			id( _idName + ( i + 1 ) ).style.left = left + "px";
		}

		if( _idName === "num" ){
			degree += incrementValue;
		}else{
			clockRadius += incrementValue;
		}
		cout( clockRadius );
		cout( incrementValue );
	}
}

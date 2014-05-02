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
	moveDivs(12, "num");
}

function makeClockHands(){
	var secondHand = 7;
	var secondID = "second";
	createDivs( secondHand, secondID, "." );
	makeLine( secondHand, secondID );
}
 //add divs for the numbers of the clock face to the DOM 
function createDivs( numberOfDivs, idName, innerHTML ){
	for( var i=0; i < numberOfDivs; i++ ){
		div = document.createElement( "div" );
		div.id = idName + ( i + 1 );
		//bit of hackery on the next line for the sake of code reuse
		div.innerHTML = ( innerHTML === "" ? ( i + 1 ) : innerHTML );
		div.style.position = "absolute";
		id( "analog_clock" ).appendChild( div );	
	}
}

//puts clock face number divs in a circle
function moveDivs( numberOfDivs, idName ){
	var degrees = 360;
	var degree = 30;
	var convertToRadian = Math.PI / 180;
	var degreeOffset = 90;
	var incrementValue;
	var clockRadius;
	if( idName === "num" ){
		incrementValue = degrees / numberOfDivs;
		clockRadius = 50;
	}else{
		incrementValue = clockRadius / numberOfDivs;
		clockRadius = 0;
	}
	cout( clockRadius );

	for( var i = 0; i < numberOfDivs; i++ ){
		var top = clockRadius * Math.sin( ( degree - degreeOffset ) * convertToRadian );
		var left = clockRadius * Math.cos( ( degree - degreeOffset ) * convertToRadian );
		id( idName + ( i + 1 ) ).style.position = "absolute";
		id( idName + ( i + 1 ) ).style.top = top + "px";

		//fix this for refractoring
		if( idName === "num" && i > 8 ){ 
			id( idName + ( i + 1 ) ).style.left = ( left - 4 ) + "px";
		}else{
			id( idName + ( i + 1 ) ).style.left = left + "px";
		}

		if( idName === "num" ){
			degree += incrementValue;
		}else{
			clockRadius += incrementValue;
		}
	}
}

function makeLine( numberOfDots, idName ){
	var clockRadius = 50;
	var dotIncrement = clockRadius / numberOfDots;
	var radius = 0;
	var degree = 270;
	var degreeOffset = 90;
	var convertToRadian = Math.PI / 180;

	for( var i = 0; i < numberOfDots; i++ ){
		var top = radius * Math.sin( ( degree - degreeOffset ) * convertToRadian ); 	
		var left = radius * Math.cos( ( degree - degreeOffset ) * convertToRadian );
		id( idName + ( i + 1 ) ).style.top = top + "px";
		id( idName + ( i + 1 ) ).style.left = left + "px";
		radius += dotIncrement;
	}
}

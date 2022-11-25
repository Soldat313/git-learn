let op     =  document.querySelector('.player')
let left   =   false
let right  =   false
let up     =   false
let button =   false
let speed  =    0

document.addEventListener('keydown'  , KeyDownHandler  ,false );
document.addEventListener('keyup'  , KeyUpHandler , false );

function KeyDownHandler(e){
	if(e.keyCode == 87){
		up = true
		fo()
	}
	else if(e.keyCode == 83){
		button = true
		fo()
	}
	else if(e.keyCode == 68){
		right = true
		fo()
	}
	else if(e.keyCode == 65){
		left = true
		fo()
	}

}



function KeyUpHandler(e){
	if(e.keyCode == 87){
		up = false
	}
	else if(e.keyCode == 83){
		button = false
	}
	else if(e.keyCode == 68){
		right = false
	}
	else if(e.keyCode == 65){
		left = false
	}

}




function fo(){

if (up == true){
	op.style.marginLeft = speed++ +'px'
	console.log('нажата up')

}
else if(left == true){
		op.style.transform  = `rotate(${speed--}deg)`;
		console.log('нажата left')
}

else if(right == true){
		op.style.transform  = `rotate(${speed++}deg)`;
		console.log('нажата left')
}
else if (button == true){
	op.style.marginLeft = speed-- +'px'
	console.log('нажата up')

}
}

alert('______________zz___')
'use strict'
/*pętla w programowaniu pozwala nam wykonać dany kod pewną ilość razy. Pętle możemy zagnieżdżać.*/
/* for (var i=4 ; i>=0; i--) {
	 console.log(i);
 }*/

/*for (var i=4 ; i>=0; i--) {
	 console.log(i);
 }*/


/*

Pętla while

*/
/*var it=0;
while (it < 5) {
	console.log(it);
	it++;
}*/

/*do while, działa tak samo jak while, ale raz się wykona,na samym początku, nawet jeśli wynik będzie fałszywy*/


var iter=20;
do {
	console.log(iter);
	iter++;
//	console.log(iter);
} while (iter < 10);


/*

Przerwanie Pętli -break

*/

/*var a = 0;
while (a < 5) {
	console.log(++a);
	
	if ( a == 5) {
		break;
	}
}*/



//postinkrementacja- najpierw zwiększa licznik potem wykonuje instrukcje ++i//

// i=i+1 // 
// console.log //

for ( var i=1; i < 4; ){
    console.log(++i);
} 

console.log('-----');
for ( var i=1; i < 4;){
    console.log(i++);
}


//preinkrementacja- najpierw wykonuje instrukcje a potem zwiększa licznik i++//

// console.log //
// i= i+1 //

/*

Przeszukiwanie do kolejnej interakcji - continue

*/

for ( var b = 0; b < 6 ; ++b ) {
	
	if ( b ==3) {
		continue;
	}else {
		console.log (b);
	}
	
	console.log('--')
}
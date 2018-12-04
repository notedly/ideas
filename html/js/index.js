import React , { Component } from 'react' ;
import ReactDOM , { render } from 'react-dom' ;
// import { CustomSelectBox } from './ui/common' ;


class Twave{
	constructor( tg ){

		this.items = [] ;

		if( tg ) {
			this.items.push( tg ) ;
		} else {
			this.items = document.querySelectorAll('.ani_twave') ;
		}

		this.init() ;

	}	// end of constructor

	splitText( tg ){
		let txtWrap = document.createElement('p') ;
		let txt = tg.firstChild.textContent.split('');

		tg.innerHTML = '';
		txt.forEach( (item, idx) => {
			let elem = document.createElement('span') ;
			// elem.style.transitionDelay = '0.'+idx +'s';
			elem.innerHTML = item;
			txtWrap.append( elem );
		}) ;

		tg.append( txtWrap );

	}	// end of splitText

	init(){
		[].forEach.call( this.items, ( item ) => this.splitText( item )) ;
	}

}

window.addEventListener('load', () => {

	let a = new Twave() ;

}) ;
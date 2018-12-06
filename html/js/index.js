import React , { Component } from 'react' ;
import ReactDOM , { render } from 'react-dom' ;
// import { CustomSelectBox } from './ui/common' ;


/*
	움직임은 css
	js는 컨트롤만!


	svg animation
	https://codepen.io/manpreet/pen/KwgBJN
	https://www.tutorialspoint.com/svg/svg_rect.htm
	https://codepen.io/jorgeatgu/pen/bEEemM
*/


const Twave = (() => {

	/*const comn = {
		selectBoxAll : [] ,
		activeClass : 'active' ,
	} ;*/

	const TwaveWrap = ( tg, opts ) => {

		class Tw{

			constructor( tg, opts ){
				this.tag = {
					tg : tg ,
					tWrap : null ,
					txt : null ,
				} ;

				this.opts = {
					dir : opts.dir || 'up' ,
				}
				this.val = {
					bot : 20 ,
					btw : 2 ,
				}

				this.chkAni = false ;

				this.render() ;
				this.evtSet() ;

			}	// end of constructor

			render(){

				let txtWrap = document.createElement('p') ;
				let txt = this.tag.tg.firstChild.textContent.split('');

				this.tag.tg.innerHTML = '';
				txt.forEach( (item, idx) => {
					let elem = document.createElement('span') ;
					elem.innerHTML = item;
					txtWrap.append( elem );
				}) ;

				this.tag.tg.append( txtWrap );
				this.tag.txt = this.tag.tg.querySelectorAll('span') ;
				this.tag.tWrap = this.tag.tg.querySelector('p') ;

				this.posReset() ;

			}	// end of render

			posReset( items ) {
				let dir = 1 ;
				// if( this.opts.dir == 'down' ) dir = -1 ;
				if( this.tag.tg.classList.contains('wave_down') ) dir = -1 ;
				[].forEach.call( this.tag.txt, (t ,idx) => {
					t.style.transform = 'translate3d(0, ' + ( this.val.bot + idx * this.val.btw ) * dir + 'px, 0)';
				}) ;
			}	// end of

			evtSet(){

				let _this = this ;

				this.tag.tg.addEventListener( 'mouseenter', function(){
					_this.activeTxt() ;
				}) ;

				this.tag.tg.addEventListener( 'mouseleave', function(e){
					_this.deActiveTxt() ;
				}) ;

				/*this.tag.tg.addEventListener( 'webkitTransitionEnd', function(evt) {
					console.log( evt.propertyName ) ;
				})*/


			}

			activeTxt(){
				console.log( 'show!' ) ;
				this.tag.tg.classList.add( 'active' ) ;
			}	// end of activeTxt

			deActiveTxt() {
				console.log( 'hide!' ) ;
				this.tag.tg.classList.remove( 'active' ) ;
			}	// end of deActiveTxt



		} // end of SelectBox

		return new Tw( tg, opts ) ;
	};

	return ( option ) => {

		let tg = document.querySelectorAll('.ani_twave')
		,	 opts = option || {};

		[].forEach.call( tg, item => TwaveWrap( item, opts ) ) ;

		/*if( tg instanceof NodeList ) {
			[].forEach.call( tg, btn => {
				return TwaveWrap( btn ) ;
			}) ;
		} else {
			return TwaveWrap( tg ) ;
		}*/
	}

})() ;



window.addEventListener('load', () => {

	Twave() ;
	// Twave({ dir : 'down' }) ;

	let btn = document.querySelector('.btn_link') ;
	btn.addEventListener('mouseenter', function(){
		// console.log( 'in' , document.querySelector('#aniSvg')) ;
		document.querySelector('#aniSvg').beginElement();
	})

}) ;


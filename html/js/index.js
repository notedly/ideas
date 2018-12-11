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


	- 버튼 이벤트
	 flag를 하나 넣어줘서 마우스이벤트가 있을경우, 없을경우 분기를 해준다!

	- 웨이브 애니메이션
	border-radius 사용

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
				this.val = {
					bot : 10 ,
					btw : 2 ,
				}

				this.chkAni = false ;

				this.render() ;

			}	// end of constructor

			render(){

				let txtWrap = document.createElement('div') ;
				let txt = this.tag.tg.firstChild.textContent.split('');

				this.tag.tg.innerHTML = '';
				txt.forEach( (item, idx) => {
					let elem = document.createElement('span') ;
					elem.innerHTML = item;
					txtWrap.append( elem );
				}) ;

				this.tag.tg.append( txtWrap );
				this.tag.txt = this.tag.tg.querySelectorAll('span') ;
				this.tag.tWrap = this.tag.tg.querySelector('div') ;

				this.posReset() ;

			}	// end of render

			posReset( items ) {
				[].forEach.call( this.tag.txt, (t ,idx) => {
					let delay = ( ( idx + 1 ) * 0.02 ).toFixed(2) * 1;
					console.log( 'delay : ', delay  ) ;
					t.style.animationDelay = delay + 's';
					// t.style.transform = 'translate3d(0, ' + ( this.val.bot + idx * this.val.btw ) * dir + 'px, 0)';
				}) ;
			}	// end of

		} // end of SelectBox

		return new Tw( tg, opts ) ;
	};

	return ( option ) => {

		let tg = document.querySelectorAll('.ani_twave_1')
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

const Twave2 = (() => {

	const TwaveWrap = ( tg, opts ) => {

		class Tw{

			constructor( tg, opts ){
				this.tag = {
					tg : tg ,
					tWrap : null ,
					txt : null ,
				} ;
				this.val = {
					bot : 10 ,
					btw : 2 ,
				}
				this.chkAni = false ;
				this.render() ;

			}	// end of constructor

			render(){

				let txtWrap = document.createElement('div') ;
				let txt = this.tag.tg.firstChild.textContent.split('');

				this.tag.tg.innerHTML = '';
				txt.forEach( (item, idx) => {
					let elem = document.createElement('span') ;
					elem.innerHTML = item;
					txtWrap.append( elem );
				}) ;

				this.tag.tg.append( txtWrap );
				this.tag.txt = this.tag.tg.querySelectorAll('span') ;
				this.tag.tWrap = this.tag.tg.querySelector('div') ;

				this.posReset() ;

			}	// end of render

			posReset( items ) {
				[].forEach.call( this.tag.txt, (t ,idx) => {
					let tDelay = ( ( idx + 1 ) * 0.05 ).toFixed(2) * 1;
					let aDelay = ( tDelay + ( this.tag.txt.length/2 * 0.1) ).toFixed(2) * 1;
					console.log( 'delay : ', tDelay + '/' + aDelay ) ;
					t.style.transitionDelay = tDelay + 's';
					t.style.animationDelay = aDelay + 's';
					// t.style.transform = 'translate3d(0, ' + ( this.val.bot + idx * this.val.btw ) * dir + 'px, 0)';
				}) ;
			}	// end of

		} // end of Tw

		return new Tw( tg, opts ) ;
	};

	return ( option ) => {

		let tg = document.querySelectorAll('.ani_twave_2')
		,	 opts = option || {};

		[].forEach.call( tg, item => TwaveWrap( item, opts ) ) ;

	}

})() ;

const Bwave = (() => {

	const TwaveWrap = ( tg, opts ) => {

		class Tw{

			constructor( tg, opts ){
				this.tag = {
					tg : tg ,
					tWrap : null ,
					txt : null ,
				} ;
				this.val = {
					bot : 10 ,
					btw : 2 ,
				}
				this.chkAni = false ;
				this.render() ;

			}	// end of constructor

			render(){

				let txtWrap = document.createElement('div') ;
				let txt = this.tag.tg.firstChild.textContent.split('');

				this.tag.tg.innerHTML = '';
				txt.forEach( (item, idx) => {
					let elem = document.createElement('span') ;
					elem.innerHTML = item;
					txtWrap.append( elem );
				}) ;

				this.tag.tg.append( txtWrap );
				this.tag.txt = this.tag.tg.querySelectorAll('span') ;
				this.tag.tWrap = this.tag.tg.querySelector('div') ;

				this.posReset() ;

			}	// end of render

			posReset( items ) {
				[].forEach.call( this.tag.txt, (t ,idx) => {
					let tDelay = ( ( idx + 1 ) * 0.05 ).toFixed(2) * 1;
					let aDelay = ( tDelay + ( this.tag.txt.length/2 * 0.1) ).toFixed(2) * 1;
					console.log( 'delay : ', tDelay + '/' + aDelay ) ;
					t.style.transitionDelay = tDelay + 's';
					t.style.animationDelay = aDelay + 's';
					// t.style.transform = 'translate3d(0, ' + ( this.val.bot + idx * this.val.btw ) * dir + 'px, 0)';
				}) ;
			}	// end of

		} // end of Tw

		return new Tw( tg, opts ) ;
	};

	return ( option ) => {

		let tg = document.querySelectorAll('.ani_bwave')
		,	 opts = option || {};

		[].forEach.call( tg, item => TwaveWrap( item, opts ) ) ;

	}

})() ;


window.addEventListener('load', () => {

	Twave() ;
	Twave2() ;
	Bwave() ;


	let btn = document.querySelector('.btn_link') ;
	btn.addEventListener('mouseenter', function(){
		// console.log( 'in' , document.querySelector('#aniSvg')) ;
		document.querySelector('#aniSvg').beginElement();
	})



}) ;























/*
class ShapeOverlays {
  constructor(elm) {
    this.elm = elm;
    this.path = elm.querySelectorAll('path');
    this.numPoints = 4;
    this.duration = 1000;
    this.delayPointsArray = [];
    this.delayPointsMax = 0;
    this.delayPerPath = 60;
    this.timeStart = Date.now();
    this.isOpened = false;
    this.isAnimating = false;
  }
  toggle() {
    this.isAnimating = true;
    for (var i = 0; i < this.numPoints; i++) {
      this.delayPointsArray[i] = 0;
    }
    if (this.isOpened === false) {
      this.open();
    } else {
      this.close();
    }
  }
  open() {
    this.isOpened = true;
    this.elm.classList.add('is-opened');
    this.timeStart = Date.now();
    this.renderLoop();
  }
  close() {
    this.isOpened = false;
    this.elm.classList.remove('is-opened');
    this.timeStart = Date.now();
    this.renderLoop();
  }
  updatePath(time) {
    const points = [];
    for (var i = 0; i < this.numPoints; i++) {
      const thisEase = (i % 2 === 1) ? ease.sineOut : ease.exponentialInOut;
      points[i] = (1 - thisEase(Math.min(Math.max(time - this.delayPointsArray[i], 0) / this.duration, 1))) * 100
    }

    let str = '';
    str += (this.isOpened) ? `M 0 0 H ${points[0]}` : `M ${points[0]} 0`;
    for (var i = 0; i < this.numPoints - 1; i++) {
      const p = (i + 1) / (this.numPoints - 1) * 100;
      const cp = p - (1 / (this.numPoints - 1) * 100) / 2;
      str += `C ${points[i]} ${cp} ${points[i + 1]} ${cp} ${points[i + 1]} ${p} `;
    }
    str += (this.isOpened) ? `H 100 V 0` : `H 0 V 0`;
    return str;
  }
  render() {
    if (this.isOpened) {
      for (var i = 0; i < this.path.length; i++) {
        this.path[i].setAttribute('d', this.updatePath(Date.now() - (this.timeStart + this.delayPerPath * i)));
      }
    } else {
      for (var i = 0; i < this.path.length; i++) {
        this.path[i].setAttribute('d', this.updatePath(Date.now() - (this.timeStart + this.delayPerPath * (this.path.length - i - 1))));
      }
    }
  }
  renderLoop() {
    this.render();
    if (Date.now() - this.timeStart < this.duration + this.delayPerPath * (this.path.length - 1) + this.delayPointsMax) {
      requestAnimationFrame(() => {
        this.renderLoop();
      });
    }
    else {
      this.isAnimating = false;
    }
  }
}

(function() {
  const elmHamburger = document.querySelector('.hamburger');
  const gNavItems = document.querySelectorAll('.global-menu__item');
  const elmOverlay = document.querySelector('.shape-overlays');
  const overlay = new ShapeOverlays(elmOverlay);

  elmHamburger.addEventListener('click', () => {
    if (overlay.isAnimating) {
      return false;
    }
    overlay.toggle();
    if (overlay.isOpened === true) {
      elmHamburger.classList.add('is-opened-navi');
      for (var i = 0; i < gNavItems.length; i++) {
        gNavItems[i].classList.add('is-opened');
      }
    } else {
      elmHamburger.classList.remove('is-opened-navi');
      for (var i = 0; i < gNavItems.length; i++) {
        gNavItems[i].classList.remove('is-opened');
      }
    }
  });
}());




class ShapeOverlays {
  constructor(elm) {
    this.elm = elm;
    this.path = elm.querySelectorAll('path');
    this.numPoints = 2;
    this.duration = 600;
    this.delayPointsArray = [];
    this.delayPointsMax = 0;
    this.delayPerPath = 200;
    this.timeStart = Date.now();
    this.isOpened = false;
    this.isAnimating = false;
  }
  toggle() {
    this.isAnimating = true;
    for (var i = 0; i < this.numPoints; i++) {
      this.delayPointsArray[i] = 0;
    }
    if (this.isOpened === false) {
      this.open();
    } else {
      this.close();
    }
  }
  open() {
    this.isOpened = true;
    this.elm.classList.add('is-opened');
    this.timeStart = Date.now();
    this.renderLoop();
  }
  close() {
    this.isOpened = false;
    this.elm.classList.remove('is-opened');
    this.timeStart = Date.now();
    this.renderLoop();
  }
  updatePath(time) {
    const points = [];
    for (var i = 0; i < this.numPoints; i++) {
      const thisEase = this.isOpened ?
                        (i == 1) ? ease.cubicOut : ease.cubicInOut:
                        (i == 1) ? ease.cubicInOut : ease.cubicOut;
      points[i] = thisEase(Math.min(Math.max(time - this.delayPointsArray[i], 0) / this.duration, 1)) * 100
    }

    let str = '';
    str += (this.isOpened) ? `M 0 0 V ${points[0]} ` : `M 0 ${points[0]} `;
    for (var i = 0; i < this.numPoints - 1; i++) {
      const p = (i + 1) / (this.numPoints - 1) * 100;
      const cp = p - (1 / (this.numPoints - 1) * 100) / 2;
      str += `C ${cp} ${points[i]} ${cp} ${points[i + 1]} ${p} ${points[i + 1]} `;
    }
    str += (this.isOpened) ? `V 0 H 0` : `V 100 H 0`;
    return str;
  }
  render() {
    if (this.isOpened) {
      for (var i = 0; i < this.path.length; i++) {
        this.path[i].setAttribute('d', this.updatePath(Date.now() - (this.timeStart + this.delayPerPath * i)));
      }
    } else {
      for (var i = 0; i < this.path.length; i++) {
        this.path[i].setAttribute('d', this.updatePath(Date.now() - (this.timeStart + this.delayPerPath * (this.path.length - i - 1))));
      }
    }
  }
  renderLoop() {
    this.render();
    if (Date.now() - this.timeStart < this.duration + this.delayPerPath * (this.path.length - 1) + this.delayPointsMax) {
      requestAnimationFrame(() => {
        this.renderLoop();
      });
    }
    else {
      this.isAnimating = false;
    }
  }
}
*/
/*
(function() {
  const elmHamburger = document.querySelector('.hamburger');
  const gNavItems = document.querySelectorAll('.global-menu__item');
  const elmOverlay = document.querySelector('.shape-overlays');
  const overlay = new ShapeOverlays(elmOverlay);

  elmHamburger.addEventListener('click', () => {
    if (overlay.isAnimating) {
      return false;
    }
    overlay.toggle();
    if (overlay.isOpened === true) {
      elmHamburger.classList.add('is-opened-navi');
      for (var i = 0; i < gNavItems.length; i++) {
        gNavItems[i].classList.add('is-opened');
      }
    } else {
      elmHamburger.classList.remove('is-opened-navi');
      for (var i = 0; i < gNavItems.length; i++) {
        gNavItems[i].classList.remove('is-opened');
      }
    }
  });
}());*/
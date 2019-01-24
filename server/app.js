import express from 'express' ;
import session from 'express-session' ;
import mysql from 'mysql' ;
import ejs from 'ejs' ;
import fs from 'fs' ;
import { PATH } from '../dir' ;

const [ app , DIR ] = [ express() , PATH.DIR ] ;

app.set( 'views' , __dirname + '/../html_build/' ) ;
app.set( 'view engine' , 'ejs' ) ;
app.engine( 'html' , require( 'ejs' ).renderFile ) ;
app.use( '/' , express.static( __dirname + '/../html_build' )) ;

/**
@기본 :
app.get( '/' , ( req , res ) => {
	res.render( 'index' , {}) ;
}) ;
*/

/* Routing List ( get ) */
app.get( '/' , ( req , res ) => res.render( 'index' , {}) ) ;
app.get( '/css_slider_radio' , ( req , res ) => res.render( 'css_slider_radio' , {}) ) ;
app.get( '/image_split_slide' , ( req , res ) => res.render( 'image_split_slide' , {}) ) ;
app.get( '/css_grid_layout' , ( req , res ) => res.render( 'css_grid_layout' , {}) ) ;
app.get( '/css_grid_layout2' , ( req , res ) => res.render( 'css_grid_layout2' , {}) ) ;
app.get( '/css_grid_layout3' , ( req , res ) => res.render( 'css_grid_layout3' , {}) ) ;

/* Server */
const server = app.listen( DIR.PORT , () => {
	console.log( 'Express listening on port : ' +  server.address().port) ;
}) ;
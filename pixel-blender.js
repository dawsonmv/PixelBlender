"use strict";
/*

Pixel Blender

data array converter

contains:

- Pixel(r,g,b,a) object constructor
-- Pixel.red.green.blue.alpha properties

- Pixel 2d Matrix object constructor
-- new PixelMatrix( data )
--- pixelMatrix[x][y] pixel coordinate access

- data array to PixelMatrix CoDecs
-- dataArrayToPixelMatrix( Canvas.ImageData.data ) 
-- pixelMatrixToDataArray( PixelMatrix )

by Dawson Valdes

*/

// object constructors
function Pixel(r,g,b,a){
	this.red = r;
	this.green = g;
	this.blue = b;
	this.alpha = a;
}

function PixelMatrix( width, height ){
	this.matrixWidth = width;
	this.matrixHeight = height;
	this.matrix = new Array( this.matrixWidth ).fill( new Array( this.matrixHeight ).fill( new Pixel(0,0,0,0) )  );
}

// codec functions
function dataArrayToPixelMatrix( da, pm )
{
	const w = pm.width;
	const h = pm.height;
	const dl = da.length;
	for( var i = 0; i < dl ; i+=4 )
	{
		pm[Math.floor((i/4)%w)][Math.floor((i/4)%h)] = new Pixel(da[i],da[i+1],da[i+2],da[i+3]);
	}
}
 
function pixelMatrixToDataArray( pm, da )
{
	const w = pm.width;
	const h = pm.height;
	var i = 0;
	for( var x = 0; x < w; x++ ){
		for(var y = 0; y < h; y++ ){
			const thisPixel = pm[x][y];
			da[i] = thisPixel.red;
			da[i+1] = thisPixel.green;
			da[i+2] = thisPixel.blue;
			da[i+3] = thisPixel.alpha;
			i+=4;
		}
	}
}

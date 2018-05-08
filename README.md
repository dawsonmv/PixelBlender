# PixelBlender
HTML5 canvas 2d image processing helper

What: if you are trying to do some image processing in javascript some times it would help if you could access an images rgba data by the pixel coordinate ( x, y ).

contains:
- Pixel(r,g,b,a) object constructor
-- Pixel.red.green.blue.alpha properties

- Pixel 2d Matrix object constructor
-- new PixelMatrix( data )
--- pixelMatrix[x][y] pixel coordinate access

- data array to PixelMatrix CoDecs
-- dataArrayToPixelMatrix( Canvas.ImageData.data ) 
-- pixelMatrixToDataArray( PixelMatrix )

How = {

var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
var imageData = context.getImageData(0,0,canvas.width,canvas.height);
var data = imageData.data;
var pixelMatrix = new PixelMatrix( canvas.width, canvas.height );

dataArrayToPixelMatrix( data, pixelMatrix );

/*

your code to change pixelMatrix data goes here

pixelMatrix[x][y] = new Pixel( r, g,  b, a);

*/

pixelMatrixToDataArray( pixelMatrix, data );
context.putImageData( imageData , 0 , 0 , canvas.width, canvas.height );

};


by Dawson Valdes

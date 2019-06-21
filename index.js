var button1 = $('.button1');
var button2 = $('.button2');
var button3 = $('.button3');
var button4 = $('.button4');
var button5 = $('.button5');
var button6 = $('.button6');
var replace = $(`.replacement`);

var imgArray1 = [  './photoz/brain-cells.jpg', './photoz/REAL-BRENDA.jpg', './photoz/rihanna.jpg' ];



// imgArray1[0] = new Image();
// imgArray1[0].src = './photoz/brain-cells.jpg';
//
// imgArray1[1] = new Image();
// imgArray1[1].src = './photoz/REAL-BRENDA.jpg';
//
// imgArray1[2] = new Image();
// imgArray1[2].src = './photoz/rihanna.jpg';
//
//
// imgArray1[3] = new Image();
// imgArray1[3].src = './photoz/paper-baby.jpg';

// var imgArray2 = new Array();
// imgArray1[0] = new Image();
// imgArray1[0].src = '/photoz/Dog-In-Cup.jpeg';
//
// imgArray1[1] = new Image();
// imgArray1[1].src = './photoz/Golden-puppy.jpg';
//
//
// imgArray1[2] = new Image();
// imgArray1[2].src = './photoz/Happy-puppy.jpg';
//
// var imgArray3 = new Array();






button1.on("click", showPicture);

function showPicture(){
  var random = Math.random() * imgArray1.length;
  var final = Math.floor(random);
  // var repImage = imgArray1[final];
  replace.append(<img src=imgArray1[final]>);
}

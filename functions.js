$('.marquee').marquee({
	//duration in milliseconds of the marquee
	duration: 35000,
	//gap in pixels between the tickers
	gap: 50,
	//time in milliseconds before the marquee will start animating
	delayBeforeStart: 500,
	//'left' or 'right'
	direction: 'left',
	//true or false - should the marquee be duplicated to show an effect of continues flow
	duplicated: true,
    startVisible: true,
    pauseOnHover: true
});

$(document).ready(function(){
    animateDiv('#obj0');
    animateDiv('#obj1');
    animateDiv('#obj2');
    animateDiv('#obj3');
    animateDiv('#obj4');
    animateDiv('#obj5');
    animateDiv('#obj6');
    animateDiv('#obj7');
    animateDiv('#obj8');
    animateDiv('#obj9');
    animateDiv('#obj10');
    animateDiv('#obj11');
    animateDiv('#obj12');
    animateDiv('#obj13');
    animateDiv('#obj14');
    animateDiv('#obj15');
    animateDiv('#obj16');
    animateDiv('#room0');
    animateDiv('#room1');
    animateDiv('#room2');
    animateDiv('#room3');
    animateDiv('#room4');
});

function makeNewPosition(){
    
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 150;
    var w = $(window).width() - 150;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
}
// window.addEventListener('resize', makeNewPosition());

function animateDiv(myclass){
    var newq = makeNewPosition();
    $(myclass).animate({ top: newq[0], left: newq[1] }, 8000,   function(){
      animateDiv(myclass);        
    });
    
};

var obj0 = document.getElementById('obj0')
var obj1 = document.getElementById('obj1')
var obj2 = document.getElementById('obj2')
var obj3 = document.getElementById('obj3')
var obj4 = document.getElementById('obj4')
var obj5 = document.getElementById('obj5')
var obj6 = document.getElementById('obj6')
var obj7 = document.getElementById('obj7')
var obj8 = document.getElementById('obj8')
var obj9 = document.getElementById('obj9')
var obj10 = document.getElementById('obj10')
var obj11 = document.getElementById('obj11')
var obj12 = document.getElementById('obj12')
var obj13 = document.getElementById('obj13')
var obj14 = document.getElementById('obj14')
var obj15 = document.getElementById('obj15')
var obj16 = document.getElementById('obj16')
var objects = document.querySelector('.move')
var header = document.querySelector('h1')

//Jenna Marbukh
obj0.addEventListener("mouseover", function() {
  header.textContent = "Jenna Marbukh"
});
//Noel Foltz
obj1.addEventListener("mouseover", function() {
    header.textContent = "Noel Foltz"
});
//Eliza Darnell
obj2.addEventListener("mouseover", function() {
    header.textContent = "Eliza Darnell"
});
//Celia Donnelly
obj3.addEventListener("mouseover", function() {
    header.textContent = "Celia Donnelly"
});
//Jalen Burwell
obj4.addEventListener("mouseover", function() {
    header.textContent = "Jalen Burwell"
});
//Jennifer Bui
obj5.addEventListener("mouseover", function() {
    header.textContent = "Jennifer Bui"
});
//Lindsay O'Neill
obj6.addEventListener("mouseover", function() {
    header.textContent = "Lindsay O'Neill"
});
//Julia Spewak 
obj7.addEventListener("mouseover", function() {
    header.textContent = "Julia Spewak"
});
//Laila Errazzouki
obj8.addEventListener("mouseover", function() {
    header.textContent = "Laila Errazzouki"
});
//Amanda Grate
obj9.addEventListener("mouseover", function() {
    header.textContent = "Amanda Grate"
});
//Madison Scharf
obj10.addEventListener("mouseover", function() {
    header.textContent = "Madison Scharf"
});
//Melisa Tran
// obj11.addEventListener("mouseover", function() {
//     header.textContent = "Melisa Tran"
// });
//Kaya Windpainter
obj12.addEventListener("mouseover", function() {
    header.textContent = "Kaya Windpainter"
});
//Fiona McMichael
obj13.addEventListener("mouseover", function() {
    header.textContent = "Fiona McMichael"
});
//Erin Crawford
obj14.addEventListener("mouseover", function() {
    header.textContent = "Erin Crawford"
});
//Alissa Barber
obj15.addEventListener("mouseover", function() {
    header.textContent = "Alissa Barber"
});
//Caroline Barry
obj16.addEventListener("mouseover", function() {
    header.textContent = "Caroline Barry"
});
objects.addEventListener("mouseout", function() {
    header.textContent = "Straining Letters Into Noise"
    console.log('hi')
});
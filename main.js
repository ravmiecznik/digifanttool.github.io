//var slides = [
//  "afr_history.jpg",
//  "data_tracing.jpg",
//  "emubt_app.jpg",
//  "fuelve.jpg",
//  "knock_history.jpg",
//  "s1.jpg",
//  "s2.jpg",
//  "tunerpro1.jpg",
//];
//
//var slides_descriptions = [
//  "TunerPro support, AFR reading",
//  "TunerPro hit data tracing",
//  "Storage of up to 3 different binaries",
//  "Fuel, Ignition and other maps are editable",
//  "Knock tracing and monitoring",
//  "Price: 100EUR + 10EUR shipping",
//  "Board pemamently replaces old EEPROM chip",
//  "Support for TunerPro"
//];


var top_banner = document.getElementsByClassName("top_bar_container")[0];

//var max_slides = slides.length;
//var slide_num = 0;

//var carousel = document.getElementById('carousel');
//carousel.addEventListener("animationend", animation_end_watch, false);

//var slide_text = document.getElementById("slide_text");

//function animation_end_watch(){
//  rotate();
//  var newone = carousel.cloneNode(true);
//  carousel.parentNode.replaceChild(newone, carousel);
//  carousel = document.getElementById('carousel');
//  carousel.addEventListener("animationend", animation_end_watch, false);
//}

//function rotate(){
//    
//    slide_num += 1;
//    slide_num %= max_slides;
//    var slide_name = 'resources/carousel_slides/' + slides[slide_num];
//    console.log(slides[slide_num]);
//    carousel.setAttribute('src', slide_name);
//    slide_text.text = slides_descriptions[slide_num];
//    }

window.onscroll = function() {checkScroll();};

var navbar = document.getElementsByClassName("topnav")[0];
var sticky = navbar.offsetTop;

var top_bar = document.getElementsByClassName("top_bar_container")[0];

var floating_links = document.getElementById("links");
floating_links.style.left = "-200px";
checkScroll();

function checkScroll() {

  top_banner_rect = top_banner.getBoundingClientRect();
  floating_links_rect = floating_links.getBoundingClientRect();
  var floating_links_overlap = top_banner_rect.top + top_banner_rect.height - floating_links_rect.top;

  // floating links hiding
  if(floating_links_overlap > 0){
    floating_links.style.left = "-200px";
  }
  else {
    floating_links.style.left = "0px";
  }
  
  
  //sticky navbar
  if (window.pageYOffset > 0) {
    navbar.classList.add("sticky");
    top_bar.style.top = "-200px";
  } else {
    navbar.classList.remove("sticky");
    top_bar.style.top = "0px";
  }
  
  
  //  if (window.scrollY > 300) {
      //setTimeout(function() {document.getElementById("hidden_bar").style.left = "-200px";}, 5000);
  //  }
  //  else {
      //document.getElementById("hidden_bar").style.left = "-200px";
  //  }
}
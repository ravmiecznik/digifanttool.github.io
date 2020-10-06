
window.onscroll = function() {checkScroll();};
window.onresize = function() {checkResize();};

var top_banner = document.getElementsByClassName("top_bar_container")[0];
var navbar = document.getElementsByClassName("topnav")[0];
var top_bar = document.getElementsByClassName("top_bar_container")[0];
var floating_links = document.getElementById("links");
floating_links.style.left = "-200px";

var main_grid = document.getElementById("main_grid");
var main_grid_default_style = main_grid.style;
var alignement_switch_width = 1500;

var p_tag_default_fontSize = document.getElementsByTagName('p')[0].style.fontSize;
var p_tag_default_fontSize = document.getElementsByTagName('p')[0].style.fontSize;

checkScroll();
adapt_to_screen(alignement_switch_width);



function checkResize() {
    adapt_to_screen(alignement_switch_width);
    checkScroll();
    //main.classList.remove("main_grid");
    //main.classList.add("simple_grid");
}

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
}

function adapt_to_screen (switch_width) {
    var width = window.window.innerWidth;
    if(width <= switch_width){
      main_grid.style.gridTemplateColumns = "1fr";
      set_p_tags_style_fontSize("30px");
    }
    else{
      main_grid.style = main_grid_default_style;
      set_p_tags_style_fontSize(p_tag_default_fontSize);
    }
}

function set_p_tags_style_fontSize(size){
  p = document.getElementsByTagName('p');
  for (var i=0; i<p.length; i++){
    p[i].style.fontSize = size;
  }
}


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


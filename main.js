
window.onscroll = function() {checkScroll();};
window.onresize = function() {checkResize();};

var top_banner = document.getElementsByClassName("top_bar_container")[0];
var navbar = document.getElementsByClassName("topnav")[0];
var top_bar = document.getElementsByClassName("top_bar_container")[0];
var floating_links = document.getElementById("links");
floating_links.style.left = "-200px";

var main_grid = document.getElementById("main_grid");
var main_grid_default_style = main_grid.style;
var alignement_switch_width = 1000;

var p_tag_default_fontSize = document.getElementsByTagName('p')[0].style.fontSize;
var p_tag_default_fontSize = document.getElementsByTagName('p')[0].style.fontSize;

checkScroll();
checkResize();
GetLatestReleaseInfo();



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
      //set_p_tags_style_fontSize("25px");
    }
    else{
      main_grid.style = main_grid_default_style;
      //set_p_tags_style_fontSize(p_tag_default_fontSize);
    }
}

function set_p_tags_style_fontSize(size){
  p = document.getElementsByTagName('p');
  for (var i=0; i<p.length; i++){
    p[i].style.fontSize = size;
  }
}

function GetLatestReleaseInfo() {
  $.getJSON("https://api.github.com/repos/ravmiecznik/emub_bt_r/releases/latest").done(function(release) {
    var release_num = release.html_url.split('/').pop();
    var assets = release.assets;
    var asset_abbreviation = {
      'bin': "Digifant EEPROM image",
      'adx': "TunerPro data logginng definition file",
      'xdf': "TunerPro map definition file",
      'pdf': "manual file",
      'hex': "EMUBT image file, use for reflashing",
      'rar': "Compressed executable file",
      'exe': "Executable appliaction"
    }
    
    download_section = document.getElementById("release");
    release_link = download_section.getElementsByTagName('h3')[0].getElementsByTagName('a')[0];
    release_link.textContent = "EMUBT release: " + release_num;
    release_link.title = "GIT";
    release_link.href=release.html_url;
    
    div_pdf = document.getElementById("pdf");
    div_bin = document.getElementById("bin");
    div_exe = document.getElementById("exe");
    div_hex = document.getElementById("hex");
    div_other = document.getElementById("other");
    div_tuner_pro = document.getElementById("tuner_pro");
    div_aldl_droid = document.getElementById("aldldroid");
    
    console.log(assets.length);
    for (var i=0; i<assets.length; i++){
      link = document.createElement("p");
      a_link = document.createElement("a");
      a_link.textContent = assets[i].name;
      a_link.href = assets[i].browser_download_url;
      a_link.classList.add("git_asset");
      
      
      
      var extension = assets[i].name.split('.').pop();
      link.title = asset_abbreviation[extension];
      
      if(extension == 'pdf'){
        div_pdf.appendChild(link);
        div_pdf.getElementsByTagName('h4')[0].textContent = "Manuals:";
      }
      else if(extension == 'bin'){
        div_bin.appendChild(link);
        div_bin.getElementsByTagName('h4')[0].textContent = "Digifant tested EEPROMs:";
      }
      else if(extension == 'exe' || extension == 'rar'){
        div_exe.appendChild(link);
        div_exe.getElementsByTagName('h4')[0].textContent = "EmuBT app:";
      }
      else if(extension == 'adx' || extension == 'xdf'){
        if(assets[i].name.includes("aldl_droid")){
          div_aldl_droid.appendChild(link);
          link.title = "ALDLdroid data logginng definition file";
          div_aldl_droid.getElementsByTagName('h4')[0].textContent = "ALDLdroid files:";          
        }
        else{
          div_tuner_pro.appendChild(link);
          div_tuner_pro.getElementsByTagName('h4')[0].textContent = "TunerPro files:";
        }
      }
      else if(extension == 'adx' || extension == 'xdf'){
        div_tuner_pro.appendChild(link);
        div_tuner_pro.getElementsByTagName('h4')[0].textContent = "TunerPro files:";
      }
      else if(extension == 'hex'){
        div_hex.appendChild(link);
        div_hex.getElementsByTagName('h4')[0].textContent = "EmuBT board flash file:";
      }
      else{
        div_other.appendChild(link);
        div_other.getElementsByTagName('h4')[0].textContent = "Other:";
        
      }
      link.appendChild(a_link);            

      
    }
    
  });
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


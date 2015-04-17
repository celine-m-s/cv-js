// Challenge 1
// alert('A message');
// console.log('A log');

// Challenge 2
document.getElementById("profile-picture").getAttribute("href");
document.getElementById("profile-picture").setAttribute("href", "http://www.google.com");

// Challenge 3
//document.getElementById("profile-picture").onclick = function() {
//    this.style.opacity = 0;
    // OR this.style.visibility = "hidden";
    // OR this.style.display = "none";
//}

// Challenge 3

document.getElementById("profile-picture").onmouseover = function() {
  this.style.opacity = 0;
}

document.getElementById("profile-picture").onmouseout = function() {
  this.style.opacity = 1;
}

// Challenge 4
// Just put the link :-)

// Challenge 5
//var today = new Date();
//document.getElementById("date").innerHTML = today;

// if (today.getDay() == "5") {
//   var message = document.createTextNode("TGIF!");
//   document.getElementById("date").appendChild(message);
// }

// Final challenge
function date_heure(id)
    {
      date = new Date;
      annee = date.getFullYear();
      month = date.getMonth();
      mois = new Array('Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre');
      j = date.getDate();
      jour = date.getDay();
      jours = new Array('Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi');
      h = date.getHours();
      
        if(h<10)
          { h = "0"+h;
          }
          m = date.getMinutes();
  
        if(m<10)
          { m = "0"+m;
          }
          s = date.getSeconds();
  
        if(s<10)
          { s = "0"+s;
          }
      
      resultat =  'Nous sommes le '+jours[jour]+' '+j+' '+mois[month]+' '+annee+' il est '+h+':'+m+':'+s;
            
      document.getElementById(id).innerHTML = resultat;
      setTimeout('date_heure("'+id+'");','1000');
      return true;
    }


/*******************************
***********  DAY 2  **********
*******************************/

// Challenge 1
$(document).ready(function(){
  // Instead of innerHTML = something;
    $( "button.blue" ).html( "I'm feeling blue." ); // Use CSS selectors
    
    // Instead of onclick = function(){};
    $( "button.clickMe" ).click(function(){
      $(this).css("background-color", "blue");
    });
    
    // Instead of onmouseover
    $( "button.hoverMe" ).hover(function(){
      $(this).hide();
    });

    $("#profile-picture").hover(function(){
      this.opacity = 0;
    });

    $(".image-gallery").hover(function(){
      $(this).find(".caption").fadeIn("fast");
    }, function(){
      $(this).find(".caption").fadeOut("fast");
    });
});

$(window).load(function() { // makes sure the whole site is loaded
"use strict";
    $('#status').fadeOut(); // will first fade out the loading animation
    $('#status-message').fadeOut(); // will then fade out the loading message
    $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(350).css({'overflow':'visible'});
})

// Form callback
$('#contactForm').submit(function(){
  $.ajax({
    dataType: 'jsonp',
    url: "http://getsimpleform.com/messages/ajax?form_api_token=89dc510186f1d432035c554d85654baf",
    data: $("#contactForm").serialize(),
    error: function() {
      $('#contactForm').hide();
      $('#formErrorMessage').show();
    }
  }).done(function() {
    //callback which can be used to show a thank you message
    //and reset the form
    $('#contactForm').hide();
    $('#formSuccessMessage').show();
  });
  return false; //to stop the form from submitting
});

// Magnific popup

$('.zoom-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    closeOnContentClick: false,
    closeBtnInside: false,
    mainClass: 'mfp-with-zoom mfp-img-mobile',
    image: {
      verticalFit: true,
      titleSrc: function(item) {
        return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
      }
    },
    gallery: {
      enabled: true
    },
    zoom: {
      enabled: true,
      duration: 300, // don't foget to change the duration also in CSS
      opener: function(element) {
        return element.find('img');
      }
    }
  });
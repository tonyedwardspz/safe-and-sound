$(document).ready(function(){
    $(".burgerMenu").click(function(e){
        $(".navBar").toggle();
    });

    setTimeout(function() {
        $('#recaptcha_challenge_image').removeAttr('width height');
        $('#recaptcha_image').removeAttr('style');
    }, 1800);
});

// add active class to the sidemenu
$(function(){
    // create regexp to match current url pathname and remove trailing slash
    var url = window.location.pathname,
        urlRegExp = new RegExp(url.replace(/\/$/,'') + "$");

        // now grab every link from the sidebar
        $('.sideMenu a').each(function(){

            // and test its normalized href against the url pathname regexp
            if(urlRegExp.test(this.href.replace(/\/$/,''))){
                $(this).addClass('active');
            }
        });
});

function setYear() {
  var currentYear = (new Date()).getFullYear();
  var displayedYearContainer = document.getElementById('date');
  var displayedYear = displayedYearContainer.innerHTML;

  if (currentYear > displayedYear){
    displayedYearContainer.innerHTML = currentYear;
  }
}
setYear();

//$('.randomImage').click( function(e){
//
////    e.preventDefault();
//
//    // get the a src of the clicked image
////    var imgSRC = $(this).find('a').prop('src');
//
//    // invoke the lightboxplugin
//    $(this).lightbox_me();
//});

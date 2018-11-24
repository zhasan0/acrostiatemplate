(function ($) {
 "use strict";

//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $(document).on('click', 'a.page-scroll', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// initialize isotope
var $grid = $('.portfolio').isotope({
  itemSelector: '.portfolio-item',
  layoutMode: 'fitRows'
});

// filter items on button click
$('.portfolio-button').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
});
//button active code
$('.portfolio-button button').on('click', function(event) {
    $(this).siblings('.active').removeClass('active');
    $(this).addClass('active');
    event.preventDefault();
});
//lightbox custom js
var $gallery = $('.gallery a').simpleLightbox();

$gallery.on('show.simplelightbox', function(){
  console.log('Requested for showing');
})
.on('shown.simplelightbox', function(){
  console.log('Shown');
})
.on('close.simplelightbox', function(){
  console.log('Requested for closing');
})
.on('closed.simplelightbox', function(){
  console.log('Closed');
})
.on('change.simplelightbox', function(){
  console.log('Requested for change');
})
.on('next.simplelightbox', function(){
  console.log('Requested for next');
})
.on('prev.simplelightbox', function(){
  console.log('Requested for prev');
})
.on('nextImageLoaded.simplelightbox', function(){
  console.log('Next image loaded');
})
.on('prevImageLoaded.simplelightbox', function(){
  console.log('Prev image loaded');
})
.on('changed.simplelightbox', function(){
  console.log('Image changed');
})
.on('nextDone.simplelightbox', function(){
  console.log('Image changed to next');
})
.on('prevDone.simplelightbox', function(){
  console.log('Image changed to prev');
})
.on('error.simplelightbox', function(e){
  console.log('No image found, go to the next/prev');
  console.log(e);
});

 })(jQuery);  

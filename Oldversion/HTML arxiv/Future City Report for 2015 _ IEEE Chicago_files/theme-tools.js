jQuery(document).ready( function($) {
  'use strict';
  $.noConflict();
  /* force img-responsive to all images in page-content */
  if ($('.page-content').length > 0) {
    $('.page-content img').each( function () {
      $(this).addClass('img-responsive');
    });
  }
  /* for home page */
  if ($('.site-content').length > 0) {
    $('.site-content img').each( function () {
      $(this).addClass('img-responsive');
    });
  }

  // flyout navigation
  // $(window).resize(function () {
    if ($(window).width() >= 768) {
      $('li.dropdown').hover(function() {
        $(this).children('a.dropdown-toggle').next().delay(0).show(0);
      }, function() {
        $(this).children('a.dropdown-toggle').next().delay(800).hide(0);
      });
      $(document).on('click', function() {
        $('.dropdown ul').hide();
      });
    }
  // });
});
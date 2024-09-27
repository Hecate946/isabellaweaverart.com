$(document).ready(function() {
    let currentIndex = 0;
    const totalImages = $('.image-viewer img').length;
  
    function showImage(index) {
      $('.image-viewer img').removeClass('active');
      $('.image-viewer img').eq(index).addClass('active');
    }
  
    $('.arrow.next').click(function() {
      currentIndex = (currentIndex + 1) % totalImages;
      showImage(currentIndex);
    });
  
    $('.arrow.previous').click(function() {
      currentIndex = (currentIndex - 1 + totalImages) % totalImages;
      showImage(currentIndex);
    });
  });
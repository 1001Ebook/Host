//<![CDATA[
$(document).ready(function() {
  // change the dimension variable below to be the pixel size you want
  var dimension = 199;
  // this identifies the PopularPosts2 div element, finds each image in it, and resizes it
  $('#Blog1,#related-posts').find('img').each(function(n, image){
    var image = $(image);
    image.attr({src : image.attr('src').replace(/s\B\d{2,4}-c/,'s' + dimension)});
image.attr('width','auto');
image.attr('height','auto');
  });
});
$(document).ready(function() {
  // change the dimension variable below to be the pixel size you want
  var dimension = 105;
  // this identifies the PopularPosts2 div element, finds each image in it, and resizes it
  $('#PopularPosts2').find('img').each(function(n, image){
    var image = $(image);
    image.attr({src : image.attr('src').replace(/s\B\d{2,4}-c/,'s' + dimension)});
image.attr('width','auto');
image.attr('height','auto');
  });
});
//]]>
//Problem: User when clicking on image goes to a dead end
//Solution: Create an overlay with the large image - Lightbox



//An image to overlay


//A caption to overlay

var $overlay = $('<div id="overlay"></div>');
//Add overlay
$("body").append($overlay);


//Capture the click event on a link to an image
$("#imageGallery a").click(function(event) {
  event.preventDefault();
  var href = $(this).attr("href");
  $overlay.show();
});

  //Update overlay with the image linked in the link
  
  
  //Show the overlay.
  
  
  //Get child's alt attribute and set caption
  

//When overlay is clicked

  //Hide the overlay
  











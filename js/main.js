// ############################################################
// ######################## Applied JS ########################
// ############################################################

// ScrollTo in action
// Notice the information in the scrollTo method is greatly simplified
// All you need to supply is the scrollTo target and the duration in milliseconds (1000ms = 1s)
$('#about-down').click(function () {
  console.log("clicked")
  $.scrollTo('.about-here',600);
});
$('#game-down').click(function () {
  console.log("clicked")
  $.scrollTo('.game-here',600);
});
$('#contact-down').click(function () {
  console.log("clicked")
  $.scrollTo('.contact-here',600);
});

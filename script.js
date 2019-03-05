// Directions: move through the steps below using jQuery code.  
// 1. Import jQuery
$("#start").click(function() {
    $("#board").show();
});
//START THE GAME
// When the start button is clicked...
// 2. Show the div with id "board"
// 3. Hide the start button



//MAKE MARIO JUMP
// When the user does "mousedown" on the jump button...
// 4. Use the css() to change mario's "bottom" property to "175px"
// Hint: mousedown() works a lot like click()!

$("#jump").mousedown(function() {
    $("#mario").css("bottom","180px");
});

//MAKE THE COIN DISSAPPEAR
// When the user does "mouseup" on the jump button....
// 5. Use css() to change mario's "bottom" property to "60px"
// 6: Hide the coin image
// 7: Use text() to change the text of the element with id "count" to "1"
// Hint: mouseup() works a lot like click()!




//CHALLENGES!
// Easy: Make the coin reappear when Mario finishes jumping
// Medium: Make Mario jump when the spacebar is pressed
// Hard: Increase the counter by 1 every time mario jumps
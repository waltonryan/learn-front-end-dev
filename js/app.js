$( document ).ready(function() {
    // log "ready" in console.
    console.log( "ready!" );

    // short animation to show JQuery in action
    $( ".fa-user" ).animate({
        opacity: 0.25
      }, 2000, function() {
        // Animation complete
        console.log( "animation complete!" );
    });

});

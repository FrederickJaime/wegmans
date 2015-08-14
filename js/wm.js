/*!
 * Wegmens
 * Fredie J. Aug.13.15:Thursday v0.1
 */
 /*
*/

   

var wegmens = (function ($) {
  // Variables - Variables available throughout the scope of this object
  // -------------------------------------------------------------------

var _scrollLoc_,
    _windowHeight_,
    _windowWidth_;
    




    
  // Init - Anything you want to happen onLoad (usually event bindings)
  // -------------------------------------------------------------------
  var init = function () {
     
    





    _windowWidth_ = $( window ).width(); 
    _windowHeight_ = $( window ).height(); 
    
    
   


    


    $( window ).resize(function(){
      
       _windowWidth_ = $( window ).width(); 



    });

 


/* WINDOW SCROLL : BEGIN */

	$( window ).scroll(function(){

		_scrollLoc_ = $( window ).scrollTop();

      
           
        
      
  
	});

	


};




  // FUNCTIONS
  // ===================================================================
  // ===================================================================
  // ===================================================================




  // CLICKING
  // ===================================================================
    /*------------------------*/
  
$('#search').blur(function(){
    tmpval = $(this).val();
    if(tmpval != '') {
        $(this).addClass('empty');
        $(this).removeClass('not-empty');
    } else {
        $(this).addClass('not-empty');
        $(this).removeClass('empty');
    }
});



  // CLEANUP
  // ===================================================================

  // Return - Which variables and objects to make available publicly
  // -------------------------------------------------------------------
  return {
    init              : init
  };
})(jQuery);


$(document).ready(function () {    wegmens.init();    });

  


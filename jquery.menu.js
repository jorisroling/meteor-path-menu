(function( $ ) {

  $.fn.PieMenu = function(options) {
	var angle,
		delay_time,
		ele_angle=[],
		x_pos=[],
		y_pos=[];

    var settings = $.extend( {
      'starting_angel'   : '0',
      'angel_difference' : '90',
	  'radius':'200',
	  'menu_element' : this.children('.menu_option').children(),
	  'menu_button' : this.children('.menu_button'),
    }, options);


	angle = parseInt(settings.angel_difference)/(settings.menu_element.length-1);
	delay_time = 1/(settings.menu_element.length-1);

	$(settings.menu_button).unbind('click', clickHandler);	//remove event if exist

	var clickHandler = function() {
		if($(this).parent().hasClass('active')){
			//setPosition(0);

			$(this).parent().removeClass('active');
			$(this).parent().addClass('inactive');

		}else{
			//setPosition(1);

			$(this).parent().addClass('active');
			$(this).parent().removeClass('inactive');
		}
		$(this).toggleClass("btn-rotate");
	};

	$(settings.menu_button).bind('click', clickHandler);
  };
})( jQuery );

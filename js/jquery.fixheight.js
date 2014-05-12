$(function () {
$.fn.fixheight  = function(options){
	return this.each(function(){
		    var rid=$(this).attr("rid");
		    if(!rid){
		    	rid="";	
		    }
  	    var b = $(this).find('[_height=auto'+rid+']');
		    if (b.length <= 0) return false;
		     var c = $(this),
		        $body = $('body');
		     if(c.parent().is("body")||c.is("body")){
		        c=$(window);	
		     }else{
		     	  var c=$(this).parent();
		     	  $body =c;     	
		     }
		    		var autoDivHeight = b.outerHeight(true),
		        autoDivBorder = autoDivHeight - b.height(),
		        delBodyMargin = parseInt($body.css('marginTop')) + parseInt($body.css('marginBottom')),
		       
		        delHeight = 0;
		    $(this).find('[_height=none'+rid+']').each(function () {
		        delHeight += $(this).outerHeight(true)
		    });
		
		    function fullHeight() { 
		        var a = c.height() - delHeight - delBodyMargin - autoDivBorder;
		        if (a > autoDivHeight) {
		            b.height(a);
		        }
		    }
		    c.resize(function () {
		        fullHeight()
		    });
		    fullHeight();
 	 });
};
});
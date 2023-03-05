$('html').css({
    'overflow': 'hidden',
    'height': '100%'
  })

//calculate the time before calling the function in window.onload
var beforeload = (new Date()).getTime();

$(window).on('load',function(){
    //calculate the current time in afterload
    var afterload = (new Date()).getTime();
    // now use the beforeload and afterload to calculate the seconds
    var seconds = (afterload - beforeload) / 1000;

    if(seconds > 0.5){
        $(".loader").hide();  

        $('html').css({
            'overflow': 'auto',
            'height': 'auto'
          })
    }
    else{
        seconds = (0.5-seconds) * 1000;

        $(".loader").delay(seconds).queue(
            function(n){
            $(".loader").hide();

            $('html').css({
                'overflow': 'auto',
                'height': 'auto'
              })
            })      
    } 
});
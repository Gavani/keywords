(function($){
  
  (function(){
    $('.hamburger-icon').click(function(){
      $(this).toggleClass('open');
    });
  })();

  (function(){
    function mainMargin(){
      var headerHeight = $('.header').css('height');
      var main = $('.main');
      
      $(main).css('margin-top', headerHeight);
    }

    mainMargin();
    $(window).resize(function(){
      mainMargin();
    })
  })();

  (function(){
    var close = $('.close');
    $(close).on('click', function(){
      $(this).closest('.home__tags-item').fadeOut();
    })
  })();

})(jQuery);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigkKXtcclxuICBcclxuICAoZnVuY3Rpb24oKXtcclxuICAgICQoJy5oYW1idXJnZXItaWNvbicpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcclxuICAgIH0pO1xyXG4gIH0pKCk7XHJcblxyXG4gIChmdW5jdGlvbigpe1xyXG4gICAgZnVuY3Rpb24gbWFpbk1hcmdpbigpe1xyXG4gICAgICB2YXIgaGVhZGVySGVpZ2h0ID0gJCgnLmhlYWRlcicpLmNzcygnaGVpZ2h0Jyk7XHJcbiAgICAgIHZhciBtYWluID0gJCgnLm1haW4nKTtcclxuICAgICAgXHJcbiAgICAgICQobWFpbikuY3NzKCdtYXJnaW4tdG9wJywgaGVhZGVySGVpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICBtYWluTWFyZ2luKCk7XHJcbiAgICAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCl7XHJcbiAgICAgIG1haW5NYXJnaW4oKTtcclxuICAgIH0pXHJcbiAgfSkoKTtcclxuXHJcbiAgKGZ1bmN0aW9uKCl7XHJcbiAgICB2YXIgY2xvc2UgPSAkKCcuY2xvc2UnKTtcclxuICAgICQoY2xvc2UpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICQodGhpcykuY2xvc2VzdCgnLmhvbWVfX3RhZ3MtaXRlbScpLmZhZGVPdXQoKTtcclxuICAgIH0pXHJcbiAgfSkoKTtcclxuXHJcbn0pKGpRdWVyeSk7Il19

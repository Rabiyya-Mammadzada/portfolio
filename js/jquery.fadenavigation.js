(function($){
  $.fn.fadeNavigation = function(settings){
    var config = { pageSelector: '.page', fadeSpeed: 'fast' };
    if(settings){ $.extend(config, settings); }
    return this.each(function(){
      var pages  = $(this).find(config.pageSelector).hide();
      if(window.location.hash){
        var current = pages.filter(window.location.hash);
      }else{
        var current = pages.first();
      }
      var navTo = function(target){
        current.fadeOut(config.fadeSpeed, function(){
          current = target.fadeIn(config.fadeSpeed);
        });
      };
      current.fadeIn(config.fadeSpeed);
      $('.navTo').click(function(){
        navTo(pages.filter($(this).attr('href')));
      });
      $('.navToPrev').click(function(e){
        e.preventDefault();
        if(current.is(config.pageSelector + ':first-child')){
          var prev = pages.last();
        }else{
          var prev = current.prev(config.pageSelector);
        }
        window.location.hash = prev.attr('id');
        navTo(prev);
      });
      $('.navToNext').click(function(e){
        e.preventDefault();
        if(current.is(config.pageSelector + ':last-child')){
          var next = pages.first();
        }else{
          var next = current.next(config.pageSelector);
        }
        window.location.hash = next.attr('id');
        navTo(next);
      });
    });
  };
}(jQuery));

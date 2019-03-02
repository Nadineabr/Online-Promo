$( document ).ready(function() {
    var $card = $('.card');

    $card.on('click', 'button', function(){
        
        var toggleText = $(this).data('toggle-text');

        $(this).data('toggle-text', $(this).text())
        .text(toggleText).toggleClass('more__bg');
    
        $text = $(this).parent().find('.services__text')
        $text.toggleClass('fade');
       
        $img = $(this).parent().find('.services__img');
        $img.toggleClass('more__img');
        
    });

    $('a.smooth-scroll[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    
});
jQuery(document).ready(function($){

    /* STICKY / BACK TO TOP */
    var scrollup = $('.backtotop');
    var addtocart_btn = $('.addtocart_btn');
    $(window).scroll(function() {
        if ($(this).scrollTop() > 250) {
            scrollup.css({bottom:"25px"});
            addtocart_btn.css({bottom:"65px"});
            //$( ".main-menu-wrap" ).addClass( "stickymenu" );
        } 
        else {
            scrollup.css({bottom:"-250px"});
            addtocart_btn.css({bottom:"-300px"});
            //$( ".main-menu-wrap" ).removeClass( "stickymenu" );
        }
    });

    scrollup.click(function() {
        $('html, body').animate({scrollTop: '0px'}, 800);
        return false;
    });
    
    /* New sticky menu */
    const navbar = document.querySelector('.main-menu-wrap');
    let top = navbar.offsetTop;
    function stickynavbar() {
      if (window.scrollY >= top) {    
        navbar.classList.add('stickymenu');
      } else {
        navbar.classList.remove('stickymenu');    
      }
    }
    window.addEventListener('scroll', stickynavbar);
    
    
});
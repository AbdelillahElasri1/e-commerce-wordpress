jQuery(document).ready(function ($) {
    //search modal
    $('.header-search > button').on('click', function () {
        $('.header-search-form').fadeIn();
        $('.search-field').focus();
    });
    $('.header-search .close').on('click', function () {
        $('.header-search-form').fadeOut();
    });

    $('.search-form').on('click', function (e) {
        e.stopPropagation();
    });

    $('.header-search-form').on('click', function () {
        $('.header-search-form').fadeOut();
    });

    //mobile-menu
    $('<button class="angle-down"> </button>').insertAfter( $(".main-navigation.mobile-navigation ul .menu-item-has-children > a"));
    $('.main-navigation.mobile-navigation ul li .angle-down').on('click', function () {
        $(this).next().slideToggle();
        $(this).toggleClass('active');
    });

    var adminBar = document.querySelector('#wpadminbar');
    if (adminBar !== null) {
        var adminHeight = adminBar.offsetHeight;
        var mobHeaderTop = document.querySelector('.header-bottom-slide-inner');
        // mobHeaderTop.style.top = adminHeight + 'px';
    }

    //mobileheaderwhenadminbarpresent
    function styleOne() {
        if (document.querySelector('.site-header.style-one') !== null) {
            var StyleOne = document.querySelector('.site-header.style-one');
            StyleOne.style.top = adminHeight + 'px';
        }
    }
    
    window.addEventListener('resize', function () {
        styleOne();
    });

    window.addEventListener('load', function () {
        styleOne();
    });

    //accessibility
    $('.menu li a, .menu li').on('focus', function() {
        $(this).parents('li').addClass('focus');
    }).blur(function() {
        $(this).parents('li').removeClass('focus');
    });

    $("#menu-opener").on('click', function () {
        $("body").addClass("menu-open");
        $(".mobile-menu-wrapper .primary-menu-list").addClass("toggled");
    });
  
    $(".mobile-menu-wrapper .close-main-nav-toggle ").on('click', function () {
    $("body").removeClass("menu-open");
    $(".mobile-menu-wrapper .primary-menu-list").removeClass("toggled");
    });

        
    
    $('.marquee.aft-flash-slide').marquee({
        //duration in milliseconds of the marquee
        speed: 80000,
        //gap in pixels between the tickers
        gap: 0,
        //time in milliseconds before the marquee will start animating
        delayBeforeStart: 0,
        //'left' or 'right'
        // direction: 'right',
        //true or false - should the marquee be duplicated to show an effect of continues flow
        duplicated: true,
        pauseOnHover: true,
        startVisible: true
    });     

});

//Tabs js
function rudrSwitchTab(rudr_tab_id, rudr_tab_content, rudr_tab_class) {
	// first of all we get all tab content blocks (I think the best way to get them by class names)
	var x = document.getElementsByClassName(rudr_tab_class);
	var i;
	for (i = 0; i < x.length; i++) {
		x[i].style.display = 'none'; // hide all tab content
	}
	document.getElementById(rudr_tab_content).style.display = 'block'; // display the content of the tab we need
 
	// now we get all tab menu items by class names (use the next code only if you need to highlight current tab)
	x = document.getElementsByClassName("tabmenu");
    
	for (i = 0; i < x.length; i++) {
		x[i].className = 'tabmenu'; 
	}
	document.getElementById(rudr_tab_id).className = 'tabmenu active';
}



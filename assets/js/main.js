/*
	Photon by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$headerNav = $('#header_nav'),
		$header = $('#header');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1141px',  '1680px' ],
			large:    [ '981px',   '1140px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ '321px',   '480px'  ],
			xxsmall:  [ null,      '320px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Scrolly.
		$('.scrolly').scrolly();

	// Menu.
		$('#menu')
			.append('<a href="#menu" class="close"><i class="fa-solid fa-xmark"></i></a>')
			.appendTo($body)
			.panel({
				delay: 500,
				hideOnClick: true,
				hideOnSwipe: true,
				resetScroll: true,
				resetForms: true,
				side: 'right',
				target: $body,
				visibleClass: 'is-menu-visible'
			});

	// Nav 스크롤 이벤트 : Header main 구간을 지나면 Nav css 스타일 바뀜
	$(window).scroll(function(){

        var 
        mn = $("#header_nav");
        
        h = $(document).scrollTop();
        offset = $("#one").offset().top;
		offset2 = $("#header").offset().top;
        
        
        
        if(h + 1 > offset) { //특정 div(#one 섹션)가 있는 곳을 지날 때
           mn.removeClass("alt"); 
		   mn.css({
			transition: "0.4s ease"
		  });
           
        } else if(h > offset2) {  //스크롤이 특정 구간(#Header)에 위치할 때
            mn.addClass("alt");
        } else {  // 그 외
            mn.addClass("alt");
        }


    });
	  

})(jQuery);
$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $(".navbar").addClass("sticky");
        } else {
            $(".navbar").removeClass("sticky");
        }
    });
    // Toggle Menu/Navbar script
    $(".menu-btn").click(function () {
        $(".navbar .menu").toggleClass("active");
        $(".menu-btn i").toggleClass("active");
    });

    //typing animation script
    var typed = new Typed(".typing", {
        strings: ["Java-Developer", "Web-Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })

    var typed = new Typed(".typing-2", {
        strings: ["Java-Developer", "Web-Developer"         ],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })

    
    // owl carousel script
    $(".carousel").owlCarousel({
        margin: 20,
        loop: true,
        aotuplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});
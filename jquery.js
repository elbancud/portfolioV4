
$(document).ready(function(){
    $(document).scroll(function () { 
        var scrollY = $(window).scrollTop();
        
        console.log(scrollY);

        if (scrollY >= 500 && scrollY <= 1200) {
            $('.order2').addClass(" animate__animated animate__fadeInUp animate__delay-2s");
            $('.order3').addClass(" animate__animated animate__fadeInUp animate__delay-1s");
            $('.order4').addClass(" animate__animated animate__fadeInUp ");
        }   
        // } else {
        //     $('.order2').removeClass(" animate__animated animate__fadeInUp animate__delay-2s");
        //     $('.order3').removeClass(" animate__animated animate__fadeInUp animate__delay-2s");
        //     $('.order4').removeClass(" animate__animated animate__fadeInUp ");

        // }
    }) 
});

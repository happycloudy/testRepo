var state = 0;
var heightOfcardfield = $('.clients_wrapper').height();


$(document).ready(function(){
    
    $('.box3').mask('+7 (999) 999-99-99');
    $('.box4').mask('+7 (999) 999-99-99');


    $('.plans').on('click',function(){
        let state = 0;
        if (state = 1) {
            state -= 1;
            $('.plans').removeClass('plans_active')
            $(this).toggleClass('plans_active')
        }else{
            $(this).toggleClass('plans_active')
            state += 1;
        };
    });
    
    $('.clients_wrapper').on('mouseenter',function randCard(number){
        
        if (state < 1){
            
            var card = 0;
            state += 1;
            setInterval(function(){
                switch (card) {
                        case 0:
                            $('.card0').toggleClass('card_active');
                            card += 1;
                            break;
                        case 1:
                            $('.card1').toggleClass('card_active');
                            card += 1;
                            break;
                        case 2:
                            $('.card2').toggleClass('card_active');
                            card += 1;
                            break;
                        case 3:
                            $('.card3').toggleClass('card_active');
                            card += 1;
                            break;
                        };
            },500);
        };
    });

    
    $('.Home').on('click',function(){
        $('.requestblock').jump();
    });

    $('.Service').on('click',function(){
        $('.our_services').jump();
    });
    
    $('.About_us').on('click',function(){
        $('.about_us').jump();
    });

    $('.Pricing_Table').on('click',function(){
        $('.our_services1').jump();
    });

    $('.How_it_work').on('click',function(){
        $('.our_services2').jump();
    });

    $('.Happy_Clients').on('click',function(){
        $('.clients_wrapper').jump();
    });
    $('.Contact_Us').on('click',function(){
        $('footer').jump();
    });


    if ($(window).width() < 500) {
        $('.clients_wrapper').css('height', '+=300');
    };

    if ($(window).width() > 500) {
        $('.clients_wrapper').css('height', '+=100');
    };

    $('.our_services').on('mouseenter', function(){
        $('.row11').css('transform', 'translate(0)');
        $('.row12').css('transform', 'translate(0)');
        $('.row13').css('transform', 'translate(0)');
    });

    $('.row13').on('mouseenter', function(){
        $('.about_us').css('transform', 'translate(0)');
    });
});




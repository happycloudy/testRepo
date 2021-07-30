$(document).ready(function(){
    $('.dropdown-trigger').dropdown();
    $('.discovermore').on('click', function(){
        $('.block2').jump();
    });
    
    $('.block2').on('mouseenter' , function(){
        $('.block21').css('transform', 'translate(0)');
        $('.showprojects').css('transform', 'translate(0)');
    });
    
    $('.showprojects_btn').on('mouseenter' , function(){
        $('.block4').css('transform', 'translate(0)');
    });

    setTimeout(() => {
        $('.block1').css('transform', 'translate(0)');
    }, 100);
    
});
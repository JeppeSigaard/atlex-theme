$(function(){

    $('.site-header-hamburger').click(function(e){
        e.preventDefault();
        $('body').toggleClass('menu-open');
    });

/*
    $('.site-header-navs').on('click',function(e){
        console.log(e);
        $('body').removeClass('menu-open');
    });
*/
});

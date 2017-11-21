$('document').ready(function(){
    
    //Fade In Effect
    $('body').css('display','none');
    $('body').fadeIn(1500);
    
    //Navbar Links
    $('.changePage').click(function(){
       $('body').fadeOut(1000);
    });
    $('#hrefLinhong').click(function(){
        setTimeout(function(){
            window.location.href = "linhong.html";
        },1000);
    });
    $('#hrefPortfolio').click(function(){
        setTimeout(function(){
            window.location.href = "portfolio.html";
        },1000);
    });
    $('#hrefAbout').click(function(){
        setTimeout(function(){
            window.location.href = "about.html";
        },1000);
    });
})
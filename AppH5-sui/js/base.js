$(function(){
    $(document).on('click touchstart',function(e){
        if(!$(e.target).hasClass('header-menu-icon')){
            $('.footer-menu').removeClass('active');
        }
    });
    $('.header-menu-btn').on('click',function(event){
        event.stopPropagation();
        if($('.footer-menu').hasClass('active')){
            $('.footer-menu').hide().removeClass('active');
        }else {
            $('.footer-menu').addClass('active').show();
        }
    });
    $(document).on('click', '.favourite-btn',function(e){
        e.preventDefault();
        if(!$(this).hasClass('active')){
            $(this).addClass('active');
            $.toast("收藏成功");
        }else{
            $(this).removeClass('active');
            $.toast("已取消收藏");
        }
    });
    $(document).on('click','.popup-overlay',function(){
        $.closeModal('.popup');
    });
});
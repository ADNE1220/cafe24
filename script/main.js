$(function(){

    // PC
    // 햄버거 메뉴
    $(".btn_back").click(function(){
        $(this).toggleClass("act");
        $(".main_menu,.heder_menu_bg").toggleClass("none")
    })//

    //모바일
    $(".m_btn_back").click(function(){
        // $(".header_inner").hide();
        // $(this).toggleClass("act");
        $(".m_main_menu").toggleClass("left")
    })//click
    $(".m_btn_close").click(function(){
        $(".m_main_menu").toggleClass("left");
    })//
    
    // var body= $("body")


    //메인비주얼
    $("#fullpage").fullpage({
        responsiveWidth: 361,
        navigation: true,
        slidesNavigation: true,
        slidesNavPosition: 'bottom',
        navigationTooltips:["MAIN","LOOK BOOK","ABOUT","NEW SHOP","GALLERY","FOOTER"],

        //어바웃
        afterLoad : function(index){
            var ind = index.index;
            console.log(ind)
            if(ind == 1){
                $(".about_box").addClass("up");
            } else if(ind == 3){
                $(".about_box").addClass("up");
            }else{
                $(".about_box").removeClass("up");                
            }
        }//어바웃 end

    })//fullpage end


        //어바웃-------------------------------------------
        // $(".about_box").each(function(i){
        //     setTimeout(function(){
        //         $(".about_box").eq(i).addClass("up")
        //     }, i*500)
        // })//

        //look_book_right-------------------------------------
        $(".lobo_list").slick({
            
            arrows: false,
            slidesToShow: 2,
            slidesToScroll: 1,
            draggable: true,
            swipeToSlide: true,
            dots: true,
            infinite:false,
            responsive:[
                {
                    breakpoint: 361,
                    settings:{
                        // slidesToScroll : 4,
                        slidesToShow: 2
                }
            }]

        })//

        //new shop-----------------------------------------
        $(".newshop_list").slick({
            autoplay:true,
            autoplaySpeed:2000,
            arrows: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            pauseOnHover:false,
            draggable: true,
            swipeToSlide: true,
            // responsive:[
            //     {
            //         breakpoint: 361,
            //         settings:{
            //             autoplay: false,
            //             arrows: false,
            //             // slidesToScroll : 4,
            //             slidesToShow: 2
            //     }
            // }]
        })//
        // var n = 0;//
        // setInterval(left_move, 2500)
        // function left_move(){
        //     $(".newshop_list").animate({left: "-=338px"},500, function(){
        //         $(".newshop_list").append($(".newshop_list li").eq(0))
        //         $(".newshop_list").css({left: "+=338px"})
        //     })//animate
        // }//left

        $(".m_ns_more").click(function(){
            $(".m_ns_more").hide();
            $(".m_newshop_inner").toggleClass("more");
            var newshop = $(".m_newshop_list li:nth-child(9),.m_newshop_list li:nth-child(10)");
            (newshop).show();
        })
        /*  ,function(){
            var newshop = $(".m_newshop_list li:nth-child(9),.m_newshop_list li:nth-child(10)");
            if($(newshop).toggleClass("more")){
                $(newshop).addClass("more");
            }else{
                $(newshop).removeClass("more");
            }
            // $(newshop).??????????("more");
        }) *///more click


    //하이퍼링크 이벤트 off-----------------------------------
    $("a").click(function(e){
        e.preventDefault();
    })//


})//js
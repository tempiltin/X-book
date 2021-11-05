$(document).ready(function () {
// sm menu
// $('.show_hide-menu').on('click' , function  () {

//     if($('.menu1').css('left') == '-300px'){
       

//         $('.menu1').animate({
//         left: '0px',
//         } , 1000)
//     }else{
       

//         $('.menu1').animate({
//         left: '-300px',
//         } , 1000)

//     }
    

//  })

    $('#search').on('click' , function () {
        $('.search').animate({
        top: '-35px'

        } , 2000)
        $('#menu_top').animate({
            opacity: 0
        },2000)  //.css('display' , 'none')
    })
    $('#close').on('click' , function () {
        var $links =  $('.header_top #menu_top .logo_fed')
        $links.removeClass('active')
        $('#menu_top').animate({
            opacity: 1
        },2000)     // .css('display' , 'block')
       $('.search').animate({
         top: '-200px'
  
           } , 2000)
    })
});
$(document).ready(function () {
    var $show = $('section .show')
    var $hide = $('section .hide')
    var $section = $('.section')
    
   

    $show.on('click' , function(){
        $show.css('display' , 'none');
        $hide.css('display' , 'block');

        $section.slideDown(1000)

    })
    $hide.on('click' , function () {
        $hide.css('display' , 'none');
        $show.css('display' , 'block');

        $section.slideUp(1000)
        


    })
   


    var $fast = $('section .fast')
    var $fastback = $('section .fastback')
    var $section_right = $('.section_right')
    

    $fast.on('click' , function(){
        $fast.css('display' , 'none');
        $fastback.css('display' , 'block');

        $section_right.slideDown(1000)

    })
    $fastback.on('click' , function () {
        $fastback.css('display' , 'none');
        $fast.css('display' , 'block');

        $section_right.slideUp(1000)
        


    })
});
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items : 1 ,
        margin : 12 ,
        loop : true,
        autoplay : true,
        autoplayTimeout : 5000,
        Responsive : {
            0 : {
                items :2
            },
            768 : {
                items :3
            }
        }
    });
      
    


}); 

$(document).ready(function() {
    $("#backgrounDark").click(function() {
      var secti = $("section").css("background-color", "black");
      
      secti.fadeIn(1500);
        $('section a').css("color", "white");
    
    });
    $("#backgrounWhite").click(function() {
       
        var secti = $("section").css("background-color", "white");
  
        secti.fadeIn(1500);
        $('section a').css("color", "black");
      
      });
      $("#backgrounOfical").click(function() {
        var secti = $("section").css("background-color", "#E9F0F8");
  
        secti.fadeIn(1500);
        $('section a').css("color", "black");
      
});

//scrol hodisasi
$(window).scroll(function () {
        
        if($(this).scrollTop() > 100){
  
            $('#top').fadeIn(600);
  
        }else{
  
            $('#top').fadeOut(600);
  
        }
});
      $('#top').click(function(){
  
         $('html , body').animate({
             scrollTop:0
         } , 900)
  
});


      //menu activ hodisasi
      var $links =  $('.header_top #menu_top .logo_fed')
     
      $links.on('click', function () {

        //   e.preventDefault()

          $links.removeClass('active')
          var id = $(this).addClass('active')

          var href = $(id).offset()
          

        //   $('html , body').animate({
        //       scrollTop: href
        //   }, 200)
})
      
   
      
   





  });

  // login

 $(document).ready(function () {
    var $login = $('#login')
    var $password = $('#password')

     $('.login-but').on('click' , function () {
        

         $('.container_login').css('display' , 'block')

         $('.opasity').css('display' , 'block')
         $('#new-login').on('click' , function () {
            $('.container_login').css('display' , 'none')
            $('.opasity').css('display' , 'none')
            $login.val('')
            $password.val('')
            
         })
       
         
         })

    // xbook 
 
    








});


$(document).ready(function () {
    // $(' .fa-heart-o').on('click' , function () {
    //     $('.fa-heart-o').css('display' , 'none')
    //     $('.fa-heart').css('display' , 'block')

    // })
    // $('.fa-heart').on('click' , function () {
    //     $('.fa-heart-o').css('display' , 'block')
    //     $('.fa-heart').css('display' , 'none')

    // })
 
    clearInterval( Xook() , 3000)
    function Xook() {
        $('.Xbook').animate({
            left : '45%',
    
        },3000).animate({
            left : '35%',
    
        },3000)
      
        
        setInterval( Xook() , 3000)
    };
    
    $('.bot').click( function () {
        console.log($('.messag'));
        $('.messag').css('display' , 'block')
        
    })
 

   

});
$(window).on('load' , function () {
    $('.loader').fadeOut(2000)
    
});

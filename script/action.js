$(document).ready(function() {
    let rollingNumber = 0;

    $('#section1 li').mouseenter(function() {
        clearInterval(autoRolling)
        rollingNumber = $(this).index()


        $(this).addClass('on').siblings().removeClass('on');
        let imgSrc = $(this).find('figure img').attr('src')   
        let h3Text = $(this).find('h3').text();
        let cateText = $(this).find('.cate').text();
        
        $('.big_img img').attr('src', imgSrc);
        $('.big_img img').hide()
        $('.big_img img').fadeIn()
            


        $('.big_img').removeClass('on')
        
        setTimeout(function(){


            $('.big_img').addClass('on')
            $('.big_img .text strong').text(h3Text)
            $('.big_img .text .cate').text(cateText)

        },500)

    });

    $('#section1 li').mouseleave(function() {
        autoRolling = setInterval(imgRolling, 2000)
    })



   
    let circleW = $('.mouse_circle').width();
    let circleH = $('.mouse_circle').height();
    let y 

    $(window).mousemove(function(e){
        let x = e.clientX;
        y = e.clientY;
        $('.mouse_circle').css({left: x-circleW/2, top: y-circleH/2});
        console.log('mouse')
    })

    $(window).scroll(function(){

      
        $('.mouse_circle').css({top:y-circleH/2})


    })

    // let imgRolling = setInterval(함수, 시간)

    // clearInterval(imgRolling)

    let autoRolling = setInterval(imgRolling, 3000)

    function imgRolling(){
        rollingNumber++
        if(rollingNumber >= 4){
            rollingNumber = 0
        }

        $('.small_img li').eq(rollingNumber).addClass('on').siblings().removeClass('on');

        let imgSrc = $('.small_img li').eq(rollingNumber).find('figure img').attr('src');
        let h3Text = $('.small_img li').eq(rollingNumber).find('h3').text();
        let cateText = $('.small_img li').eq(rollingNumber).find('.cate').text();
        

        $('.big_img img').attr('src', imgSrc)
        $('.big_img img').hide()
        $('.big_img img').fadeIn()

          
        $('.big_img').removeClass('on')
        
        setTimeout(function(){

            $('.big_img').addClass('on')
            $('.big_img .text strong').text(h3Text)
            $('.big_img .text .cate').text(cateText)
            
        },500)
    }

    $('#section3 .content .name').each(function(){

        let yas = $(this).text();
        let nameComp = name.substr(0,1) + '*' + name.substr(2,1) 

        $(this).text(nameComp)


    })
  
    


/* 
    $('.').mouseenter(function(){
        $('.mouse_circle').css({transform:'scale(3)', background:'blue', border:'1px solid'})
        console.log('k')
    })
    
    $('.').mouseleave(function(){
        $('.mouse_circle').css({transform:'', background:'', border:''})
    })


 */
})
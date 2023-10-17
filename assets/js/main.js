    
        let dishCards = document.getElementsByClassName('dishes-cards')[0];
        let cardWidth = document.querySelector('.card').offsetWidth;
        // let scrollDistance = dishCards.clientWidth + 90;
        let scrollDistance=cardWidth*1.5;

        function next() {
        dishCards.scrollBy({ 
            left: scrollDistance, 
            behavior: 'smooth'
        });
        }

        function previous() {
        dishCards.scrollBy({ 
            left: -scrollDistance,
            behavior: 'smooth'
        });
        }


        let lastScrollTop = 0;
        let navbar=document.getElementsByClassName("navbar")[0];
        window.addEventListener("scroll",function(){
            let scrollTop= window.scrollY || this.document.documentElement.scrollTop;
            if (scrollTop>lastScrollTop){
                navHide();
            }
            else{   
                navbar.style.top="0";
                setTimeout(navHide,8000);
            }
            lastScrollTop=scrollTop;

            function navHide(){
                navbar.style.top="-80px";
            }
        })
        
        // $(window).scrollBy(function() {
        //     if ($(window).scrollTop() >= 50) {
        //         $('.navbar').css('background', 'red');
        //     } else {
        //         $('.navbar').css('background', 'transparent');
        //     }
        //     });
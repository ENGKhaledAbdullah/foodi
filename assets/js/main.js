    
        let dishCards = document.getElementsByClassName('dishes-cards')[0];
        let cardWidth = document.querySelector('.card').offsetWidth;
        let scrollDistance = dishCards.clientWidth + 90;

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

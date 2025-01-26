
  document.addEventListener('DOMContentLoaded', () => {
    const initializeSlider = (wrapper) => {
        const grid = wrapper.querySelector('.february-upcming-carousel-track');
        const slides = grid.querySelectorAll('.carousel-image-container');
        const prevBtn = wrapper.querySelector('.left-arrow');
        const nextBtn = wrapper.querySelector('.right-arrow');
        let currentIndex = 0;
        
        // Responsive slidesPerView
        const getSlidesPerView = () => {
            if (window.innerWidth <= 576) return 1;
            if (window.innerWidth <= 992) return 2;
            if (window.innerWidth <= 1200) return 3;
            return 4;
        };
  
        const updateSliderPosition = () => {
            const slidesPerView = getSlidesPerView();
            const totalSlides = Math.max(0, slides.length - slidesPerView);
            
            // Calculate slide width and gap
            const slideWidth = 100 / slidesPerView;
            const offset = currentIndex * slideWidth;
            
            grid.style.transform = `translateX(-${offset}%)`;
            
            //  button states
            prevBtn.style.opacity = currentIndex <= 0 ? '0.5' : '1';
            prevBtn.style.cursor = currentIndex <= 0 ? 'default' : 'pointer';
            nextBtn.style.opacity = currentIndex >= totalSlides ? '0.5' : '1';
            nextBtn.style.cursor = currentIndex >= totalSlides ? 'default' : 'pointer';
        };
  
        const slideNext = () => {
            const slidesPerView = getSlidesPerView();
            const totalSlides = Math.max(0, slides.length - slidesPerView);
            
            if (currentIndex < totalSlides) {
                currentIndex++;
                updateSliderPosition();
            }
        };
  
        const slidePrev = () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateSliderPosition();
            }
        };
  
        // Event listeners
        prevBtn.addEventListener('click', slidePrev);
        nextBtn.addEventListener('click', slideNext);
        
        // Handle window resize
        window.addEventListener('resize', () => {
            // Reset position on resize
            currentIndex = 0;
            updateSliderPosition();
        });
        
        // Initial position
        updateSliderPosition();
    };
  
    // Initialize all sliders
    document.querySelectorAll('.february-upcming-carousel').forEach(initializeSlider);
  });

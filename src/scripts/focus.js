document.addEventListener('DOMContentLoaded', () => {
    const expandables = document.querySelectorAll('.expandable-right');
    
    expandables.forEach(element => {
      // Create a temporary element to measure the content width
      const tempElement = element.cloneNode(true);
      tempElement.style.position = 'absolute';
      tempElement.style.visibility = 'hidden';
      tempElement.style.width = 'auto';
      document.body.appendChild(tempElement);
      
      // Get the width of the content
      const contentWidth = tempElement.offsetWidth;
      
      // Set the custom property for this specific element
      element.style.setProperty('--dynamic-width', contentWidth + 'px');
      
      // Clean up the temporary element
      document.body.removeChild(tempElement);
    });
  });

  document.addEventListener('DOMContentLoaded', () => {
    const pageOneBtn = document.querySelector('#pageOneBtn');
    const pageTwoBtn = document.querySelector('#pageTwoBtn');
    const carousel = document.querySelector('#carousel');
    
    // Button click handlers
    pageOneBtn.addEventListener('click', () => {
      slideTo(0);
    });
    
    pageTwoBtn.addEventListener('click', () => {
      slideTo(1);
    });
    
    // Slide to specific page index (0 or 1)
    function slideTo(pageIndex) {
      carousel.style.transform = `translateX(-${pageIndex * 100}vw)`;
      
      // Update active buttons
      if (pageIndex === 0){
        pageOneBtn.classList.remove('inactive-page');
        pageOneBtn.classList.add('active-page');
        pageTwoBtn.classList.remove('active-page');
        pageTwoBtn.classList.add('inactive-page');
      } else if (pageIndex === 1) {
        pageTwoBtn.classList.remove('inactive-page');
        pageTwoBtn.classList.add('active-page');
        pageOneBtn.classList.remove('active-page');
        pageOneBtn.classList.add('inactive-page');
      }
    }
  });
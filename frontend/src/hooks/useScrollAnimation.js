import { useEffect } from 'react';

const useScrollAnimation = (className = '.animate-on-scroll') => {
  useEffect(() => {
    const elements = document.querySelectorAll(className);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.2, // triggers when 20% of element visible
    });

    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, [className]);
};

export default useScrollAnimation;

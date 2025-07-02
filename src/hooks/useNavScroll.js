import { useEffect } from 'react';

const useNavScroll = () => {
  useEffect(() => {
    const nav = document.getElementById('main-nav');

    const handleScroll = () => {
      if (!nav) return;

      if (window.scrollY > 10) {
        nav.classList.add('scrolled-nav');
      } else {
        nav.classList.remove('scrolled-nav');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
};

export default useNavScroll;

// hooks/useScrollBackgroundColor.ts
import { useEffect } from 'react';

const useScrollBackgroundColor = () => {
  useEffect(() => {
    const handleScroll = () => {
      const panels = document.querySelectorAll<HTMLElement>('[data-color]');
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const middleOfWindow = scrollTop + windowHeight / 2;

      panels.forEach((panel) => {
        // Ensure that the panel is an HTMLElement
        const panelTop = panel.offsetTop;
        const panelHeight = panel.offsetHeight;

        if (
          panelTop <= middleOfWindow &&
          panelTop + panelHeight > middleOfWindow
        ) {
          // Use a type assertion to ensure the data-color attribute is of type string
          const color = (panel.dataset.color || '#FFFFFF') as string;
          document.body.style.backgroundColor = color;
        }
      });
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger the scroll handler on mount

    return () => {
      // Clean up the event listener on unmount
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
};

export default useScrollBackgroundColor;

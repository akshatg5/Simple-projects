import { useEffect, useState } from "react";

// another hook to determine the current height and width of the window
export function useDimensions() {
    const [windowSize, setWindowSize] = useState({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  
    useEffect(() => {
      function handelResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      window.addEventListener("resize", handelResize);
      return () => window.removeEventListener("resize", handelResize);
    }, []);
  
    return windowSize;
  }
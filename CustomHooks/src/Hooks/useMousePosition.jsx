import { useEffect, useState } from "react";
// a hook to determine the cursor position
export function useMousePosition() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
  
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
  
    useEffect(() => {
      window.addEventListener("mousemove", handleMouseMove);
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }, []);
    return position;
  }
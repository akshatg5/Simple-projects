import { useEffect, useState } from "react";
// checks if the user is online or not
export function useIsOnline() {
    const [isOnline, setIsOnline] = useState(window.navigator.onLine);
  
    useEffect(() => {
      window.addEventListener("online", () => {
        setIsOnline(true);
      });
  
      window.addEventListener("offline", () => {
        setIsOnline(false);
      });
    }, []);
    return isOnline;
  }
  
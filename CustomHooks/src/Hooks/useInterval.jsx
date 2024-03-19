import { useEffect,useRef } from "react";

// making a function that takes a callback and returns it after an interval
export function useInterval(callback,delay) {
    const savedCallback = useRef()

    useEffect(() => {
        savedCallback.current = callback;
    },[callback])

    useEffect(() => {
        function tick() {
            savedCallback.current()
        }

        if (delay != null) {
            const intervalId = setInterval(tick,delay)
            return () => clearInterval(intervalId)
        }
    },[delay])
}
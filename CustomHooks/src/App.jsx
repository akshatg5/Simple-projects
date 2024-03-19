import { useEffect, useState } from "react";
import axios from "axios";
import { useDimensions } from "./Hooks/useDimensions";
import { useMousePosition } from "./Hooks/useMousePosition";
import { useIsOnline } from "./Hooks/useIsOnline";
import { useTodos } from "./Hooks/useTodos";
import { useInterval } from "./Hooks/useInterval";

function App() {
  const isOnline = useIsOnline();
  const mousePointer = useMousePosition();
  const {width,height} = useDimensions()
  const { todos, loading } = useTodos(5);

  const [count,setCount] = useState(0)

  // have to define the callback function for useInterval
  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  useInterval(incrementCount,4000);
  return (
    <>
    <h1>Custom Hooks</h1>
      {loading ? (
        <div>Loading...</div>
      ) : (
        todos.map((todo, index) => <Todo todo={todo} key={index} />)
      )}
      <div>{isOnline ? <p>Online</p> : <p>Offline</p>}</div>
      <div>
      <h2>Changes as the mouse position changes:</h2>
        The mouse position is x: {mousePointer.x} , y : {mousePointer.y}
      </div>
      <div>
      <h2>Change window height and width to see this work:</h2>
        <p>Window Width : {width}</p>
        <p>Window Height : {height}</p>
      </div>
      <div style={{display:"flex"}}>
        <h2 style={{padding:2,margin:2}}>Counter</h2>
        <button>{count}</button>
      </div>
    </>
  );
}

function Todo({ todo }) {
  return (
    <div>
      {todo.title}
      <br />
      {todo.description}
    </div>
  );
}

export default App;

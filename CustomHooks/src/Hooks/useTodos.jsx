import { useEffect, useState } from "react";
import axios from "axios";
// data fetching hook used to fetch todos from a BE server
export function useTodos(n) {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      setLoading(true);
      const intervalValue = setInterval(() => {
        axios.get("https://sum-server.100xdevs.com/todos").then((res) => {
          setTodos(res.data.todos);
          setLoading(false);
        });
      }, n * 1000);
      axios.get("https://sum-server.100xdevs.com/todos").then((res) => {
        setTodos(res.data.todos);
        setLoading(false);
      });
  
      return () => {
        clearInterval(intervalValue);
      };
    }, [n]); // should have n as a dependency because the data fetching depends on it
  
    return { todos, loading };
  }
  
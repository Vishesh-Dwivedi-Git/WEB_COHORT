function useCounter(){
    const [count,setCount]=useState(0);
  
    function increaseCount(){
      setCount(count=>count+1);
    }
    return ({
      count:count,
      increaseCount:increaseCount
    })
  }
  
  function Counter() {
  
    const {count,increaseCount}=useCounter();
  
    return(
      <button onClick={increaseCount}>
        Increase {count}
      </button>
    )
    
  }
  
  function App(){
    return (
      <div>
      <Counter/>
      <Counter/>
      <Counter/>
      </div>
      
    )
  }
  export default App
  
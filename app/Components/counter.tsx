import{ useState } from "react"

const Counter = () => {
    const[count,setcount] = useState(0);

const incrementCounter = () => {
    setcount (count + 1);
}
const decrementcounter = () => {
    setcount ( count - 1)
}
const resetcounter = () => {
    setcount (0);
}


    return(
        <div>
            <h1 className="componentHeading">Counter</h1>
            <p className={count>10?"greater-then-10":"smaller-than-10"}>Count: {count}</p>
    
            <button className="FancyButton" onClick={() => incrementCounter()}>Increment</button>
            <button className="FancyButton" onClick={()=> decrementcounter()}>Decrement</button>
            <button className="FancyButton"onClick={()=> resetcounter()}>reset</button>
        </div>
    )
}
export default Counter;
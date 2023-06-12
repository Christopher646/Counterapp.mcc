import{ useState } from "react"

const Counter = () => {
    const[count,setcount] = useState(0);

const incrementCounter = () => {
    setcount (count + 1);
}

    return(
        <div>
            <h1 className="componentHeading">Counter</h1>
            <p className="counterLable">Count: {count}</p>
            <button className="FancyButton" onClick={() => incrementCounter()}>Increment</button>
            <button className="FancyButton"> Decrement</button>
            <button className="FancyButton">reset</button>
        </div>
ss
    )
}
export default Counter;
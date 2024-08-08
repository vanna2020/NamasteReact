import { useState } from "react";

const User = ({name, age}) =>{

    const[count,setCount] = useState(0);
    const[count2,setCount2] = useState(1);

    const handleCount = () => {
        setCount(count+1)
    }


    return(
        <div> 
            <h2>Count : {count}</h2>
            <button onClick={()=>{setCount(count+1)}}>Increment</button>
            <h2>Count2 : {count2}</h2>
            <h2>Name : {name}</h2>
            <h3>Age : {age}</h3>
        </div>
    )
}
export default User;
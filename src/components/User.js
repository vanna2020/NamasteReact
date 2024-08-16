import { useState,useEffect } from "react";

const User = ({name, age}) =>{

    const[count, setCount] = useState(0);
    const[count2, setCount2] = useState(1);
    const[user, setUser] = useState(null);

    console.log(user)

    useEffect(()=>{
        fetchUser
    },[])


    const fetchUser = async() => {
        console.log("!")
        const data = await fetch("https://api.github.com/users/vanna");
        const json = await data.json()
        console.log("json",json)
        setUser(json)
    }


  

    return(
        <div> 
            <h2>Count : {count}</h2>
            <h2>Count2 : {count2}</h2>
            {/* <h2>Name : {data1.name}</h2> */}
            <h3>Age : {age}</h3>
        </div>
    )
}
export default User;
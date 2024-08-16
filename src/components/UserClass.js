import React from "react"

class UserClass extends React.Component{
        constructor(props){
            super(props)
            console.log("first")
                this.state = {
                    userData:{}
        }
    }

    async componentDidMount() {
       const data = await fetch("https://api.github.com/users/vanna2020")
       const json = await data.json()
       console.log(json)
       this.setState({
        userData: json
       })
        }

    render(){
        console.log("third")
        const {count, count2} = this.state

        return(
            <div>
                <h2>Count: {count}</h2>
                <button onClick={()=>{this.setState({
                    count: this.state.count + 1
                })}}>Increment</button>
                <h2>Count2: {count2}</h2>
                <h2>Name: {this.state.userData.name}</h2>
                <h3>Age: {this.props.age}</h3>
            </div>
        )
    }
}

export default UserClass;
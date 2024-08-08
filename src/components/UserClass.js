import React from "react"

class UserClass extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            count: 0,
            count2: 1
        }
    }

    render(){

        const {count, count2} = this.state

        return(
            <div>
                <h2>Count: {count}</h2>
                <button onClick={()=>{this.setState({
                    count: this.state.count + 1
                })}}>Increment</button>
                <h2>Count2: {count2}</h2>
                <h2>Name: {this.props.name}</h2>
                <h3>Age: {this.props.age}</h3>
            </div>
        )
    }
}

export default UserClass;
import React from "react"
import TodosList from "./TodosList"

class TodoContainer extends React.Component{

    state={
        todo:[
            {
                id:1,
                title: "Requirement Data Collection",
                completed: "true"
            },
            {
                id:2,
                title: "Setup Development Activity",
                completed: "false"
            }
        ]
    }
    render(){
        return(
                     
            <div>
                <TodosList todo={this.state.todo}/>
            </div>
           
        )
    }
}

export default TodoContainer
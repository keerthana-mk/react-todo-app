import React from "react"

class TodosItem extends React.Component{

    render(){
        return(
            <li>{this.props.todo.title}</li>
        )
    }
}
export default TodosItem
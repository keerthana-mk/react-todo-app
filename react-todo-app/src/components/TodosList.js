import React from "react"
import TodosItem from "./TodosItem"

class TodosList extends React.Component{
    render(){
        return(
            <ul>
                {this.props.todo.map(todo=>(
                    <TodosItem key={todo.id} todo={todo}/>
                ))}
            </ul>
        )
    }
}
export default TodosList
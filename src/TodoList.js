import React, {Component} from "react";
import Todo from "./Todo";
import {connect} from "react-redux";
import {addTodo, removeTodo, getTodos} from "./actionCreator";
import TodoForm from "./TodoForm";
import {Route} from "react-router-dom";

class TodoList extends Component {
	constructor(props){
		super(props);
		this.addTodo= this.addTodo.bind(this);
		this.removeTodo= this.removeTodo.bind(this);
	}
	
	componentDidMount() {
		this.props.getTodos();
	  }
	removeTodo(id){
		this.props.removeTodo(id)
	}
	
	addTodo(task){
		this.props.addTodo(task)
	}
	
	
	render(){
		const todos= this.props.todos.map(t=><Todo key={t._id} task={t.name} removeTodo={this.removeTodo.bind(this, t._id)}/>)
		return(
			<div>
				<Route
				  path="/todos/new"
				  component={props => (
					<TodoForm {...props} addTodo={this.addTodo} />
				  )}
				/>
				<Route exact path="/todos" component={() => <div>{todos}</div>} />
			</div>
		)
	}
}

function mapStateToProps(reduxState){
	return {
		todos: reduxState.todos
	}
}

export default connect(mapStateToProps, {removeTodo, addTodo, getTodos})(TodoList);
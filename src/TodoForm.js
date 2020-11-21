import React, {Component} from "react";



class TodoForm extends Component {
	constructor(props){
		super(props);
		this.state={
			task:''
		}
		this.handleChange= this.handleChange.bind(this);
		this.handleSubmit= this.handleSubmit.bind(this)
	}
	
	handleChange(evt){
		this.setState({
			[evt.target.name] : evt.target.value
		})
	}
	handleSubmit(evt){
		evt.preventDefault();
		this.props.addTodo(this.state.task)
		this.setState({
			task:''
		})
		this.props.history.push("/todos");
	}
	
	render(){
		return(
			<form onSubmit={this.handleSubmit}>
				<label htmlFor="task">Task</label>
				<input type="text" name="task" id="task" value={this.state.task} onChange={this.handleChange} />
				<button>Save</button>
			</form>
		)
	}
}



export default TodoForm;
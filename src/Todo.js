import React from "react";

function Todo({task, removeTodo}){
	return <li>{task} <button onClick={removeTodo}>X</button></li>
}

export default Todo;
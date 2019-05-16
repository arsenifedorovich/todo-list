import React from 'react';
import Task from "./task"

class Tasks extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
	    tasks: [],
		task: ""
	}
}

onChange(e) {
	this.setState({
		task: e.target.value,
	})
}

onKeyUp(e){
	const code = e.keyCode || e.which;
	if(code === 13) {
		this.addTask()
	}
	
}

addTask() {

	if(!this.state.task.length) {
		return
	}
	const newTask = {
		value: this.state.task,
		id: this.state.tasks.length,
	}
	
	this.setState({
		tasks: [...this.state.tasks, newTask],
		task: '',
	});


}

render() {
	return (
		<div>
			<input 
				placeholder="Type your task..."
				type="text"
				onChange={(e)=> this.onChange(e)}
				onKeyUp={(e)=> this.onKeyUp(e)}
				value={this.state.task}
			/>

			<button  onClick={() => this.addTask()}>
				Add task
			</button>

			{
				this.state.tasks.map((item) => {
					return (
						<Task key={item.id} value={item.value} />
					)
				})
			}

		</div>
		
	);
}
}

export default Tasks;
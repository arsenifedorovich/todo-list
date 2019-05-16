// import React from 'react';
// import Person from './person';

// class Persons extends React.Component {

// 	constructor(props){
// 		super(props);
// 		this.state = {
// 			persons: [
// 				{
// 					name: 'Ars',
// 					id: 0,
// 				},
// 				{
// 					name: 'Max',
// 					id: 1,
// 				} 
// 			],
// 			person: ''
// 		}
// 	}

// 	onChange(e) {
// 		this.setState({
// 			person: e.target.value,
// 		})
// 	}
// 	onKeyUp(e) {
// 		const code = e.keyCode || e.which;
// 		if(code === 13) {
// 			this.addNewPerson()
// 		}
		
// 	}
// 	addNewPerson() {
// 		if(!this.state.person.length) {
// 			return
// 		}
// 		const newPerson = {
// 			name: this.state.person,
// 			id: this.state.persons.length,
// 		}
		
// 		this.setState({
// 			persons: [...this.state.persons, newPerson],
// 			person: '',
// 		});


// 	}
	
// 	render() {
// 		return (
// 			<div>
// 				<input
// 					placeholder="Person name"
// 					type="text"
// 					onChange={(e)=> this.onChange(e)}
// 					onKeyUp={(e)=> this.onKeyUp(e)}
// 					value={this.state.person}
// 				/>

// 				<button onClick={() => this.addNewPerson()}>
// 					Add new person
// 				</button>

// 				{
// 					this.state.persons.map((item) => {
// 						return (
// 							<Person key={item.id} name={item.name} />
// 						)
// 					})
// 				}

// 			</div>
			
// 		);
// 	}
// }

// export default Persons;
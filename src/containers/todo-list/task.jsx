import React from 'react';

class Task extends React.Component {

   render() {
	   return (
		
		<p>  {this.props.value} </p>
	   );
   }
}

export default Task;
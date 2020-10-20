import React from 'react';
import Form from './Form';
import Todos from './Todos';

class App extends React.Component {
  state = {
    value: 'default',
    todos: [
      {
        text: ''
      }
    ]
  }

  handleInputChange = event => {
    this.setState({
      value: event.target.value
    });
  };

  handleAddTodo = () => {
    this.setState(prevState => {
      return {
        todos: prevState.todos.concat([{
          text: prevState.value
        }]),
        value: ''
      }
    });
  };

  render() {
    return (
      <>
        <Form handleInputChange={this.handleInputChange} value={this.state.value} handleAddTodo={this.handleAddTodo}></Form>
        <Todos todos={this.state.todos}></Todos>
      </>
    )
  }
}

export default App
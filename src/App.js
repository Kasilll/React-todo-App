import React from 'react';
import './App.scss';
import Main from './Pages/Main/Main';
import { Route } from 'react-router-dom';
import TodoScreen from './Pages/TodoScreen/TodoScreen';

function App() {
	const [ activeModal, setActiveModal ] = React.useState(false);
	const [ todos, setTodos ] = React.useState([]);
	const [ todoContext, setTodoContext ] = React.useState();
	console.log(todoContext);

	return (
		<div>
			<Route
				path="/"
				exact
				render={() => (
					<Main
						activeModal={activeModal}
						setActiveModal={setActiveModal}
						todos={todos}
						setTodos={setTodos}
						todoContext={todoContext}
						setTodoContext={setTodoContext}
					/>
				)}
			/>

			<Route path="/todo" exact render={() => <TodoScreen setTodos = {setTodos} todos={todos} todoContext = {todoContext}/>} />
		</div>
	);
}

export default App;



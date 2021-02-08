import React from 'react';
import './todos.scss';
import CancelIcon from '@material-ui/icons/Cancel';
import { Route, Link } from 'react-router-dom';
import TodoScreen from '../../Pages/TodoScreen/TodoScreen';

export default function Todo({ title, discription, todoIndex, setTodos, todos, todoContext, setTodoContext }) {
	function deleteTodo() {
		setTodos(todos.filter((item, index) => index !== todoIndex));
	}
	function goToTodo() {
		setTodoContext(todoIndex);
	}

	return (
		<div className="container__todos">
			<div className="todos__wrapper">
				<CancelIcon onClick={() => deleteTodo()} className="delete-todos" />
				<div className="todos__title">{title}</div>
				<div className="todos__discripion">
					<div className="todos__discripion__text">{discription}</div>
				</div>
				<Link to="./todo">
					<button onClick={() => goToTodo()} class="todos__go-over">
						Перейти
					</button>
				</Link>
			</div>
		</div>
	);
}

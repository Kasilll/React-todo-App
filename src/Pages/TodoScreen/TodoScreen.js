import React from 'react';
import './TodoScreen.scss';
import { Link } from 'react-router-dom';

export default function TodoScreen({ todos, todoContext, setTodos }) {
	const titleValue = React.useRef();
	const discriptionValue = React.useRef();

	
	function saveTitle(e) {
		setTodos((prev) => {
			const nemArr = [ ...prev ];
			nemArr[todoContext].title = e.target.value;
			return nemArr;
		});
	}

	function saveDiscription(e) {
		setTodos((prev) => {
			const nemArr = [ ...prev ];
			nemArr[todoContext].discription = e.target.value;
			return nemArr;
		});
	}
	return (
		<div className="todo">
			<input
				type="text"
				ref={titleValue}
				value={todos[todoContext].title}
				className="todo__title"
				onChange={saveTitle}
			/>
			<input
				type="text"
				ref={discriptionValue}
				className="todo__discription"
				value={todos[todoContext].discription}
				onChange={saveDiscription}
			/>
			<Link to="/">
				<button className="save">Сохранить</button>
			</Link>
		</div>
	);
}

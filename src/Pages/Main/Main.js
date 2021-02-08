import React from 'react';
import ModalWindow from '../../components/modalWindow/ModalWindow';
import Todo from '../../components/todo/todos';
import './Main.scss';

export default function Main({ activeModal, setActiveModal, todos, setTodos, todoContext, setTodoContext }) {
	function openModal() {
		setActiveModal(true);
	}
	return (
		<div className="container">
			<div className="container__title">Мои дела</div>
			<ModalWindow activeModal={activeModal} setActiveModal={setActiveModal} todos={todos} setTodos={setTodos} />
			<button onClick={() => openModal()} className="add-todos">
				Добавить
			</button>
			<div className="container__content">
				{todos.map((todo, index) => (
					<Todo
						title={todo.title}
						discription={todo.discription}
						todoIndex={index}
						setTodos={setTodos}
						todos={todos}
						todoContext={todoContext}
						setTodoContext={setTodoContext}
					/>
				))}
			</div>
		</div>
	);
}

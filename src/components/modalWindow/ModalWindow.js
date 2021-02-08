import React from 'react';
import './modalWindow.scss';

export default function ModalWindow({ activeModal, setActiveModal, todos, setTodos }) {
	const titleValue = React.useRef();
	const discriptionValue = React.useRef();

	function closeModel() {
		setActiveModal(false);
	}
	function pushTodos() {
		let titleTodos = titleValue.current.value;
		let discriptionTodos = discriptionValue.current.value;
		if (titleTodos !== '' && discriptionTodos !== '') {
			setTodos([
				...todos,
				{
					title: titleTodos,
					discription: discriptionTodos
				}
			]);
			setActiveModal(false);
		} else {
			alert('Ошибка');
		}
	}

	return (
		<div className={activeModal ? 'modal active' : 'modal'}>
			<div className="modal__title">Title</div>
			<input ref={titleValue} type="text" className="input-title" />
			<div className="modal__discription">Discription</div>
			<input ref={discriptionValue} type="text" className="input-discription" />
			<div className="modal__btn">
				<button onClick={() => closeModel()} className="btn-cancel">
					Отмета
				</button>
				<button onClick={() => pushTodos()} className="btn-add">
					Добавить
				</button>
			</div>
		</div>
	);
}

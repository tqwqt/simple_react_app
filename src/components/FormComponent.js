import React, {Component} from 'react';

class FormComponent extends Component {
	render() {
		return (
			<div>
				<form role={"form"}>
					<div className={"form-group"}>
						<label className="control-label " htmlFor="name">Имя</label>{/*control-label is needed for grid system*/}
						<input type={"text"} className={"form-control"} id={"name"} placeholder={"Введите имя"}/>
						{/*<p className="help-block">Some help</p>*/}
					</div>
					<div className={"form-group"}>
						<label className="control-label " htmlFor="surname">Фамилия</label>
						<input type={"text"} className={"form-control"} id={"surname"} placeholder={"Введите фамилию"}/>
						{/*<p className="help-block">Some help</p>*/}
					</div>
					<div className={"form-group"}>
						<label className="control-label " htmlFor="email">Email</label>
						<input type={"email"} className={"form-control"} id={"email"} placeholder={"Введите электронную почту"}/>
						{/*<p className="help-block">Some help</p>*/}
					</div>
					<div className={"form-group"}>
						<label className="control-label " htmlFor="description">Краткое описание заказа</label>
						<input type={"text"} className={"form-control"} id={"description"} placeholder={"Описание"}/>
						{/*<p className="help-block">Some help</p>*/}
					</div>
					<button type="button" className="btn btn-success">Отправить</button>
				</form>
			</div>
		);
	}
}

FormComponent.propTypes = {};

export default FormComponent;
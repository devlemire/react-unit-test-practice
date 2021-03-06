import React, { Component, PropTypes } from "react";

import "./NewToDo.styl";

export default class NewToDo extends Component {
	static get propTypes() {
		return {
			submit: PropTypes.func.isRequired
		};
	}

	constructor( props ) {
		super( props );

		this.state = { toDo: "" };

		this.handleChange = this.handleChange.bind( this );
		this.submitTodo = this.submitTodo.bind( this );
	}

	handleChange( event ) {
		this.setState( { toDo: event.target.value } );
	}

	submitTodo( event ) {
		event.preventDefault();

		this.props.submit( this.state.toDo );

		this.setState( { toDo: "" } );
	}

	render() {
		const { toDo } = this.state;

		return (
			<form
				className="new-to-do"
				onSubmit={ this.submitTodo }
			>
				<input
					className="new-to-do__input"
					onChange={ this.handleChange }
					placeholder="What needs to be done?"
					type="text"
					value={ toDo }
				/>
			</form>
		);
	}
}

import React from "react";
import { Link } from "react-router-dom";

import ContactCard from '../components/ContactCard';
import Modal from '../components/Modal';
import { Context } from "../store/appContext.jsx";
import PropTypes from "prop-types";

export default class Contacts extends React.Component {
	constructor(){
		super();
		this.state = {
			showModal: false  
		};
	}

	render() {
	return (
		<Context.Consumer>
			{({ store, actions }) => {
				
			//	return store.contacts.map((item, index) => {
					//let id = this.props.id;
					//console.log(id);
					return (
						<div>
						<h1><a href="index.html"><img src={require("../../images/logo.png")} alt="Logo"></img></a></h1>
						</div>
						
					);
				// commented out to match commented out array mapping  });
					}}
		
		</Context.Consumer>
		);
	}
}
Contacts.propTypes={
	id: PropTypes.number,
	history: PropTypes.object
};
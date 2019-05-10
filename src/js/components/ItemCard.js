import React from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.js";

class ItemCard extends React.Component {
	constructor() {
		super();
		this.state = {
			// initialize your state
		};
	}

	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					//					console.log (this.props);
					return (
						<div className="item-listing-container-skrn">
							<a href="dashboard-movie-profile.html">
								<img src="http://via.placeholder.com/500x707" alt="Listing" />
							</a>
							<div className="item-listing-text-skrn">
								<div className="item-listing-text-skrn-vertical-align">
									<h6>
										<a href="dashboard-movie-profile.html">The Wild Things Are</a>
									</h6>
									<div
										className="circle-rating-pro"
										data-value="0.86"
										data-animation-start-value="0.86"
										data-size="32"
										data-thickness="3"
										data-fill="{
							          &quot;color&quot;: &quot;#42b740&quot;
							        }"
										data-empty-fill="#def6de"
										data-reverse="true">
										<span style="color:#42b740;">8.6</span>
									</div>
								</div>{" "}
							</div>{" "}
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}

/**
 * Define the data-types for
 * your component's properties
 **/
ItemCard.propTypes = {
	history: PropTypes.object,
	onDelete: PropTypes.func,
	id: PropTypes.number,
	key: PropTypes.number
};

/**
 * Define the default values for
 * your component's properties
 **/
ItemCard.defaultProps = {
	onDelete: null
};
export default withRouter(ItemCard);

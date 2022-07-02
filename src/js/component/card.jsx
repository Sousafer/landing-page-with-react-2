import React from "react";
import PropTypes from "prop-types";

const card = (props) => {
	return (
		<div>
			<div className="card">
				<img
					className="card-img-top"
					src={props.img}
					alt="Card image cap"
				/>
				<div className="card-body">
					<h5 className="card-title">{props.title}</h5>
					<p className="card-text">{props.text}</p>
					<a href="#" className="btn btn-primary">
						{props.button}
					</a>
				</div>
			</div>
		</div>
	);
};

card.PropTypes = {
	img: PropTypes.string,
	title: PropTypes.string,
	text: PropTypes.string,
	button: PropTypes.string,
};

export default card;

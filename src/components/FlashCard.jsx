import React from "react";
import "./FlashCard.css";

const Card = props => {
	return (
		<div>
			<div className="flash-card">
				<h3>{props.Title}</h3>
				<p>{props.Description}</p>
				<div className="image">
					<img src={props.Image} alt="" />
				</div>
			</div>
		</div>
	);
};

export default Card;

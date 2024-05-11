import React from "react";
import "./Box.css";

const box = props => {
	return (
		<div>
			<div className="box">
				<h2>
					<span>{props.textInSpan}</span> {props.title}
				</h2>
				<p>{props.description}</p>
			</div>
		</div>
	);
};

export default box;

import React from "react";
import NumCard from "./Card";

const SectionThree = () => {
	return (
		<div>
			<section id="section-3">
				<div className="num-cards">
					<NumCard
						first="74M+"
						second="Assets Discovered and Secured with Hubble"
					/>
					<NumCard
						first="10M+"
						second="Previously Unknown Cloud Services Identified"
					/>
					<NumCard
						first="24M+"
						second="Applications Analyzed for New Intelligence"
					/>
				</div>
			</section>
		</div>
	);
};

export default SectionThree;

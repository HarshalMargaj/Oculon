import React from "react";
import Accordion from "./Accordion";

const SectionFour = () => {
	return (
		<div>
			<section id="section-4">
				<div className="sec-heading sec2-heading">
					<div>
						<h1>
							Turn Questions Into Insights With{" "}
							<span>Oculon AI</span>
						</h1>
					</div>
				</div>
				<div className="accordion-box">
					<div className="accordion">
						<Accordion />
					</div>
					<div className="accordion-img">
						<img
							src="https://png.pngtree.com/png-vector/20230321/ourmid/pngtree-artificial-intelligence-robot-illustration-png-image_6654937.png"
							alt=""
						/>
					</div>
				</div>
			</section>
		</div>
	);
};

export default SectionFour;

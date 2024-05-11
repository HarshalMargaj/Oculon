import React from "react";
import Card from "./FlashCard";

const SectionFive = () => {
	return (
		<div>
			<section id="section-5">
				<div className="sec-heading sec3-heading">
					<div>
						<h1>Product Breakdown</h1>
					</div>
				</div>
				<div className="flash-cards">
					<Card
						Title="Model Studio"
						Description="Tailor financial models, define custom metrics, leverage predefined decision pathways for strategic planning."
						Image="https://assets-global.website-files.com/65ef6ff41031c076162557dd/65fabbe982c9d9a49057477e_About%20us%20-%20Card%201-p-500.png"
					/>
					<Card
						Title="Dashboard"
						Description="Visualise data through customizable dashboards highlighting relevant metrics and insights for informed decision-making."
						Image="https://assets-global.website-files.com/65ef6ff41031c076162557dd/65fabc02a9d8421e18ca2149_About%20us%20-%20Card%202-p-500.png"
					/>
					<Card
						Title="Feeds"
						Description="Stay agile with intelligent feed systems providing real-time notifications, actionable insights for proactive decision-making."
						Image="https://assets-global.website-files.com/65ef6ff41031c076162557dd/65fabc170bf8677ba13a3a82_About%20us%20-%20Card%203-p-500.png"
					/>
				</div>
			</section>
		</div>
	);
};

export default SectionFive;

import React, { useState } from "react";
import "./TabNavigation.css";

const TabNavigation = () => {
	const [activeTab, setActiveTab] = useState("tab1");

	const handleTabChange = tab => {
		setActiveTab(tab);
	};

	return (
		<div>
			<ul className="tabs">
				<li>
					<a
						href="#tab1"
						onClick={() => handleTabChange("tab1")}
						className={activeTab === "tab1" ? "active" : ""}
					>
						Retail
					</a>
				</li>
				<li>
					<a
						href="#tab2"
						onClick={() => handleTabChange("tab2")}
						className={activeTab === "tab2" ? "active" : ""}
					>
						SaaS
					</a>
				</li>
				<li>
					<a
						href="#tab3"
						onClick={() => handleTabChange("tab3")}
						className={activeTab === "tab3" ? "active" : ""}
					>
						E-commerce
					</a>
				</li>
				<li>
					<a
						href="#tab4"
						onClick={() => handleTabChange("tab4")}
						className={activeTab === "tab4" ? "active" : ""}
					>
						FinTech
					</a>
				</li>
				<li>
					<a
						href="#tab5"
						onClick={() => handleTabChange("tab5")}
						className={activeTab === "tab5" ? "active" : ""}
					>
						Manufacturing
					</a>
				</li>
			</ul>
			<div className="tab-content">
				{activeTab === "tab1" && <Tab1Content />}
				{activeTab === "tab2" && <Tab2Content />}
				{activeTab === "tab3" && <Tab3Content />}
				{activeTab === "tab4" && <Tab4Content />}
				{activeTab === "tab5" && <Tab5Content />}
			</div>
		</div>
	);
};

const Tab1Content = () => {
	return (
		<div>
			<div className="drawer">
				<div className="drawer-content">
					<ul className="drawer-list">
						<li>
							<span>
								Optimise Inventory via Oculon & analyse sales
								trends
							</span>{" "}
							and predict inventory needs, minimising overstock
							and understock situations.
						</li>
						<li>
							Leverage data to create{" "}
							<span>
								detailed customer segments, tailoring marketing
								strategies
							</span>{" "}
							to increase engagement and conversion rates.
						</li>
						<li>
							<span>Dynamically adjust prices</span> based on
							real-time market data and consumer behavior
							analytics to maximize profitability.
						</li>
					</ul>
				</div>
				<div className="drawer-image">
					<img
						src="https://assets-global.website-files.com/65ef6ff41031c076162557dd/65f42550e23c9d1366d7a4a0_Customer%2520Experience%2520(1)-p-1080.png"
						alt=""
					/>
				</div>
			</div>
		</div>
	);
};

const Tab2Content = () => {
	return (
		<div>
			<div className="drawer">
				<div className="drawer-content">
					<ul className="drawer-list">
						<li>
							<span>Churn Prediction:</span> Utilize Oculon to
							identify at-risk customers by analyzing usage
							patterns and engagement metrics, enabling proactive
							retention strategies.
						</li>
						<li>
							<span>Revenue Forecasting:</span> Employ advanced
							modeling to predict future revenue streams based on
							current growth trends and customer acquisition
							rates.
						</li>
						<li>
							<span>Feature Usage Analysis:</span> Track which
							features are most used and valued by customers,
							guiding development priorities and resource
							allocation.
						</li>
					</ul>
				</div>
				<div className="drawer-image">
					<img
						src="https://assets-global.website-files.com/65ef6ff41031c076162557dd/65f42550e23c9d1366d7a4a0_Customer%2520Experience%2520(1)-p-1080.png"
						alt=""
					/>
				</div>
			</div>
		</div>
	);
};

const Tab3Content = () => {
	return (
		<div>
			<div className="drawer">
				<div className="drawer-content">
					<ul className="drawer-list">
						<li>
							<span>Customer Lifetime Value Prediction:</span>{" "}
							Analyze past purchasing behavior and customer
							interactions to predict future buying patterns and
							determine the most valuable customers.
						</li>
						<li>
							<span>Supply Chain Management:</span> Integrate data
							across the supply chain to optimize logistics,
							reduce shipping times, and improve customer
							satisfaction.
						</li>
						<li>
							<span>A/B Testing Analysis:</span> Use Oculon to
							measure the impact of different webpage layouts,
							promotional offers, and product placements on sales
							and customer behavior.
						</li>
					</ul>
				</div>
				<div className="drawer-image">
					<img
						src="https://assets-global.website-files.com/65ef6ff41031c076162557dd/65f42550e23c9d1366d7a4a0_Customer%2520Experience%2520(1)-p-1080.png"
						alt=""
					/>
				</div>
			</div>
		</div>
	);
};
const Tab4Content = () => {
	return (
		<div>
			<div className="drawer">
				<div className="drawer-content">
					<ul className="drawer-list">
						<li>
							<span>Fraud Detection:</span> Implement models that
							detect unusual transaction patterns in real-time to
							prevent fraud and maintain security.
						</li>
						<li>
							<span>Credit Scoring:</span> Develop predictive
							models to assess credit risk based on a wide array
							of financial behaviors and customer demographics.
						</li>
						<li>
							<span>Regulatory Compliance Monitoring:</span>{" "}
							Automatically track and report transactions that may
							require regulatory review or action, ensuring
							compliance with minimal manual intervention.
						</li>
					</ul>
				</div>
				<div className="drawer-image">
					<img
						src="https://assets-global.website-files.com/65ef6ff41031c076162557dd/65f42550e23c9d1366d7a4a0_Customer%2520Experience%2520(1)-p-1080.png"
						alt=""
					/>
				</div>
			</div>
		</div>
	);
};
const Tab5Content = () => {
	return (
		<div>
			<div className="drawer">
				<div className="drawer-content">
					<ul className="drawer-list">
						<li>
							<span>Predictive Maintenance:</span> Analyze machine
							performance data to predict equipment failures
							before they occur, reducing downtime and maintenance
							costs.
						</li>
						<li>
							<span>Production Optimization:</span> Model
							production processes to identify bottlenecks and
							optimize workflow for increased throughput and
							reduced waste.
						</li>
						<li>
							<span>Quality Control Analysis:</span> Utilize data
							from production lines to detect anomalies or
							variations in product quality, triggering corrective
							actions in real-time.
						</li>
					</ul>
				</div>
				<div className="drawer-image">
					<img
						src="https://assets-global.website-files.com/65ef6ff41031c076162557dd/65f42550e23c9d1366d7a4a0_Customer%2520Experience%2520(1)-p-1080.png"
						alt=""
					/>
				</div>
			</div>
		</div>
	);
};

export default TabNavigation;

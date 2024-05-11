import React from "react";
import "./StackScroller.css";
import "../Responsive.css";

const StackScroller = () => {
	return (
		<div>
			<div className="container">
				<ul id="cards">
					<li className="card" id="card1">
						<div className="card-body">
							<div className="content">
								<h3>Analyse & Automate</h3>
								<p>
									Identify hidden patterns & predict trends,
									with advanced machine learning capabilities.
									Stay agile with automated reporting and
									workflow features that deliver the latest
									insights without manual effort.
								</p>
							</div>
							<div className="image">
								<img
									src="https://digifyconsultant.com/wp-content/uploads/2022/04/gam1.png"
									alt=""
								/>
							</div>
						</div>
					</li>
					<li className="card" id="card2">
						<div className="card-body">
							<div className="content">
								<h3>Build</h3>
								<p>
									Flexible architecture and customization
									tools allow you to define unique data
									models, configure automated processes, and
									seamlessly integrate Oculon into your
									existing operations.
								</p>
							</div>
							<div className="image">
								<img
									src="https://digifyconsultant.com/wp-content/uploads/2022/04/gam1.png"
									alt=""
								/>
							</div>
						</div>
					</li>
					<li className="card" id="card3">
						<div className="card-body">
							<div className="content">
								<h3>Consolidate</h3>
								<p>
									Consolidate information from diverse systems
									into a unified view, breaking down silos for
									a comprehensive understanding of your
									business landscape.
								</p>
							</div>
							<div className="image">
								<img
									src="https://digifyconsultant.com/wp-content/uploads/2022/04/gam1.png"
									alt=""
								/>
							</div>
						</div>
					</li>
					<li className="card" id="card4">
						<div className="card-body">
							<div className="content">
								<h3>Data-Driven Dashboards</h3>
								<p>
									Bring data to life through intuitive
									dashboards that enable seamless exploration,
									collaborative decision-making, and
									data-driven storytelling.
								</p>
							</div>
							<div className="image">
								<img
									src="https://digifyconsultant.com/wp-content/uploads/2022/04/gam1.png"
									alt=""
								/>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default StackScroller;

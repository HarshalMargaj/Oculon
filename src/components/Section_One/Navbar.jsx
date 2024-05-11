import React from "react";
import "./Navbar.css";
import "../Responsive.css";

const Navbar = () => {
	return (
		<div>
			<nav>
				<h1>Oculon.ai</h1>
				{/* <ul>
					<li className="dropdown-container ">
						Features
						<div className="dropdown">
							<ul className="dropdown-menu">
								<li>Model Studio</li>
								<li>Dashboard</li>
								<li>Feeds</li>
							</ul>
						</div>
					</li>
				</ul> */}
				<div className="btn">
					<button className="btn-1">Log In</button>
					<button className="btn-2">Join Beta</button>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;

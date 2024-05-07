// import React from "react";
// import "./Navbar.css";
// import { SlArrowDown } from "react-icons/sl";

// const Navbar = () => {
// 	return (
// 		<div>
// 			<nav>
// 				<h1>Oculon.ai</h1>
// 				<ul>
// 					<li>Home</li>
// 					<li className="feartures">
// 						Features <SlArrowDown className="icon" />
// 					</li>
// 					<li>Solutions</li>
// 					<li>Pricing</li>
// 					<li>Resources</li>
// 				</ul>
// 				<div className="btn">
// 					<button>Join Beta</button>
// 					<button>Log In</button>
// 				</div>
// 			</nav>
// 		</div>
// 	);
// };

// export default Navbar;

import React from "react";
import "./Navbar.css";

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
					<button>Join Beta</button>
					<button>Log In</button>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;

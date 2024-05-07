import React from "react";
import "./Footer.css";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
	return (
		<div>
			<footer>
				<div className="footer">
					<div className="logo">
						<h1>Oculon.ai</h1>
					</div>
					<div className="copyright">
						<p>
							Copyrights&copy; 2024 Oculon.ai. All rights
							reserved.
						</p>
					</div>
					<div className="social-icons">
						<ul>
							<li>
								<a href="#">
									<FaInstagram />
								</a>
							</li>
							<li>
								<a href="#">
									<FaTwitter />
								</a>
							</li>
							<li>
								<a href="#">
									<FaLinkedin />
								</a>
							</li>
						</ul>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Footer;

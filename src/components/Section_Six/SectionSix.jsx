import React from "react";
import Integration from "./Integration";
import Marquee from "react-fast-marquee";

const SectionSix = () => {
	return (
		<div>
			<section id="section-6">
				<div className="sec-heading">
					<div>
						<div className="integrations">Integrations</div>
					</div>
				</div>

				<div className="marquee-info">
					<div className="marquee-heading">
						<h1>
							Connect your most important financial systems in
							minutes.
						</h1>
					</div>
					<div className="marquee-content">
						<p>
							<span>
								Experience seamless workflow integration
							</span>{" "}
							with Oculon's plug-and-play feature, enabled by{" "}
							<span>over 100 one-click integrations. </span>{" "}
							Connect your essential financial systems
							effortlessly, enhancing decision-making and
							operational efficiency without the hassle.
						</p>
						<button>Explore all integrations</button>
					</div>
				</div>

				<div className="marquee">
					<Marquee speed={50} pauseOnHover>
						<Integration image="Image_1.svg" />
						<Integration image="Image_2.svg" />
						<Integration image="Image_3.svg" />
						<Integration image="Image_4.svg" />
						<Integration image="Image_5.svg" />
						<Integration image="Image_6.svg" />
						<Integration image="Image_7.png" />
						<Integration image="Image_9.svg" />
						<Integration image="Image_10.svg" />
						<Integration image="Image_11.svg" />
						<Integration image="Image_12.svg" />
						<Integration image="Image_13.svg" />
						<Integration image="Image_14.svg" />
						<Integration image="Image_15.svg" />
						<Integration image="Image_16.svg" />
						<Integration image="Image_18.svg" />
						<Integration image="Image_19.svg" />
						<Integration image="Image_20.svg" />
						<Integration image="Image_21.svg" />
						<Integration image="Image_22.svg" />
						<Integration image="Image_23.svg" />
						<Integration image="Image_24.svg" />
						<Integration image="Image_25.svg" />
					</Marquee>
					<Marquee speed={50} direction="right" pauseOnHover>
						<Integration image="Image_1.svg" />
						<Integration image="Image_2.svg" />
						<Integration image="Image_3.svg" />
						<Integration image="Image_4.svg" />
						<Integration image="Image_5.svg" />
						<Integration image="Image_6.svg" />
						<Integration image="Image_7.png" />
						<Integration image="Image_9.svg" />
						<Integration image="Image_10.svg" />
						<Integration image="Image_11.svg" />
						<Integration image="Image_12.svg" />
						<Integration image="Image_13.svg" />
						<Integration image="Image_14.svg" />
						<Integration image="Image_15.svg" />
						<Integration image="Image_16.svg" />
						<Integration image="Image_18.svg" />
						<Integration image="Image_19.svg" />
						<Integration image="Image_20.svg" />
						<Integration image="Image_21.svg" />
						<Integration image="Image_22.svg" />
						<Integration image="Image_23.svg" />
						<Integration image="Image_24.svg" />
						<Integration image="Image_25.svg" />
					</Marquee>
				</div>
			</section>
		</div>
	);
};

export default SectionSix;

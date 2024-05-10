import React from "react";
import Marquee from "react-fast-marquee";
import Navbar from "./components/Navbar";
import StackScroller from "./components/StackScroller";
import Card from "./components/FlashCard";
import NumCard from "./components/Card";
import TabNavigation from "./components/TabNavigation";
import Box from "./components/Box";
import Integration from "./components/Integration";
// import Slider from "./components/Slider";
import Footer from "./components/Footer";
import Accordion from "./components/Accordion";
import "./App.css";
import "./components/Responsive.css";

const App = () => {
	return (
		<div className="main">
			<section id="section-1">
				<Navbar />

				<div className="headline">
					<h1>Augment Your Business Strategy with AI Analytics</h1>
					<p>
						Oculon seamlessly integrates data sources, performs
						in-depth analysis, and delivers actionable insights,
						acting as your AI-enabled financial analyst.
					</p>
					<button>Join Beta</button>
				</div>
			</section>

			<section id="section-2">
				<div className="sec-heading sec2-heading">
					<div>
						<h1>
							Harness the Artificial Intelligence Oculon - <br />
							<span>
								First Planning and Decision Intelligence
								Platform
							</span>
						</h1>
					</div>
				</div>
				<div>
					<StackScroller />
				</div>
			</section>

			<section id="section-5">
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

			<section id="section-9">
				<div className="sec-heading sec2-heading">
					<div>
						<h1>About AI</h1>
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

			<section id="section-3">
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

			<section id="section-8">
				<div className="sec-heading sec3-heading">
					<div>
						<h1>Integrations</h1>
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
						<Integration />
						<Integration />
						<Integration />
						<Integration />
						<Integration />
						<Integration />
						<Integration />
						<Integration />
						<Integration />
						<Integration />
					</Marquee>
					<Marquee speed={50} direction="right" pauseOnHover>
						<Integration />
						<Integration />
						<Integration />
						<Integration />
						<Integration />
						<Integration />
						<Integration />
						<Integration />
						<Integration />
						<Integration />
					</Marquee>
				</div>
			</section>

			<section id="section-4">
				<div className="sec-heading sec4-heading">
					<div>
						<h1>
							Oculon in Action:{" "}
							<span>
								Industry- Specific Solutions for Enhanced
								Business Performance
							</span>
						</h1>
					</div>
				</div>
				<TabNavigation />
			</section>

			<section id="section-6">
				<div className="block">
					<div className="block-content">
						<h1>What is an Asset?</h1>
						<p>
							In today’s rapidly evolving digital landscape,
							organizations must broaden their understanding of
							what constitutes a security asset. Here at Hubble
							Technology, an asset is considered to be anything
							that has value to an organization.
						</p>
					</div>
					<div className="block-img">
						<img
							src="https://www.hubble.net/_next/image/?url=https%3A%2F%2Fhubblecms.wpengine.com%2Fwp-content%2Fuploads%2F2022%2F07%2Fwhy-huble.png&w=3840&q=75"
							alt=""
						/>
					</div>
				</div>
			</section>

			<section id="section-7">
				<div className="sec-heading">
					<div>
						<h1>Meet Our Users</h1>
					</div>
					<p>Where IT and Security Visionaries Align with Hubble</p>
				</div>
				<div className="boxes">
					<Box
						textInSpan="Marketing: "
						title="Amplifying Profitability"
						description="Oculon enables marketers to pinpoint opportunities, tailor campaigns with precision, and significantly boost ROI. The platform's AI assistant simplifies complex data analysis, ensuring marketing decisions are both quick and informed—directly enhancing operations profitably.
						"
					/>
					<Box
						textInSpan="Sales: "
						title="Accurate Forecasting for Enhanced Performance"
						description="By synthesizing information from CRM and ERP systems, Oculon provides a detailed overview of sales trends and customer engagement. This allows sales teams to forecast with unprecedented accuracy, helping to identify and capitalize on emerging sales opportunities before the competition. 
						
						"
					/>
					<Box
						textInSpan="Human Resource Management: "
						title="Streamlined Operations
						"
						description="Oculon transforms HR management by integrating seamlessly with HRIS, enabling a strategic approach to workforce management. With capabilities to analyze everything from payroll to tax implications, HR departments can operate more efficiently, ensuring compliance and reducing overheads. 
						
						"
					/>
					<Box
						textInSpan="Financial Planning and Analytics Strategic: "
						title="Financial Decision Making"
						description="By aggregating critical data from various financial systems, Oculon provides a clear picture of financial health and risk exposure. The AI-enhanced tools offer predictive analytics and scenario planning, facilitating strategic decisions that safeguard profitability and ensure financial stability. 

						"
					/>
				</div>
			</section>

			<Footer />
		</div>
	);
};

export default App;

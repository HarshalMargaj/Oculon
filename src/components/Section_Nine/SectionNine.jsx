import React from "react";
import Box from "./Box";

const SectionNine = () => {
	return (
		<div>
			<section id="section-9">
				<div className="sec-heading">
					<div>
						<h1>
							Unlock <span>Transformative Business Outcomes</span>
						</h1>
					</div>
				</div>
				<div className="boxes">
					<Box
						textInSpan="Marketing Strategies: "
						title="Amplifying Profitability through Data Analysis"
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
		</div>
	);
};

export default SectionNine;

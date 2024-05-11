import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function ControlledAccordions() {
	const [expanded, setExpanded] = React.useState(false);

	const handleChange = panel => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};

	return (
		<div>
			<Accordion
				expanded={expanded === "panel1"}
				onChange={handleChange("panel1")}
				square={true}
				disableGutters={true}
				sx={{
					backgroundColor: "#110c29",
					color: "white",
					borderTop: 0.5,
					borderColor: "rgba(170, 125, 252, 0.25)",
					paddingTop: 2,
					paddingBottom: 2,
				}}
			>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
					aria-controls="panel1bh-content"
					id="panel1bh-header"
				>
					<Typography
						sx={{
							width: "80%",
							flexShrink: 0,
							fontFamily: "poppins",
							fontSize: 20,
						}}
					>
						Build with AI
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography
						sx={{
							fontFamily: "poppins",
							letterSpacing: 1,
						}}
					>
						Augment decision-making processes with AI-powered
						systems that evaluate complex data, assess multiple
						variables, and provide actionable recommendations
						aligned with predefined objectives.
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion
				expanded={expanded === "panel2"}
				onChange={handleChange("panel2")}
				disableGutters={true}
				sx={{
					backgroundColor: "#110c29",
					color: "white",
					borderTop: 0.2,
					borderColor: "rgba(170, 125, 252, 0.25)",
					paddingTop: 2,
					paddingBottom: 2,
				}}
			>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
					aria-controls="panel2bh-content"
					id="panel2bh-header"
				>
					<Typography
						sx={{
							width: "80%",
							flexShrink: 0,
							fontFamily: "poppins",
							fontSize: 20,
						}}
					>
						Plan with AI
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography
						sx={{ fontFamily: "poppins", letterSpacing: 1 }}
					>
						Gain a competitive edge by incorporating AI-driven
						predictive analytics to forecast future trends, identify
						risks, and uncover hidden opportunities within your
						data.
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion
				sx={{
					backgroundColor: "#110c29",
					color: "white",
					borderTop: 0.2,
					borderColor: "rgba(170, 125, 252, 0.25)",
					paddingTop: 2,
					paddingBottom: 2,
				}}
				expanded={expanded === "panel3"}
				onChange={handleChange("panel3")}
				disableGutters={true}
			>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
					aria-controls="panel3bh-content"
					id="panel3bh-header"
				>
					<Typography
						sx={{
							width: "80%",
							flexShrink: 0,
							fontFamily: "poppins",
							fontSize: 20,
						}}
					>
						Unlock Insights with AI
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography
						sx={{ fontFamily: "poppins", letterSpacing: 1 }}
					>
						Engage in natural language conversations with an AI
						assistant that understands user queries and provides
						personalized insights and recommendations.
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion
				expanded={expanded === "panel4"}
				onChange={handleChange("panel4")}
				disableGutters={true}
				sx={{
					backgroundColor: "#110c29",
					color: "white",
					borderTop: 0.2,
					borderColor: "rgba(170, 125, 252, 0.25)",
					paddingTop: 2,
					paddingBottom: 2,
					boxShadow: "none",
				}}
			>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
					aria-controls="panel4bh-content"
					id="panel4bh-header"
				>
					<Typography
						sx={{
							width: "80%",
							flexShrink: 0,
							fontFamily: "poppins",
							fontSize: 20,
						}}
					>
						Visualize with AI
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography
						sx={{ fontFamily: "poppins", letterSpacing: 1 }}
					>
						Transform data into compelling visualizations with
						AI-powered capabilities that automate chart selection,
						intelligent data encoding, and adaptive layout
						adjustments.
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion
				expanded={expanded === "panel5"}
				onChange={handleChange("panel5")}
				disableGutters={true}
				sx={{
					backgroundColor: "#110c29",
					color: "white",
					borderTop: 0.5,
					borderColor: "rgba(170, 125, 252, 0.25)",
					paddingTop: 2,
					paddingBottom: 2,
					boxShadow: "none",
				}}
			>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
					aria-controls="panel4bh-content"
					id="panel4bh-header"
				>
					<Typography
						sx={{
							width: "45%",
							flexShrink: 0,
							fontFamily: "poppins",
							fontSize: 20,
						}}
					>
						Collaborate with AI
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography
						sx={{ fontFamily: "poppins", letterSpacing: 1 }}
					>
						Streamline workflows and automate processes with
						AI-driven capabilities that minimize manual effort in
						tasks such as data preparation, model deployment, and
						report generation.
					</Typography>
				</AccordionDetails>
			</Accordion>
		</div>
	);
}

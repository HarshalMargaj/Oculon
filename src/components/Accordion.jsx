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
					borderTop: 0.2,
					borderColor: "gray",
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
						General settings
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography sx={{ fontFamily: "poppins" }}>
						Nulla facilisi. Phasellus sollicitudin nulla et quam
						mattis feugiat. Aliquam eget maximus est, id dignissim
						quam.
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
					borderColor: "gray",
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
						Users
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography sx={{ fontFamily: "poppins" }}>
						Donec placerat, lectus sed mattis semper, neque lectus
						feugiat lectus, varius pulvinar diam eros in elit.
						Pellentesque convallis laoreet laoreet.
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion
				sx={{
					backgroundColor: "#110c29",
					color: "white",
					borderTop: 0.2,
					borderColor: "gray",
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
						Advanced settings
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography sx={{ fontFamily: "poppins" }}>
						Nunc vitae orci ultricies, auctor nunc in, volutpat
						nisl. Integer sit amet egestas eros, vitae egestas
						augue. Duis vel est augue.
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
					borderColor: "gray",
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
						Personal data
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography sx={{ fontFamily: "poppins" }}>
						Nunc vitae orci ultricies, auctor nunc in, volutpat
						nisl. Integer sit amet egestas eros, vitae egestas
						augue. Duis vel est augue.
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
					borderTop: 0.2,
					borderColor: "gray",
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
							width: "33%",
							flexShrink: 0,
							fontFamily: "poppins",
							fontSize: 20,
						}}
					>
						Personal data
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography sx={{ fontFamily: "poppins" }}>
						Nunc vitae orci ultricies, auctor nunc in, volutpat
						nisl. Integer sit amet egestas eros, vitae egestas
						augue. Duis vel est augue.
					</Typography>
				</AccordionDetails>
			</Accordion>
		</div>
	);
}

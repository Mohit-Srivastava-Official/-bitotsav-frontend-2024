import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./about.css";

const FAQAccordion = ({ question, answer, id }) => {
	const [open, setOpen] = React.useState(false);
	const handleClick = () => {
		setOpen(!open);
	};
	return (
		<Accordion
			onClick={handleClick}
			expanded={open}
			className="mb-10 !font-normal"
			sx={{
				backgroundColor: "#663399",
				color: "white",
				borderRadius: "20px",
				"& .MuiAccordionSummary-root": {
					backgroundColor: "#663399",
					color: "white",
					borderRadius: "20px",
				},
				"& .MuiAccordionDetails-root": {
					backgroundColor: "#D6C4EC",
					color: "black",
					borderRadius: "0 0 20px 20px",
				},
			}}
		>
			<AccordionSummary
				expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
				aria-controls={`${id}-content`}
				id={`${id}-header`}
				className="!font-medium"
			>
				<Typography
					variant="h5"
					className="!font-medium"
					sx={{ color: "white", fontFamily: "Blender-Regular" }}
				>
					{question}
				</Typography>
			</AccordionSummary>
			<AccordionDetails>
				<Typography
					variant="h5"
					className="!font-medium"
					sx={{ color: "black", fontFamily: "Blender-Regular" }}
				>
					{answer}
				</Typography>
			</AccordionDetails>
		</Accordion>
	);
};

export default function FAQ() {
	const [open2, setOpen2] = React.useState(true);
	const clickHandler = () => {
		setOpen2(!open2);
	};
	const [open3, setOpen3] = React.useState(false);
	const clickHandler2 = () => {
		setOpen3(!open3);
	};
	const faqs = [
		{
			id: "panel2a",
			question:
				"What is the fee required for registration for BITOTSAV'24 and where should I make the payment?",
			answer: "The registration fee for BITOTSAV'24 ranges from Rs 1400/- to Rs 1500/- per person. This fee must be paid to obtain your pass for attending the fest. It will be debited from your mess account.",
		},
		{
			id: "panel3a",
			question: "Who needs to make the registration payment?",
			answer: "All individuals except students residing at BIT Mesra Main Campus who utilize the mess facility (hostelers) are obligated to pay the registration fee. This includes Day Scholars, Students off-campus due to internships/training, and all students from other colleges/campuses.",
		},
		{
			id: "panel4a",
			question:
				"Where can I locate my pass and verify my payment status?",
			answer: "Your pass can be found in the 'Your Pass' section of your 'Dashboard' after completing registration for BITOTSAV'24. To check your payment status, you should inspect your mess account.",
		},
	];
	return (
		<div className="faq" id="faq-about">
			<div className="ques">
				<h1
					className="custom-heading-about text-center text-6xl text-purple-500 mb-8"
					style={{ textAlign: "center", marginTop: "8%" }}
				>
					Rules and Regulations - BITOTSAV'24
				</h1>
				<div>
					<Accordion
						onClick={clickHandler}
						expanded={open2}
						className="mb-10 !font-normal"
						sx={{
							backgroundColor: "#663399",
							color: "white",
							borderRadius: "20px",
							"& .MuiAccordionSummary-root": {
								backgroundColor: "#663399",
								color: "white",
								borderRadius: "20px",
							},
							"& .MuiAccordionDetails-root": {
								backgroundColor: "#D6C4EC",
								color: "black",
								borderRadius: "0 0 20px 20px",
							},
						}}
					>
						<AccordionSummary
							expandIcon={
								<ExpandMoreIcon sx={{ color: "white" }} />
							}
							aria-controls={`panel1a-content`}
							id={`panel1a-header`}
							className="!font-medium"
						>
							<Typography
								variant="h5"
								className="!font-medium"
								sx={{
									color: "white",
									fontFamily: "Blender-Regular",
								}}
							>
								GUIDELINES FOR PARTICIPATION
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography
								variant="h5"
								className="!font-medium"
								sx={{
									color: "black",
									fontFamily: "Blender-Regular",
								}}
							>
								1. To participate in BITOTSAV, begin by signing
								up and signing in as usual using OTP.
								<br /> 2. BIT Mesra students must use their BIT
								email address for registration. <br />
								3. Non-BIT students should register on the
								website and proceed to pay the registration fees
								through the provided SBI Collect portal link
								after signing up. <br />
								4. Team registration will occur only once. Team
								leaders can initiate the team registration
								process, ensuring all team members are
								registered and verified. Once a team is created,
								no other member can be added or replaced. <br />
								5. Any member of the team can register for an
								event, regardless of whether they are the team
								leader or not. <br />
								6. Team size should be between 3 to 8 members.
								<br /> 7. Team members must register for events
								only on the website, and/or on Google Forms if
								available.
							</Typography>
						</AccordionDetails>
					</Accordion>
					{/* ======================== */}
					{faqs.map((faq) => (
						<FAQAccordion key={faq.id} {...faq} />
					))}
					{/* ======================== */}
					<Accordion
						onClick={clickHandler2}
						expanded={open3}
						className="mb-10 !font-normal"
						sx={{
							backgroundColor: "transparent",
							color: "white",
							borderRadius: "20px",
							"& .MuiAccordionSummary-root": {
								backgroundColor: "#663399",
								color: "white",
								borderRadius: "20px 20px 0 0",
							},
							"& .MuiAccordionDetails-root": {
								backgroundColor: "#D6C4EC",
								color: "black",
								borderRadius: "0 0 20px 20px",
							},
						}}
					>
						<AccordionSummary
							expandIcon={
								<ExpandMoreIcon sx={{ color: "white" }} />
							}
							aria-controls={`panel1a-content`}
							id={`panel1a-header`}
							className="!font-medium"
						>
							<Typography
								variant="h5"
								className="!font-medium"
								sx={{
									color: "white",
									fontFamily: "Blender-Regular",
								}}
							>
								What services are covered by the registration
								fee?
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography
								variant="h5"
								className="!font-medium"
								sx={{
									color: "black",
									fontFamily: "Blender-Regular",
								}}
							>
								All participants must utilize lodging facilities
								compulsorily, and no student will be permitted
								to leave the campus after 6pm on all days of
								BITOTSAV'24.
							</Typography>
						</AccordionDetails>
					</Accordion>
				</div>
				<br></br>
			</div>
		</div>
	);
}

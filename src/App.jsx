import React from "react";
import Navbar from "./components/Section_One/Navbar";
import SectionOne from "./components/Section_One/SectionOne";
import SectionTwo from "./components/Section_Two/SectionTwo";
import SectionThree from "./components/Section_Three/SectionThree";
import SectionFour from "./components/Section_Four/SectionFour";
import SectionFive from "./components/Section_Five/SectionFive";
import SectionSix from "./components/Section_Six/SectionSix";
import SectionSeven from "./components/Section_Seven/SectionSeven";
import SectionEight from "./components/Section_Eight/SectionEight";
import SectionNine from "./components/Section_Nine/SectionNine";
import Footer from "./components/Footer";
import "./App.css";
import "./components/Responsive.css";

const App = () => {
	return (
		<div className="main">
			<Navbar />
			<SectionOne />
			<SectionTwo />
			<SectionThree />
			<SectionFour />
			<SectionFive />
			<SectionSix />
			<SectionSeven />
			<SectionEight />
			<SectionNine />
			<Footer />
		</div>
	);
};

export default App;

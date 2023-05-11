import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const TrafficLight = () => {

	const [glow, setGlow] = useState("red")


	return (
		<>
		
			<h1 className="bg-dark border position-absolute top-0 start-50 translate-middle-x">C</h1>

			<div className="semaforo rounded position-absolute top-50 start-50 translate-middle">
				<div
					onClick={() => setGlow("red")}
					className={"light red" + (glow === "red" ? " glow" : "")}>

				</div>

				<div
					onClick={() => setGlow("yellow")}
					className={"light yellow" + (glow === "yellow" ? " glow" : "")}>
				</div>

				<div
					onClick={() => setGlow("green")}
					className={"light green" + (glow === "green" ? " glow" : "")}>
				</div>
			</div>

		</>
	);
};

export default TrafficLight;

import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const TrafficLight = () => {

	const[glow, setGlow] = useState("red")



	return (
		<>
		
		<div className="semaforo">
			<div 
			onClick={() => setGlow("red")}
			className={"light red" + (setGlow === "red" ? " glow" : "")}>
			</div>

			<div 
			onClick={() => setGlow("red")}
			className={"light yellow" + (setGlow === "yellow" ? " glow" : "")}>				
			</div>

			<div 
			onClick={() => setGlow("red")}
			className={"light green" + (setGlow === "yellow" ? " glow" : "")}>				
			</div>
		</div>
		
		</>
	);
};

export default TrafficLight;

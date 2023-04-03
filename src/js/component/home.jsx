import React from "react";

//include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";
import Counter from "./counter.jsx";

//create your first component
const Home = ({time}) => {
	
	// console.log(setCount().one)
//   setInterval(setCount, 1000);
//   setInterval(()=>{console.log("this ",setCount().one)},1000)
	return (

	
		<div className="container-xl">
			<h1 className="text-center">
				Simpler Counter!
			</h1>
			{/* <div className="row align-items-center h-100">
				shsndcsnciusnciusdnxcnidxsdian
			</div> */}

			<div className="display-1 my-5 py-5 text-white">
				<Counter time={time} />
			</div>			

		</div>
	);
};

export default Home;

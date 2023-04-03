import React from "react";
// import faClock from "./icons.js"

//create your first component
function Counter({time}){
	return (
		<div className="d-flex row-flex justify-content-center my-5 p-5 rounded-5 bg-black bigCounter p-0">
			<div className="col-2 border border-3 rounded-end rounded-5 calendar p-2">
				<i className="fa-regular fa-clock fa-fade fa-xs"></i>
            </div>
			<div className="d-flex border border-3 rounded-start rounded-5">	
				<div className="six">
					{time[5]}
				</div>
				<div className="five">
					{time[4]}
				</div>
				<div className="four">
					<span className="">
						:
					</span>
					{time[3]}
				</div>
				<div className="three">
					{time[2]}
				</div>
				<div className="two">
					<span className="">
						:
					</span>
					{time[1]}
				</div>
				<div className="one">
					{time[0]}
				</div>
			</div>
		</div>
	);
};

export default Counter;

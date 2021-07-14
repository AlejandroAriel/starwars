import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					{" "}
					<img
						className="star"
						src="https://imagenesparapeques.com/wp-content/uploads/2016/01/Star-Wars-Logo.png"
					/>
				</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Check the Context in action</button>
					<button
						id="btnGroupDrop1"
						type="button"
						className="btn btn-secondary dropdown-toggle"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false">
						<i className="fas fa-cog" />
					</button>
				</Link>
			</div>
		</nav>
	);
};

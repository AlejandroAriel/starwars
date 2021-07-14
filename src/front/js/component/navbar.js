import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Dropdown, Button } from "react-bootstrap";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const favoriteList = store.favorites.map((item, index) => (
		// Only do this if items have no stable IDs

		<Dropdown.Item className="d-flex justify-content-between" key={index} as="button">
			<li>{item}</li>
			<Button variant="dark botonsito">
				<i className="fa fa-trash " />
			</Button>
		</Dropdown.Item>
	));

	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container">
				<img
					className="star"
					src="https://imagenesparapeques.com/wp-content/uploads/2016/01/Star-Wars-Logo.png"
				/>

				<Dropdown>
					<Dropdown.Toggle variant="success" id="dropdown-basic">
						Dropdown Button
					</Dropdown.Toggle>

					<Dropdown.Menu>{favoriteList}</Dropdown.Menu>
				</Dropdown>
			</div>
			<div />
		</nav>

		//<nav className="navbar navbar-light bg-light mb-3">
		// 	<Link to="/">
		// 		<span className="navbar-brand mb-0 h1">
		// 			{" "}
		// 			<img
		// 				className="star"
		// 				src="https://imagenesparapeques.com/wp-content/uploads/2016/01/Star-Wars-Logo.png"
		// 			/>
		// 		</span>
		// 	</Link>
		// 	<div className="ml-auto">
		// 		<Link to="/demo">
		// 			<button className="btn btn-primary">Check the Context in action</button>
		// 			<button
		// 				id="btnGroupDrop1"
		// 				type="button"
		// 				className="btn btn-secondary dropdown-toggle"
		// 				data-toggle="dropdown"
		// 				aria-haspopup="true"
		// 				aria-expanded="false">
		// 				<i className="fas fa-cog" />
		// 			</button>
		// 		</Link>
		// 	</div>
		// </nav>
	);
};

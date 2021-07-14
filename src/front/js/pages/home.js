import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Button, Card } from "react-bootstrap";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<h1>Characters</h1>

			<Card style={{ width: "18rem" }}>
				<Card.Img variant="top" src="holder.js/100px180" />
				<Card.Body>
					<Card.Title>Card Title</Card.Title>
					<Card.Text>
						Some quick example text to build on the card title and make up the bulk of the cards content.
					</Card.Text>
					<Button variant="primary">Go somewhere</Button>
				</Card.Body>
			</Card>
			<Card style={{ width: "18rem" }}>
				<Card.Img variant="top" src="holder.js/100px180" />
				<Card.Body>
					<Card.Title>Card Title</Card.Title>
					<Card.Text>
						Some quick example text to build on the card title and make up the bulk of the cards content.
					</Card.Text>
					<Button variant="primary">Go somewhere</Button>
				</Card.Body>
			</Card>
			<Card style={{ width: "18rem" }}>
				<Card.Img variant="top" src="holder.js/100px180" />
				<Card.Body>
					<Card.Title>Card Title</Card.Title>
					<Card.Text>
						Some quick example text to build on the card title and make up the bulk of the cards content.
					</Card.Text>
					<Button variant="primary">Go somewhere</Button>
				</Card.Body>
			</Card>
			<Card style={{ width: "18rem" }}>
				<Card.Img variant="top" src="holder.js/100px180" />
				<Card.Body>
					<Card.Title>Card Title</Card.Title>
					<Card.Text>
						Some quick example text to build on the card title and make up the bulk of the cards content.
					</Card.Text>
					<Button variant="primary">Go somewhere</Button>
				</Card.Body>
			</Card>
		</div>
	);
};

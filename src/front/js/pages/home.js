import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { Button, Card } from "react-bootstrap";

export const Home = () => {
	const { store, actions } = useContext(Context); //para acceder al context, de otra forma no se utiliza
	const [personajes, setPersonajes] = useState([]);
	const [planetas, setPlanetas] = useState([]);

	// function traerPersonajes() {
	// 	fetch("https://www.swapi.tech/api/people")
	// 		.then(response => response.json()) //Header o saber qué pasó con llamada. JSON(convierte el archivo legible para js)
	// 		.then(data => {
	// 			// Se procesa la información
	// 			setPersonajes(data.results);
	// 			console.log(personajes);
	// 		});
	// }

	useEffect(() => {
		fetch("https://www.swapi.tech/api/people")
			.then(response => response.json()) //Header o saber qué pasó con llamada. JSON(convierte el archivo legible para js)
			.then(data => {
				// Se procesa la información
				setPersonajes(data.results);
			});
	}, []);

	useEffect(() => {
		fetch("https://www.swapi.tech/api/planets")
			.then(response => response.json()) //Header o saber qué pasó con llamada. JSON(convierte el archivo legible para js)
			.then(data => {
				// Se procesa la información
				setPlanetas(data.results);
			});
	}, []);

	const result = personajes.map((item, index) => (
		<div key={index} className="col">
			<Card>
				<Card.Img variant="top" src="https://cdn.worldvectorlogo.com/logos/star-wars-2.svg" />
				<Card.Body>
					<Card.Title>{item.name}</Card.Title>
					<Card.Text>{item.url}</Card.Text>
					<Button variant="primary">Go somewhere</Button>
					<Button
						onClick={() => {
							actions.addFavorites(item.name);
						}}
						className="danger"
						variant="danger">
						♡
					</Button>
				</Card.Body>
			</Card>
		</div>
	));

	const result2 = planetas.map((item, index) => (
		<div key={index} className="col">
			<Card>
				<Card.Img variant="top" src="https://cdn.worldvectorlogo.com/logos/star-wars-2.svg" />
				<Card.Body>
					<Card.Title>{item.name}</Card.Title>
					<Card.Text>{item.url}</Card.Text>
					<Button variant="primary">Go somewhere</Button>
					<Button
						onClick={() => {
							actions.addFavorites(item.name);
						}}
						className="danger"
						variant="danger">
						♡
					</Button>
				</Card.Body>
			</Card>
		</div>
	));

	//Por que una funcion normal con Fetch no me funciona y el useEffect si?

	// useEffect(() => {
	// 	traerPersonajes();
	// 	traerPlanetas();
	// }, []);

	return (
		<div>
			<h1>Characters</h1>

			<div className="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2 tarjetitas">{result}</div>
			<h1>Planets</h1>
			<div className="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2 tarjetitas">{result2}</div>
		</div>
	);
};

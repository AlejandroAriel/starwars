import React, { useContext, useState, useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "../../styles/home.scss";

export function People() {
	const { store, actions } = useContext(Context);

	const { uid } = useParams();

	useEffect(() => {
		actions.recibirCharactersData(uid);
	}, []);

	//console.log(store.charactersData.properties);
	//console.log(store.charactersData.description);

	//--------------------------------------------------
	const mapeo = obj => {
		let firstPart = Object.entries(obj)
			.slice(0, Object.entries(obj).length / 2)
			.map(property => {
				return (
					<li key={property[0]} className="col-12 text-Dark  list-unstyled">
						{property[0]} : {property[1]}
					</li>
				);
			});

		return <ul className=" col-6">{firstPart}</ul>;
	};
	const mapeo2 = obj => {
		let firstPart = Object.entries(obj)
			.slice(Object.entries(obj).length / 2, Object.entries(obj).length)
			.map(property => {
				return (
					<li key={property[0]} className="col-12 text-Dark  list-unstyled">
						{property[0]} : {property[1]}
					</li>
				);
			});

		return <ul className=" col-6">{firstPart}</ul>;
	};

	return (
		<div className="container text-black">
			{store.charactersData.properties ? (
				<div>
					<div className="myBox">
						<div>
							<img className="foto" src="https://cdn.worldvectorlogo.com/logos/star-wars-2.svg" />
						</div>
						<div className="row">
							<div className="col-4" />

							<div className="col-8">
								<h2>{store.charactersData.properties.name}</h2>

								<p>{store.charactersData.description}</p>
							</div>
						</div>

						<hr className="bg-black" />
					</div>
					<div className="info row d-flex justify-content-center justify-content-md-start no-gutters">
						{mapeo(store.charactersData.properties)}
						{mapeo2(store.charactersData.properties)}
					</div>

					<div />
				</div>
			) : (
				<div className="text-center text-warning mt-5">
					<i className="fas fa-spinner fa-pulse fa-6x" />
				</div>
			)}
		</div>
	);
}

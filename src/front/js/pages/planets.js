import React, { useContext, useState, useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export function Planets() {
	const { store, actions } = useContext(Context);

	const { uid } = useParams();

	useEffect(() => {
		actions.recibirPlanetsData(uid);
	}, []);

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
			{store.planetsData.properties ? (
				<div>
					<div className="myBox">
						<div className="row">
							<div className="col-4" />
							<div className="col-8">
								<h2>{store.planetsData.properties.name}</h2>

								<p>{store.planetsData.description}</p>
							</div>
						</div>

						<hr className="bg-black" />
					</div>
					<div className="row d-flex justify-content-center justify-content-md-start no-gutters">
						{mapeo(store.planetsData.properties)}
						{mapeo2(store.planetsData.properties)}
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

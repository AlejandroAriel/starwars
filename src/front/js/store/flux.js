const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: [],
			charactersData: {},
			planetsData: {},
			nombre: "Alejandro",
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: () => {
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/hello")
					.then(resp => resp.json())
					.then(data => setStore({ message: data.message }))
					.catch(error => console.log("Error loading message from backend", error));
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

			addFavorites: name => {
				setStore({ favorites: [...getStore().favorites, name] });
			},

			removeFavorites: key => {
				setStore({ favorites: getStore().favorites.filter((item, index) => index != key) }); //con getStore agarro el arr, que en este caso es favorites, y le hago un filter con los elementos que tenga un index disstinto a la key, y el que lo tenga igual no lo agrega.
			},

			recibirCharactersData: async id => {
				try {
					let response = await fetch(`https://www.swapi.tech/api/people/${id}`);
					const data = await response.json();
					let data_CharactersData = data.result;
					//Da un objecto
					setStore({ charactersData: data_CharactersData });
				} catch (e) {
					console.error(`error de -- ${e}`);
				}
			},
			recibirPlanetsData: async id => {
				try {
					let response = await fetch(`https://www.swapi.tech/api/planets/${id}`);
					const data = await response.json();
					let data_PlanetsData = data.result;
					//Da un objecto
					setStore({ planetsData: data_PlanetsData });
				} catch (e) {
					console.error(`error de -- ${e}`);
				}
			}
		}
	};
};

export default getState;

// Si es informacion "STORE" para acceder a la variable que tenga la info, pero si es una funcion es "actions"

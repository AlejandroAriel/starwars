const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: [],
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
			}
		}
	};
};

export default getState;

import React from "react";
import axios from "axios";

export const productContext = React.createContext();

const INIT_STATE = {
	products: [],
	oneProduct: null,
};

function reducer(state = INIT_STATE, action) {
	switch (action.type) {
		case "GET_PRODUCTS":
			return { ...state, products: action.payload };

		default:
			return state;
	}
}

const ProductContextProvider = ({ children }) => {
	const [state, dispatch] = React.useReducer(reducer, INIT_STATE);

	const API = "http://localhost:8000/products";

	async function getProducts() {
		let res = await axios(API);
		dispatch({
			type: "GET_PRODUCTS",
			payload: res.data,
		});
		console.log(res.data);
	}

	async function addProduct(newProduct) {
		await axios.post(API, newProduct);
		getProducts();
	}

	return (
		<productContext.Provider
			value={{
				addProduct,
				getProducts,

				products: state.products,
			}}
		>
			{children}
		</productContext.Provider>
	);
};
export default ProductContextProvider;

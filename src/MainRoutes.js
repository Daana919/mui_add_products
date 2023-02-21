import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductCard from "./components/ProductCard";
import AddProduct from "./components/AddProduct";
import ProductContextProvider from "./ProductContext";

const MainRoutes = () => {
	return (
		<ProductContextProvider>
			<Routes>
				<Route path='/' element={<ProductCard />} />
				<Route path='/add' element={<AddProduct />} />
			</Routes>
		</ProductContextProvider>
	);
};

export default MainRoutes;

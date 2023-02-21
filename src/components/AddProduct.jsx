import React, { useState, useContext } from "react";
import { productContext } from "../ProductContext";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

const AddProduct = () => {
	const { addProduct } = useContext(productContext);
	const navigate = useNavigate();
	const [title, setTitle] = useState("");
	const [desc, setDesc] = useState("");
	const [image, setImage] = useState("");

	function createProduct() {
		let newProduct = {
			title,
			desc,
			image,
		};

		for (let key in newProduct) {
			if (!newProduct[key]) {
				alert("Some inputs are empty!");
			}
		}

		// console.log(newContact);
		addProduct(newProduct);
		navigate("/");
	}
	return (
		<div className='d-flex justify-content-between flex-wrap w-75 m-auto'>
			<center style={{ fontSize: "30px", margin: "20px" }}>Create new product</center>
			<Box
				component='form'
				sx={{
					"& .MuiTextField-root": { m: 1, width: "25ch" },
				}}
				noValidate
				autoComplete='off'
			>
				<TextField required id='outlined-required' label='Title' value={title} onChange={e => setTitle(e.target.value)} />
				<TextField required id='outlined-required' label='Description' value={desc} onChange={e => setDesc(e.target.value)} />
				<TextField required id='outlined-required' label='Image URL' value={image} onChange={e => setImage(e.target.value)} />
				<div style={{ display: "flex", justifyContent: "center", marginBottom: "5px" }}>
					<Button variant='contained' size='medium' onClick={createProduct}>
						Add
					</Button>
				</div>
			</Box>
		</div>
	);
};

export default AddProduct;

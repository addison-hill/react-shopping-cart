import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import ProductContext from './contexts/ProductContext';
import CartContext from './contexts/CartContext';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		setCart(curr => [...curr, item]);
	};

	const removeItem = (index) => {
		const newCart = Object.assign([], cart);
		newCart.splice(index, 1);
		setCart(newCart);
	}

	return (
		<ProductContext.Provider value={{ products, addItem, removeItem }}>
			<CartContext.Provider value={cart}>
			<div className="App">
				<Navigation />

				<Route exact path="/" component={Products} />

				<Route path="/cart" component={ShoppingCart} />

			</div>
			</CartContext.Provider>
		</ProductContext.Provider>
	);
}

export default App;

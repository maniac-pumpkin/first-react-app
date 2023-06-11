import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
/*
const pizzaData = [
	{
		name: "Focaccia",
		ingredients: "Bread with italian olive oil and rosemary",
		price: 6,
		photoName: "./pizzas/focaccia.jpg",
		soldOut: false,
	},

	{
		name: "Pizza Margherita",
		ingredients: "Tomato and mozarella",
		price: 10,
		photoName: "./pizzas/margherita.jpg",
		soldOut: false,
	},

	{
		name: "Pizza Spinaci",
		ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
		price: 12,
		photoName: "./pizzas/spinaci.jpg",
		soldOut: false,
	},

	{
		name: "Pizza Funghi",
		ingredients: "Tomato, mozarella, mushrooms, and onion",
		price: 12,
		photoName: "./pizzas/funghi.jpg",
		soldOut: false,
	},

	{
		name: "Pizza Salamino",
		ingredients: "Tomato, mozarella, and pepperoni",
		price: 15,
		photoName: "./pizzas/salamino.jpg",
		soldOut: true,
	},
	
	{
		name: "Pizza Prosciutto",
		ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
		price: 18,
		photoName: "./pizzas/prosciutto.jpg",
		soldOut: false,
	},
];
*/

function Header() {
	return (
		<header className="header">
			<h1>FAST REACT PIZZA CO.</h1>
		</header>
	);
}

function Menu() {
	return (
		<main className="menu">
			<h2>Our Menu</h2>

			<Pizza
				name="Pizza Prosciutto"
				ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"
				price={18}
				photoName="./pizzas/prosciutto.jpg"
				soldOut="false"
			/>
		</main>
	);
}

// Pizzas
function Pizza(props) {
	return (
		<div className="pizza">
			<img src={props.photoName} alt={props.name} />
			<div>
				<h3>{props.name}</h3>
				<p>{props.ingredients}</p>
				<span>${props.price}</span>
			</div>
		</div>
	);
}

function Footer() {
	const date = new Date();
	// const hour = date.getHours();
	// const isItOpen = hour >= 8 && hour <= 22;

	return (
		<footer className="footer">
			<p>
				<strong>{date.toLocaleTimeString()}</strong> We'are Currently Open
			</p>
		</footer>
	);
}

function App() {
	return (
		<div className="container">
			<Header />
			<Menu />
			<Footer />
		</div>
	);
}

// React v18+
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

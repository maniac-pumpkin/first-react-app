import pizzaData from "../data.js";

function Menu() {
	return (
		<main className="menu">
			<h2>Our Menu</h2>

			{pizzaData.length > 0 ? (
				<>
					<p>
						Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all
						delicious
					</p>

					<ul className="pizzas">
						{pizzaData.map((eachPizza) => (
							<Pizza pizzaObj={eachPizza} key={eachPizza.name} />
						))}
					</ul>
				</>
			) : (
				<p>Sorry we're still working on our menu. Please come back later.</p>
			)}
		</main>
	);
}

function Pizza({ pizzaObj }) {
	const { name, ingredients, price, photoName, soldOut } = pizzaObj;

	// if (soldOut) return null;

	return (
		<li className={`pizza ${soldOut ? "sold-out" : null}`}>
			<img src={photoName} alt={name} />
			<div>
				<h3>{name}</h3>
				<p>{ingredients}</p>
				<span>{soldOut ? "SOLD OUT" : price}</span>
			</div>
		</li>
	);
}

export default Menu;

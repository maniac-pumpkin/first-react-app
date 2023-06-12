const date = new Date();
const hour = date.getHours();
const isItOpen = hour >= 8 && hour <= 22;

function Footer() {
	return (
		<footer className="footer">{isItOpen ? <Order /> : <p>Sorry we're currently closed, See ya next time</p>}</footer>
	);
}

function Order() {
	return (
		<div className="order">
			<p>We're open until 22:00. Come visit us or order online.</p>
			<button className="btn">Order</button>
		</div>
	);
}

export default Footer;

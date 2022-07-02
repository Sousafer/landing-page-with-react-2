import React from "react";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
//include images into your bundle

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<Jumbotron />
			<div className="row">
				<div className="col-md-3 m-4">
					<Card
						img="https://picsum.photos/200"
						title="A title"
						text="Some text"
						button="Click me"
					/>
				</div>
				<div className="col-md-3 m-4">
					<Card
						img="https://picsum.photos/200"
						title="Another title"
						text="Some more text"
						button="Click me 2"
					/>
				</div>
				<div className="col-md-3 m-4">
					<Card
						img="https://picsum.photos/200"
						title="Lalalal"
						text="Lorem ipsum"
						button="Im a button"
					/>
				</div>
				<div className="col-md-3 m-4">
					<Card
						img="https://picsum.photos/200"
						title="Card title"
						text="Some textttttttttt"
						button="Now click"
					/>
				</div>
			</div>
			<footer className="footer mt-auto py-3">Copywrite 2022</footer>
		</div>
	);
};

export default Home;


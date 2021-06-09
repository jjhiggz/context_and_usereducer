import { useEffect, useState } from "react";
import Header from "./components/Header";
import CharactersSection from "./components/CharactersSection";
import "./App.css";

function App() {
	const [characters, setCharacters] = useState([]);

	useEffect(() => {
		fetch("https://rickandmortyapi.com/api/character")
			.then((response) => response.json())
			.then((body) => body.results)
			.then(setCharacters);
	}, []);

	return (
		<div className="App">
			<Header />
			<CharactersSection characters={characters} />
		</div>
	);
}

export default App;

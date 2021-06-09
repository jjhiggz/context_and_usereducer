import CharacterCard from "./CharacterCard";
export default function CharactersSection({ characters }) {
	return (
		<section id="characters-section" class="container-dark">
			{characters.map((character) => {
				return <CharacterCard character={character} />;
			})}
		</section>
	);
}

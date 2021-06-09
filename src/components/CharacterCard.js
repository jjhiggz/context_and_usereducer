export default function CharactersSection({ character }) {
	return (
		<div class="character-card container-dark border-dark">
			<img src={character.image} alt={character.name + "-image"} />
			<h1 class="text-dark">{character.name}</h1>
		</div>
	);
}

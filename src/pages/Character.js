import Hash from '../utils/getHash';
import getData from '../utils/getData';

async function Character() {
	const id = await Hash();
	const characterData = await getData(id);
	const view = `
		<div class="characters-inner">
			<article class="character-card">
				<img src="${characterData.image}" alt="${characterData.name}" />
				<h2>${characterData.name}</h2>
			</article>
			<article class="characters-card">
				<h3>Episodes: <span>${characterData.episode.length}</span></h3>
				<h3>Status: <span>${characterData.status}</span></h3>
				<h3>Species: <span>${characterData.species}</span></h3>
				<h3>Gender: <span>${characterData.gender}</span></h3>
				<h3>Origin: <span>${characterData.origin.name}</span></h3>
				<h3>Last location: <span>${characterData.location.name}</span></h3>
			</article>
		</div>
	`;
	return view;
}

export default Character;
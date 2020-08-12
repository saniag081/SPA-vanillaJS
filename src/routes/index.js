import Header from '../templates/Header';
import Home from '../pages/Home';
import Character from '../pages/Character';
import Error404 from '../pages/Error404'
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resovelRoutes';

const routes = {
	'/': Home,
	'/:id': Character,
	'/:Contact': 'contact',
}

async function router() {
	const header = null || document.querySelector('#header');
	const content = null || document.querySelector('#content');
	header.innerHTML = await Header();
	let hash = getHash();
	let route = await resolveRoutes(hash);
	let render = routes[route] ? routes[route] : Error404;
	content.innerHTML = await render();
}

export default router;
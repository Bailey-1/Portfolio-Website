// Deal with setup of page

console.log(
	`%cLookin around in here are we?
This might help:
https://github.com/Bailey-1/PortfolioWebsite`,
	'background: black; color: yellow',
);

async function showGithub() {
	const data = await fetch('https://api.github.com/users/bailey-1/repos');

	const repositories = await data.json();
	console.log(`${repositories.length} repos from github`);
	repositories.forEach(generateCards);
}

function generateCards(repo) {
	const template = document.querySelector('#repoCard');
	const clone = document.importNode(template.content, true);
	clone.querySelector('#repoName').textContent = repo.name;
	clone.querySelector('#repoName').href = repo.html_url;
	clone.querySelector('#repoDescription').textContent = repo.description;

	if (repo.language != null) {
		const languageTag = document.createElement('span');
		languageTag.textContent = repo.language;
		languageTag.classList.add('tag');
		clone.querySelector('#repoLanguages').appendChild(languageTag);
	}

	document.querySelector('#repoList').appendChild(clone);
}

function pageLoaded() {
	showGithub();
}

window.addEventListener('load', pageLoaded);

const getQuestions = gameOptions => {
	const { category, difficulty, type } = gameOptions;

	let categoryQueryParam = "";
	let difficultyQueryParam = "";
	let typeQueryParam = "";

	if (category !== "")
		categoryQueryParam = `&category=${category}`;

	if (difficulty !== "")
		difficultyQueryParam = `&difficulty=${difficulty}`;

	if (type !== "")
		typeQueryParam = `&type=${type}`;
//Increase Question to 10/10
	let apiUrl = `https://opentdb.com/api.php?amount=10${categoryQueryParam}${difficultyQueryParam}${typeQueryParam}`;

	return fetch(apiUrl)
		.then(res => res.json())
		.then(data => data.results);
}

export default getQuestions;
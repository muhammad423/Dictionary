const apiUrl = 'https://healthruwords.p.rapidapi.com/v1/quotes/?t=Wisdom&maxR=1&size=medium&id=731';


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
		'X-RapidAPI-Host': 'healthruwords.p.rapidapi.com'
	}
};




    async function apiFun(){
        const result = await fetch(apiUrl, options).then(((res) => res.json()))
        console.log(result)
    }

    apiFun()
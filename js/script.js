let studioGhibliAPI = 'https://ghibliapi.herokuapp.com/films/';

fetch(studioGhibliAPI)
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(`Error: ${err}`);
    })
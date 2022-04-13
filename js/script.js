document.querySelector('.btnMovie').addEventListener('click', generateSGMovie);

function generateSGMovie() {
    let studioGhibliAPI = 'https://ghibliapi.herokuapp.com/films';

    fetch(studioGhibliAPI)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            // Get DOM Elements
            const mainContainer = document.querySelector('.container');
            const title = document.querySelector('.enTitle');
            const jpChar = document.querySelector('.jpCharacters');
            const rmChar = document.querySelector('.rmCharacters');
            const director = document.querySelector('.sgDirector');
            const producer = document.querySelector('.sgProducer');
            const poster = document.querySelector('.sgImg');
            const year = document.querySelector('.sgYear');
            const runtime = document.querySelector('.sgRunTime');
            const rating = document.querySelector('.sgRating');
            const summary = document.querySelector('.sgSummary');

            // Get random number
            let x = Math.floor(Math.random() * data.length);
            console.log(x);

            // Push Information to DOM
            title.innerText = data[x].title;
            jpChar.innerText = data[x].original_title;
            rmChar.innerText = data[x].original_title_romanised;
            director.innerText = data[x].director;
            producer.innerText = data[x].producer;
            poster.src = data[x].movie_banner;
            poster.alt = `Movie poster for ${data[x].title}.`;
            year.innerText = data[x].release_date;
            runtime.innerText = data[x].running_time;
            rating.innerText = data[x].rt_score;
            summary.innerText = data[x].description;

            if (mainContainer.classList.contains('hide')) {
                mainContainer.classList.remove('hide');
            }
        })
        .catch(err => {
            console.log(`Error: ${err}`);
        })
}
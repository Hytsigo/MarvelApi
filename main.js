const marvel = {
    render: () => {
        const urlAPI = "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=a5e5e481e3a5e566daeb35c1bc0dbbf7&hash=ef1f1de5f9c038a554d77fce1a4bbbd7" ;
        const container = document.querySelector("#marvel-row");
        let contentHTML = "" ;
        
        fetch(urlAPI) 
        .then(res => res.json())
        .then((json) => {
            for(const hero of json.data.results) {
                let urlHero = hero.urls[0].url;
                contentHTML += `
                    <div class="col-md-4">
                        <a href="${urlHero}" target="_blank">
                            <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}" class="img-thumbnail">
                        </a>
                    <h3 class="title">${hero.name}</h3>
                </div>
                `;
            }
            container.innerHTML = contentHTML
        })
    }
};
marvel.render()

const series = {
    render: () => {
        const urlAPI2 = "https://gateway.marvel.com:443/v1/public/series?ts=1&apikey=a5e5e481e3a5e566daeb35c1bc0dbbf7&hash=ef1f1de5f9c038a554d77fce1a4bbbd7";

        fetch(urlAPI2)
        .then(res => res.json())
        .then((json) => console.log(json))
    }
}

series.render()

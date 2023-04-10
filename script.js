// https://superheroapi.com/api/access-token/character-id


const SUPERHERO_TOKEN= '140307115671537'
const BASE_URL= `https://superheroapi.com/api.php/${SUPERHERO_TOKEN}`


const heroImageDiv=document.getElementById('newRandomHero');
const searchResultDiv=document.getElementById('searchResultDiv');
let nameh1=document.getElementById('Name')


const getSuperHero = (id,name)=>{
    fetch(`${BASE_URL}/${id}`)
    .then(response=> response.json())
    .then(json=>
        {
            // const name=`<h2>${json.name}</h2>`;
            // const intelligence=`<p>Intelligence: ${json.powerstats.intelligence}</p>`
            // const strength=`<p>Strength: ${json.powerstats.strength}`
            // const publisher=`<p>Publisher: ${json.biography.publisher}`
            
            // console.log(json.image.url)
            // heroImageDiv.innerHTML=`<img src="${json.image.url}"height=300 width=300/>${intelligence}${strength}${publisher}`
            // nameh1.innerText=json.name;

            console.log(json.powerstats)
            const superHero=json;
            getStatsHtml(superHero);
        })

}


const statToEmoji={
    intelligence:'🧠',
    strength:'💪',
    speed:'⚡',
    durability:'🚀',
    power:'📈',
    combat:'⚔️'

}

const getStatsHtml=(character)=>{
    const name=`<h2>${character.name}</h2>`;
    const img=`<img src="${character.image.url}" height=300 width=200 />`
    const stats=Object.keys(character.powerstats).map(stat=>{
        return `<p>${statToEmoji[stat]} ${stat.toUpperCase()}: ${character.powerstats[stat]}</p>`
    }).join('')
    heroImageDiv.innerHTML=`${name}${img}${stats}`


}


const getSearchSuperHero=(name)=>{
    fetch(`${BASE_URL}/search/${name}`)
    .then(response=>response.json())
    .then(json=>{
       
        const hero=json.results[0]
        getStatsHtml(hero);
        // const name=`<h2>${hero.name}</h2>`;
        //     const intelligence=`<p>Intelligence: ${hero.powerstats.intelligence}</p>`
        //     const strength=`<p>Strength: ${hero.powerstats.strength}`
        //     const publisher=`<p>Publisher: ${hero.biography.publisher}`
        
        // console.log(hero)
        // searchResultDiv.innerHTML=`<img src="${hero.image.url}" height=300 width=300 />${name}${intelligence}${strength}${publisher}`
    })
}


 
const randomNum = function(){
    let ans=Math.floor(Math.random() * 731) + 1;
    return ans;

}



const newHeroBtn=document.getElementById('newHeroButton');
 newHeroBtn.onclick=()=> getSuperHero(randomNum());




let heroName=document.getElementById('searchHero');
console.log(heroName.value);

const searchButton=document.getElementById('searchbtn');
searchButton.onclick=()=>getSearchSuperHero(heroName.value)



// ES6 IMPORT
// import {heroes} from './data/heroes.js'
import { heroes } from "../data/heroes";


const getHeroById = (id) =>{ 
    return heroes.find(hero => hero.id === id); 
}

const getHeroByOwner = (owner) =>{ 
    return heroes.filter(hero => hero.owner === owner); 
}

console.log(getHeroById(2));
console.log(getHeroByOwner("DC"));
console.log(getHeroByOwner("Marvel"));
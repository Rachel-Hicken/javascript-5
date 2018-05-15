const _ = require('lodash');
const axios = require('axios');
const movies = require('./movies.json');

let brack = {
    name:'Brack',
    age:32,
    height:'6ft'
}

let states = {
    california:{population:38332523, size:162695},
    texas:{population:26448193, size:268580},
    newYork:{population:19651127, size:54556},
    florida:{population:19552860, size:65754},
    illinois:{population:12882135, size:57914},
    pennsylvania:{population:12773801, size:46055},
    ohio:{population:11570808, size:44824}
  }
 
// map -> mapValues / mapKeys
let newStates = _.mapValues(states, (elem, index, wholeObj) => {
    elem.density = elem.population / elem.size;
    return elem;
})
// forEach -> forIn / forOwn,  

// find

let myMovie = _.find(movies, {year:'2000', contentRating:'15'});

// groupBy

let byYear = _.groupBy(movies, 'year');
let byDecade = _.groupBy(movies, (movie)=>Math.floor(movie.year / 10) * 10)

// union

let brackFriends = ['Joe', 'Missy', 'Joe','Joe','Joe', 'David', 'Golden', 'Blake', 'Jeremy'];
let jeremyFriends = ['Missy', 'Nolan', 'Noah', 'Blake', 'Stephen', 'Lloyd', 'Ally'];

let combinedFriends = _.union(brackFriends,jeremyFriends);

// intersection
let sharedFriends = _.intersection(brackFriends, jeremyFriends);

// memoize
let slowFunction = function(n){
    let total = 0;
    for (var i=0;i<n;i++){
        for (var j=0;j<n;j++){
            for (var k=0;k<n;k++){
                total += 1;
            }
        }
    }
    return total;
}

// console.time('slowFunction:10');

// let x = slowFunction(10);

// console.timeEnd('slowFunction:10');
// console.log(x);

// console.time('slowFunction:1000');

// let y = slowFunction(1000);

// console.timeEnd('slowFunction:1000');
// console.log(y);

// let memFunction = _.memoize(slowFunction);

// console.time('memFunction:1000');

// let z = memFunction(1000);

// console.timeEnd('memFunction:1000');
// console.log(z);

// console.time('memFunction:1000-2');

// z = memFunction(1000);

// console.timeEnd('memFunction:1000-2');
// console.log(z);

function getPerson(i){
    return axios.get('https://swapi.co/api/people/' + i)
}

let memGetPerson = _.memoize(getPerson);

console.time('axios');
memGetPerson(1).then(data=>{
    // console.log(data);
    console.timeEnd('axios');

    console.time('axios2');
    memGetPerson(1).then(data=>{
        // console.log(data);
        console.timeEnd('axios2');
    })
});






let a = 5 + 13 + '5';
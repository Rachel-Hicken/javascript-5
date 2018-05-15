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

// forEach -> forIn / forOwn,  

// find

// groupBy

// union

let bracksDieties = ['Auril, goddess of winter', 
                        'Bane, god of tyranny', 
                        'Lathander, god of birth and renewal', 
                        'Myrkul, god of death', 
                        'Umberlee, goddess of the sea',
                        'Tempus, god of war', 
                        'Mystra, goddess of magic', 
                        'Fharlanghn, god of travelers'];

let jeremysDieties = ['Mystra, goddess of magic', 
                        'Talona, goddess of disease and poison', 
                        'Oghma, god of knowledge', 
                        'Loviatar, goddess of pain', 
                        'Cyric, god of lies' , 
                        'Lathander, god of birth and renewal',
                        'Sune, goddess of love and beauty'];
                        
let toddsDieties = ['Bane, god of tyranny',
                        'Fharlanghn, god of travelers',
                        'Talona, goddess of disease and poison',
                        'Helm, god of protection',
                        'Gond, god of craft', 
                        'Lathander, god of birth and renewal', 
                        'Tyr, god of justice']

// intersection

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


// We can memoize API requests
function getPerson(i){
    return axios.get('https://swapi.co/api/people/' + i)
}

// Debounce
// Throttle


/*
    - just like arrays, objects are used to store multiple data sets as key/value pairs
    - key/value pairs are seperated by a comma
    - denoted by {}
*/

let netflix = {
    id: 1,
    name: "The Office",
    season1: {
        seasonInfo: {
            episodeInfo: [{
                    episode: 1,
                    episodeName: "Pilot"
                },
                {
                    episode: 2,
                    episodeName: "Diversity Day"
                },
                {
                    episode: 3,
                    episodeName: "Health Care"
                },
                {
                    episode: 4,
                    episodeName: "The Alliance"
                },
                {
                    episode: 5,
                    episodeName: "Basketball"
                },
                {
                    episode: 6,
                    episodeName: "Hot Girl"
                },
            ]
        }
    },
    season2: {},
    season3: {}
};

// where arrays use [] to access properties, objects use dot (.) notation

// console.log('All data:', netflix);
// console.log('Just season info:', netflix.season1.seasonInfo)
// console.log('Specific episode name:', netflix.season1.seasonInfo.episodeInfo[3].episodeName)

console.log(`episode name: ${netflix.season1.seasonInfo.episodeInfo[2].episodeName} - episode number: ${netflix.season1.seasonInfo.episodeInfo[2].episode}`);



/*
    JSON OBJECTS

    -JSON stands for JavaScript Object Notation
    - the JSON syntax is derived from regular obeject syntax, but TEXT only
    - JSON is a string. JSON data is what we receive when we fetch a server.
    Since JSON is text it needs to be converted to native JS object to be used.

*/

let spaceJam = {
    toonSquad: {
        human: 'Michael Jordan',
        rabbit1: 'Bugs Bunny',
        rabbit2: 'Lola Bunny',
        duck: 'Daffy Duck',
        tDevil: 'Tasmanian Devil',
        bird: 'Tweety',
        cat: 'Sylvester',
        pig: 'Porky Pig'
    },
    monstars: {
        0: 'Bupkus',
        1: 'Bang',
        2: 'Nawt',
        3: 'Pound',
        4: 'Blanko'
    },
    nbaPlayers: {
        phoenixSuns: 'Charles Barkley',
        newJerseyNets: 'Shawn Bradley',
        newYorkNicks: 'Patrick Ewing',
        charlotteHornets1: 'Larry Johnson',
        charlotteHornets2: 'Muggsy Bogues'
    }
}

console.log(Object.keys(spaceJam.toonSquad))
console.log(Object.keys(spaceJam.toonSquad.duck))
console.log(Object.keys(spaceJam.toonSquad).toString())

console.log(Object.values(spaceJam.nbaPlayers))
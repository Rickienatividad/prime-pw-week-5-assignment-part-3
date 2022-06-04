console.log('***** Music Collection *****')
let collection = [];
function addToCollection(title, artist, yearPublished) {
    let album = {
    title: title,
    artist: artist,
    year: yearPublished
    }
    
    collection.push(album);
    return album;
}

console.log(addToCollection('Follow The Leader','Korn', 1998));
console.log(addToCollection('Dirt', 'Alice in Chains', 1992));
console.log(addToCollection('Facelift','Alice in Chains', 1990));
console.log(addToCollection(`Ropin' the Wind`, 'Garth Brooks', 1991));
console.log(addToCollection('Ride the Lightning', 'Metallica', 1984));
console.log(addToCollection(`Peace Sells, But Who's Buying?`, 'Megadeth', 1986));
console.log(collection);

function showCollection(array){
    console.log(`There are ${array.length} items in the list:`);
    for(let i=0; i<array.length; i++){
        console.log(`${array[i].title} published by ${array[i].artist} in ${array[i].year}`);
    }
}
showCollection(collection);


let matchArray = [];
let emptyArray = [];
function findByArtist(artist){
    for(let i=0; i<collection.length; i++){
        if(collection[i].artist === artist){
            matchArray.push(collection[i].artist,collection[i]);  
        }
    }
    if(matchArray.includes(artist)){
        return matchArray;
    }else{
        return emptyArray;
    }  
}

console.log(`in findByArtist()`,findByArtist('Genesis'));
console.log(`in findByArtist()`,findByArtist('Alice in Chains'));
console.log(`in findByArtist()`,findByArtist('Genesis'));
console.log(`in findByArtist()`,findByArtist('Metallica'));

let completeMatch = [];
let noMatch = [];
function search(artist, year){
    for(let i=0; i<collection.length; i++){
        if(collection[i].artist === artist && collection[i].year === year){
            completeMatch.push(collection[i].artist, collection[i].year);
        }
    }
    //return completeMatch;
    if(completeMatch.includes(artist) && completeMatch.includes(year)){
        return completeMatch;
    }else if(typeof(artist) === 'undefined' || typeof(year) === 'undefined'){
        return collection;
    }else{
        return noMatch;
    }
}

console.log(`in search(): no search criteria input. Display collection array:`,search());
console.log(`in search(): matching artist and year found:`, search('Korn', 1998));
console.log('in search(): matching artist, incorrect year. Empty array:', search('Korn', 1993));





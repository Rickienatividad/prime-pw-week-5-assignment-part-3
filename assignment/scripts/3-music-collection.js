console.log('***** Music Collection *****')
let collection = [];
function addToCollection(title, artist, yearPublished) {
    let album = {};
    album.title = [title];
    album.artist = [artist];
    album.year = [yearPublished];
    collection.push(album);
    return album;
}

addToCollection('Follow The Leader','Korn', 1998);
addToCollection('Dirt', 'Alice in Chains', 1992);
addToCollection('Facelift','Alice in Chains', 1990);
addToCollection(`Ropin' the Wind`, 'Garth Brooks', 1991);
addToCollection('Ride the Lightning', 'Metallica', 1984);
addToCollection(`Peace Sells, but Who's Buying?`, 'Megadeth', 1986);
console.log(collection);

function showCollection(array){
    console.log(`There are`, array.length, `items in the list`);
    for(let i=0; i<array.length; i++){
        console.log(String(array[i].title), `published by`, String(array[i].artist), `in`, String(array[i].year));
    }
}
showCollection(collection);

function findByArtist(artist){
    let emptyArray = [];
    let matchArray = [];
    for(let i=0; i<collection.length; i++){
        if(String(collection[i].artist) == artist){
            matchArray.push(String(collection[i].artist));
            return collection[i].artist;
        }
    }
    for(let i=0; i<collection.length; i++){
        if(String(collection[i].artist) != artist){
            return emptyArray;
        }
    }
} 

console.log(findByArtist('Alice in Chains'));
console.log(findByArtist('Genesis'));
findByArtist('Metallica');



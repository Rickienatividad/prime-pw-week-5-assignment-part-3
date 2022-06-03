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
    for(let i=0; i<array.length; i++){
        console.log(`${array[i].title} published by ${array[i].artist} in ${array[i].year}`);
    }
    return (`There are ${array.length} items in the list`);
}
console.log(showCollection(collection));


let matchArray = [];
function findByArtist(artist){
    for(let i=0; i<collection.length; i++){
        if(collection[i].artist === artist){
            matchArray.push(collection[i]);    
        }
    }
    return matchArray;    
}


console.log(findByArtist('Genesis'));
console.log(findByArtist('Alice in Chains'));
console.log(findByArtist('Metallica'));

let completeMatch = [];
function search(artist, year){
    for(let i=0; i<collection.length; i++){
        if(collection[i].artist === artist && collection[i].year === year){
            completeMatch.push(collection[i]);
        }
    }
    return completeMatch;
}

console.log(`no matching criteria. Empty array:`,search('abc', 1943));
console.log('matching artist, incorrect year. Empty array:', search('Korn', 1993));
console.log(`Matching artist and year found:`, search('Korn', 1998));


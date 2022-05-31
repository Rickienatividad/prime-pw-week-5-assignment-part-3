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

addToCollection('twist','korn', 1997);
console.log(collection);


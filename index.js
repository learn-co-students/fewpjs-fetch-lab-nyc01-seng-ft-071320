function fetchBooks() {

}

function renderBooks(books) {
  const main = document.querySelector('main')
  books.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = book.name
    main.appendChild(h2)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
  fetch("https://anapioficeandfire.com/api/books")
  .then(function(response){
    return response.json();
  })
  .then(function(json){
    console.log(json);
    console.log(`${json[0].name} \n${json[1].name} \n${json[2].name} \n${json[3].name} \n${json[4].name} \n${json[5].name} \n${json[6].name} \n${json[7].name} \n${json[8].name} \n${json[9].name}`);
})

return fetch()

});

// Ottieni il titolo di un post con una Promise.
// Crea una funzione getPostTitle(id) che accetta un id e restituisce una Promise che recupera il titolo di un post dal link https://dummyjson.com/posts/{id}

/*  🎯 Bonus: Ottieni l'intero post con l'autore
Crea una funzione getPost(id) che recupera l'intero post. Concatena una seconda chiamata che aggiunge una proprietà user che contiene i dati dell'autore, recuperati dalla chiamata https://dummyjson.com/users/{post.userId}. */

function getPostTitle(id) {

  return new Promise((resolve, reject) => {
    fetch(`https://dummyjson.com/posts/${id}`)
    .then(res => res.json())
    .then(post => resolve(post.title))
    .catch(reject)

})
}

getPostTitle(1)
.then(title => console.log(`Titolo del post:`, title))
.catch(error => console.error(error))
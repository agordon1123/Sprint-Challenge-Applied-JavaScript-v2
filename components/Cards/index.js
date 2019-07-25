// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        console.log('response: ', response)
        console.log('response.data: ', response.data)
        console.log('response.data.articles: ', response.data.articles)
        console.log('response.data.articles.bootstrap: ', response.data.articles.bootstrap[0].authorPhoto)

        const bootstrapArticles = response.data.articles.bootstrap;
        console.log(bootstrapArticles)
        const javascriptArticles  = response.data.articles.javascript;
        console.log(javascriptArticles)
        const techArticles = response.data.articles.technology;
        console.log(techArticles)
        const jqueryArticles = response.data.articles.jquery;
        console.log(jqueryArticles)
        const nodeArticles = response.data.articles.node;
        console.log(nodeArticles)

        const articleSet = [bootstrapArticles, javascriptArticles, techArticles, jqueryArticles, nodeArticles]
        console.log(articleSet)

        articleSet.forEach(article => {
            article.forEach(art => {
                const container = document.querySelector('.cards-container');
                container.appendChild(createCard(art));
            })
        })
    })
    .catch(error => {
        console.log('An unexpected error has occurred. Have you tried unplugging it and plugging it back in again?', error)
    })

function createCard(obj) {
    // Create the DOM elements
    const card = document.createElement('div')
    const headline = document.createElement('div')
    const authorCont = document.createElement('div')
    const imgCont = document.createElement('div')
    const img = document.createElement('img')
    const authorName = document.createElement('span')

    // Set the classes
    card.classList.add('card')
    headline.classList.add('headline')
    authorCont.classList.add('author')    
    imgCont.classList.add('img-container')

    // Set the content
    headline.textContent = obj.headline
    img.src = obj.authorPhoto
    authorName.textContent = obj.authorName

    // Created the structure
    card.appendChild(headline)
    card.appendChild(authorCont)
    authorCont.appendChild(imgCont)
    authorCont.appendChild(authorName)
    imgCont.appendChild(img)

    // Return the result
    return card;
}

// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(response => {
        console.log('response: ', response)
        console.log('response.data: ', response.data)
        console.log('response.data.topics: ', response.data.topics)
        const topics = response.data.topics
        topics.forEach(topic => {
            // Select DOM elements
            const topics = document.querySelector('.topics')
            const topicsDiv = document.createElement('div')

            // Set classes
            topicsDiv.classList.add('tab')

            // Set content
            topicsDiv.textContent = topic

            // Create structure
            topics.appendChild(topicsDiv)
        })
    })
    .catch(error => {
        console.log('An unexpected error has occurred. Have you tried unplugging it and plugging it back in again?', error)
    })
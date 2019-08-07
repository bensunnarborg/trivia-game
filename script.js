// Select HTML and declare variables
const category = document.querySelector('.category');
const question = document.querySelector('.question');
const answer = document.querySelector('.answer');
const showButton = document.querySelector('.showButton');
const newButton = document.querySelector('.newButton');

// Create function to fetch data from API
function fetchData () {
  fetch('http://jservice.io/api/random', {mode: 'cors'})
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      console.log(response);
      category.textContent = (response[0].category.title);
      question.textContent = (response[0].question);
      answer.textContent = (response[0].answer);
    })
}

// Call function on site load 
// **Need to add on load functionality**
fetchData();

// Give show answer button functionality 
showButton.addEventListener('click', (e) => {
  answer.classList.toggle('hide');
  showButton.classList.toggle('hide');
  })

// Give new question button functionality
newButton.addEventListener('click', (e) => {
  answer.classList.toggle('hide');
  showButton.classList.toggle('hide');
  fetchData();
})
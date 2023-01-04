// In todays exercise we will be creating a Mad Libs game.
// If you’ve never played this game, a mad lib is a game where you fill in a bunch of blank inputs with different word types (ie : noun, adjective, verb), and then a story is generated based on the words you chose, and sometimes the story is surprisingly funny.

// In this exercise you work with the HTML code presented below.

// Follow these steps :

// 1) Get the value of each of the inputs in the HTML file when the form is submitted. Remember the event.preventDefault()

let forms = document.forms[0]
let nounInput = document.forms[0].elements[0]
let adjectiveInput = document.forms[0].elements[1]
let personInput = document.forms[0].elements[2]
let verbInput = document.forms[0].elements[3]
let placeInput = document.forms[0].elements[4]
let story = document.getElementById('story')

// 2) Make sure the values are not empty
// 3) Write a story that uses each of the values.
// 4)Make sure you check the console for errors when playing the game.
//5) Bonus: Add a “shuffle” button to the HTML file, when clicked the button should change the story currently displayed (but keep the values entered by the user). The user could click the button at least three times and get a new story. Display the stories randomly.



forms.addEventListener('submit', (event) => {
    // Prevent the default 
    event.preventDefault();

    // Get the value of each of the input
    const noun = nounInput.value;
    const adjective = adjectiveInput.value;
    const person = personInput.value;
    const verb = verbInput.value;
    const place = placeInput.value;

    
    // Display the stories randomly. 
    const storyText = `kjjfkefej, ${person} kfrklfkr ${place} kkflrkfrfl ${adjective} ${noun}. klkrfklrr ${verb} nfnrkfr;f,rr,.`;

    // but keep the values entered by the use
    story.textContent = storyText;
});
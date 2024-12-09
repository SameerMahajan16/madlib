// Array to store the user inputs for the Mad Lib
const wordPrompts = [
    { prompt: "Enter a noun (type of food):", key: "noun1" },
    { prompt: "Enter a verb (action):", key: "verb1" },
    { prompt: "Enter an adjective (describing word):", key: "adjective1" },
    { prompt: "Enter a noun (person):", key: "noun2" },
    { prompt: "Enter a verb (action):", key: "verb2" }
];

// Store the inputs
let userInputs = {};

// Track the current word prompt
let currentWordIndex = 0;

// Clear previous input field and label
document.getElementById("inputWord").value = '';

// Check if we have more prompts to display
if (currentWordIndex < wordPrompts.length) {
    let currentPrompt = wordPrompts[currentWordIndex];

    // Change the prompt text to the next question
    document.getElementById("inputLabel").textContent = currentPrompt.prompt;

    // Show the input field for the user to type in
    document.getElementById("inputWord").style.display = 'inline-block';
    document.getElementById("submitWord").style.display = 'inline-block';
} else {
    // If all words are filled in, show the completed story
    const pizzaStory = `
        One day, a famous pizza chef decided to make the best pizza ever. They grabbed a big piece of ${userInputs.noun1}, 
        and with a sharp knife, began to ${userInputs.verb1} it into tiny pieces. The pizza dough was ${userInputs.adjective1}, 
        just how they liked it. As the ${userInputs.noun2} watched, they carefully ${userInputs.verb2} the pizza in the oven, 
        hoping for the perfect result. The pizza turned out to be absolutely delicious! Everyone loved it, and the chef 
        became famous for their amazing ${userInputs.noun1} pizza!
    `;

    // Display the story
    document.getElementById("pizzaStory").innerHTML = pizzaStory;
    document.getElementById("storyContainer").style.display = 'block';
}

// Event listener to handle when the "Next" button is clicked
document.getElementById("submitWord").addEventListener("click", () => {
    // Get the current word input value
    let userWord = document.getElementById("inputWord").value.trim();

    // Save the word to the userInputs object
    if (userWord !== '') {
        let currentPrompt = wordPrompts[currentWordIndex];
        userInputs[currentPrompt.key] = userWord;

        // Hide the input field and button to simulate "pop out"
        document.getElementById("inputWord").style.display = 'none';
        document.getElementById("submitWord").style.display = 'none';

        // Move to the next word prompt
        currentWordIndex++;

        // Check if more prompts are available
        if (currentWordIndex < wordPrompts.length) {
            let nextPrompt = wordPrompts[currentWordIndex];

            // Change the prompt text for the next question
            document.getElementById("inputLabel").textContent = nextPrompt.prompt;

            // Show the input field for the user to type in
            document.getElementById("inputWord").style.display = 'inline-block';
            document.getElementById("submitWord").style.display = 'inline-block';
        } else {
            // If all words are filled in, show the completed story
            const pizzaStory = `
                One day, a famous pizza chef decided to make the best pizza ever. They grabbed a big piece of ${userInputs.noun1}, 
                and with a sharp knife, began to ${userInputs.verb1} it into tiny pieces. The pizza dough was ${userInputs.adjective1}, 
                just how they liked it. As the ${userInputs.noun2} watched, they carefully ${userInputs.verb2} the pizza in the oven, 
                hoping for the perfect result. The pizza turned out to be absolutely delicious! Everyone loved it, and the chef 
                became famous for their amazing ${userInputs.noun1} pizza!
            `;
            document.getElementById("pizzaStory").innerHTML = pizzaStory;
            document.getElementById("storyContainer").style.display = 'block';
        }
    }
});

// Optional: Allow users to press "Enter" to submit the word
document.getElementById("inputWord").addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        let userWord = document.getElementById("inputWord").value.trim();

        // Save the word to the userInputs object
        if (userWord !== '') {
            let currentPrompt = wordPrompts[currentWordIndex];
            userInputs[currentPrompt.key] = userWord;

            // Hide the input field and button to simulate "pop out"
            document.getElementById("inputWord").style.display = 'none';
            document.getElementById("submitWord").style.display = 'none';

            // Move to the next word prompt
            currentWordIndex++;

            // Check if more prompts are available
            if (currentWordIndex < wordPrompts.length) {
                let nextPrompt = wordPrompts[currentWordIndex];

                // Change the prompt text for the next question
                document.getElementById("inputLabel").textContent = nextPrompt.prompt;

                // Show the input field for the user to type in
                document.getElementById("inputWord").style.display = 'inline-block';
                document.getElementById("submitWord").style.display = 'inline-block';
            } else {
                // If all words are filled in, show the completed story
                const pizzaStory = `
                    One day, a famous pizza chef decided to make the best pizza ever. They grabbed a big piece of ${userInputs.noun1}, 
                    and with a sharp knife, began to ${userInputs.verb1} it into tiny pieces. The pizza dough was ${userInputs.adjective1}, 
                    just how they liked it. As the ${userInputs.noun2} watched, they carefully ${userInputs.verb2} the pizza in the oven, 
                    hoping for the perfect result. The pizza turned out to be absolutely delicious! Everyone loved it, and the chef 
                    became famous for their amazing ${userInputs.noun1} pizza!
                `;
                document.getElementById("pizzaStory").innerHTML = pizzaStory;
                document.getElementById("storyContainer").style.display = 'block';
            }
        }
    }
});

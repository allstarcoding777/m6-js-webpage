// Constructor function to create dog objects
function Dog(name, show, breed, description, mySound, canTalk) {
    this.name = name;
    this.show = show;
    this.breed = breed;
    this.description = description;
    this.mySound = mySound;
    this.canTalk = canTalk;

    // Method to create a greeting message
    this.myGreeting = function() {
        let talkMessage = this.canTalk ? "I can talk!" : "I cannot talk.";
        return `Hello, my name is ${this.name}. I starred in the TV show ${this.show}. My character was a ${this.breed}. ${this.description} ${talkMessage}`;
    };
}

// Create dog objects using the constructor function
const astro = new Dog("Astro", "The Jetsons", "Great Dane", "I was the family dog in a cartoon about a family in the future.", "I sound very intimidating because of my size", true);
const scooby = new Dog("Scooby-Doo", "Scooby-Doo, Where Are You!", "Great Dane", "I am always solving mysteries with my friends.", "I say 'Scooby-Dooby-Doo!'", true);

// Store the dog objects in an array for easy access
const dogs = [astro, scooby];

// Wait for the document to be fully loaded before running the script
document.addEventListener("DOMContentLoaded", function() {
    const outputDiv = document.getElementById('output');

    // Prompt the user to select a dog
    let selectedDogName = prompt("Please enter the name of the dog you want to know more about (e.g., 'Astro' or 'Scooby-Doo'):");
    let selectedDog = dogs.find(dog => dog.name.toLowerCase() === selectedDogName.toLowerCase());

    // Display the selected dog's information or an error message
    if (selectedDog) {
        outputDiv.innerHTML += `<h2>Selected Dog</h2>`;
        outputDiv.innerHTML += `<p>${selectedDog.myGreeting()}</p>`;
        outputDiv.innerHTML += `<h3>Properties:</h3><ul>`;
        for (let property in selectedDog) {
            if (typeof selectedDog[property] !== 'function') {
                outputDiv.innerHTML += `<li><strong>${property}:</strong> ${selectedDog[property]}</li>`;
            }
        }
        outputDiv.innerHTML += `</ul>`;
    } else {
        outputDiv.innerHTML += `<p>Sorry, the dog you selected doesn't exist in our list.</p>`;
    }
});


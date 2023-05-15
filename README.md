# Multiplication App

This project is a simple multiplication app that tests your multiplication skills. The app generates two random numbers and asks you to multiply them. You can submit your answer, and the app will let you know if your answer is correct or not. Your score is displayed on the form, and it is incremented if you answer correctly and decremented if you answer incorrectly. The app uses local storage to store your score, so you can continue playing the game and keep track of your progress. It's a fun and easy way to practice your multiplication skills!

## Demo

You can try out the application by visiting [this link](https://paribhandarkar.github.io/multiplication-app/).

## Technologies Used

- HTML
- CSS
- JavaScript

## Getting Started

To get started with this project, clone the repository and open the `index.html` file in your preferred web browser.

## New Things I Learned

While working on the multiplication app, I learned how to use the "autofocus" and "autocomplete" attributes on input elements. I found that setting "autofocus" was particularly helpful because it automatically focuses the user's attention on a specific input field when the page loads. This can help guide the user's experience and make the form more user-friendly.

I also learned how to use JSON methods to store and retrieve data from local storage. Initially, I was confused about how to update the score value in local storage without resetting it to zero each time the page reloaded. However, I learned that by using JSON.stringify() to store the score in local storage and JSON.parse() to retrieve it, I could update the score value without losing its previous value.

Overall, I found that working with local storage was a useful skill to have as a web developer. It allowed me to store data on the user's computer and retrieve it later, which can be useful for a variety of purposes such as tracking user progress or maintaining user preferences.

## Challenges I faced

One of the challenges I faced when working on the multiplication app was updating the score. Initially, the score would start from 0 every time I refreshed the page, which was not what I wanted. I wanted the score to persist even after the app was closed or the page was refreshed.

To solve this challenge, I decided to store the score in local storage. Local storage is a feature in modern web browsers that allows web developers to store data in the browser. This data persists even after the browser window is closed or the computer is shut down. I created a new function called "storeInLocalStorage()" to store the score in local storage whenever it was updated.

When the app loads, I retrieve the score from local storage and display it on the form. This way, the score remains persistent across page loads and app restarts.

Using local storage to store data in web applications is a common solution to this type of challenge. It allows us to store data locally on the user's computer and retrieve it later, which is useful for maintaining state and keeping track of user progress in web applications.

![image](https://github.com/paribhandarkar/multiplication-app/assets/76446574/e293e714-daf6-4daa-9bd0-98ac021bef77)

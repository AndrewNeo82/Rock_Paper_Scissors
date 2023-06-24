# Rock Paper scissors

I created a web app for the game rock paper scissors. Rock, Paper, Scissors is a hand game typically played between two people. It's a simple game used to make a decision or settle a dispute. Each player simultaneously forms one of three shapes with their hand:

Rock: The player forms a fist with their hand.
Paper: The player extends their hand flat, with the palm facing down.
Scissors: The player extends their hand with the index and middle fingers extended and spread apart, resembling a pair of scissors.

The basic rules of Rock, Paper, Scissors are as follows:

Rock beats scissors (rock smashes scissors).
Scissors beat paper (scissors cut paper).
Paper beats rock (paper covers rock).
When both players have made their choices, they reveal their hand gestures at the same time. The winning gesture is determined by the rules above. If both players make the same gesture, it's a tie, and the game can be played again. The game would be of interest to anyone who wants to play Rock, paper Scissors.

# Technologies used
* HTML
* CSS
* JAVASCRIPT

## Features 

![rpsScreenshot](https://github.com/AndrewNeo82/Rock_Paper_Scissors/assets/90483176/c24d3e27-65af-4f29-901e-516692634ff0)


### Previous Selection

* The game features an area to display the previous pick for both the player and the computer, a message section which gives feedback after each round, a scoreboard to keep track of the score and three choice buttons which shake to simulate the shaking of the hand before each choice.

* The last pick display shows either a red of green border depending on whether the player or the computer won the round.
  
![win](https://github.com/AndrewNeo82/Rock_Paper_Scissors/assets/90483176/e0a3cb0d-f43d-4ff7-9dd3-c01f47bc53bd)
  ### Message 

* The message section will display one from a choice of messages depening on whether the player won or lost the round or if it was a draw.

 ![message](https://github.com/AndrewNeo82/Rock_Paper_Scissors/assets/90483176/7a101fb5-54c3-4610-8cdc-df2e40a8ae0f) ![lose](https://github.com/AndrewNeo82/Rock_Paper_Scissors/assets/90483176/7028c876-8371-42e1-9861-c191b584e6b6)


  ### Game Over

* When either the player or the computer reaches 5 points the choice buttons are hidden and "Game Over" is displayed along with a message informing the player they either won or lost the game. A button to restart the game appears which will then reset everything to the default state when pressed.

 ![over](https://github.com/AndrewNeo82/Rock_Paper_Scissors/assets/90483176/72943755-f147-4167-80ba-ae5175575786)

 ## Future Features 

 * I would like to add a modal for the player to enter a username which opens automatically on page load and insert the username into the game in place of the term "player" to make a better user experience.

## Testing

* I tested the site worked in different browswers, eg Firefox, Edge and Chrome.

* I tested the game worked on PC and mobile devices, testing both android and Iphone.

* I confirmed the site is responsive and works on all device types and in both portrait and landscape on mobile devices.

 ![responsive](https://github.com/AndrewNeo82/Rock_Paper_Scissors/assets/90483176/743d07da-4329-44c3-a463-00e933eb91cc)

* The buttons shake as intended on all device types and rapid pressing of the ssame button in succession will not break the game or affect the game counting of the score.

## Bugs

### Solved

* When i first deployed the website to github pages the message displayed when a round is lost was not working. 

I realised when i had copy pasted the code from my Win message function i had neglected to change "const winMessage = winMessages[winIndex];" to loseMessages[loseIndex];. Once i made this change the function worked as intended.

## Validator Testing

### HTML

* The site passes through the HTML checker with no warnings or errors. [W3C Validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fandrewneo82.github.io%2FRock_Paper_Scissors%2F)

### CSS

* I ran the code through the W3C CSS Validator and it passes with no errors or warnings. [Jigsaw Validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fandrewneo82.github.io%2FRock_Paper_Scissors%2F)

### Javascript 

* The code passes through JShint and there are no errors or warnings.


### Accessability

Running lighthouse confirmed that the colours and fonts were accesible and easy to read.

![lighthouse](https://github.com/AndrewNeo82/Rock_Paper_Scissors/assets/90483176/c9118692-e66d-4111-b32f-c585fed64447)


## Deployment

The site was deployed to github pages. The steps to depoloy were as follows.

* In the Github repository navigate to the settings tab.
* From the source section drop-down menu, select deploy from branch.
* From the branch drop down menu select Main branch and the root folder and save.

The live link can be found here https://andrewneo82.github.io/Rock_Paper_Scissors/

## Credits   

### Content

* The code to make the buttons shake to simulate the shaking of a fist while playing Rock Paper Scissors was taken from [css-tricks](https://css-tricks.com/snippets/css/shake-css-keyframe-animation/) and was published by a Sarah Drasner.

  


*  The explanation of the game Rock Paper Scissors used in this readme was found online.

## Media

The icons are from fontawesome.com.



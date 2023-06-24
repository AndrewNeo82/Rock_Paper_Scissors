# Rock Paper scissors

I created a web app for the game rock paper scissors for my second milestone project. Rock, Paper, Scissors is a hand game typically played between two people. It's a simple game used to make a decision or settle a dispute. Each player simultaneously forms one of three shapes with their hand:

Rock: The player forms a fist with their hand.
Paper: The player extends their hand flat, with the palm facing down.
Scissors: The player extends their hand with the index and middle fingers extended and spread apart, resembling a pair of scissors.
The basic rules of Rock, Paper, Scissors are as follows:

Rock beats scissors (rock smashes scissors).
Scissors beat paper (scissors cut paper).
Paper beats rock (paper covers rock).
When both players have made their choices, they reveal their hand gestures at the same time. The winning gesture is determined by the rules above. If both players make the same gesture, it's a tie, and the game can be played again.

 (responsive.jpg)

## Features.!
![Alt text](assets/images/loss.jpg)![Alt text](assets/images/over.jpg)
![Alt text](assets/images/win.jpg)![Alt text](assets/images/rpsScreenshot.jpg)
### Navigation.

* 

### Front Page

* 

 (assets/images/rpsScreenshot.jpg)


## Testing

* I tested the site worked in different browswers, eg Firefox, Edge and Chrome.

* I confirmed the site is responsive and works on all device types and in both portrait and landscape on mobile devices.

* I confirmed the links to outside sites are all correct and in working order.

* The buttons shake as intended on all device types and rapid pressing of the ssame button in succession will not break the game or affect the game counting of the score.

## Bugs

### solved

* When i first deployed the website to github pages the message displayed when a round is lost was not working. 

I realised when i had copy pasted the code from my Win message function i had neglected to change "const winMessage = winMessages[winIndex];" to loseMessages[loseIndex];. Once i made this change the function worked as intended.



## validator Testing

### HTML

The site passes through the HTML checker with no warnings or errors.

### CSS

* I ran the code through the W3C CSS Validator and it passes with no errors or warnings.


### Accessability

Running lighthouse confirmed that the colours and fonts were accesible and easy to read.

![lighthouse] ![Alt text](assets/images/lighthouse.jpg)

## Deployment
The site was deployed to github pages. The steps to depoloy were as follows.


* In the Github repository navigate to the settings tab.
* From the source section drop-down menu, select the Main Branch.
* Deploy from branch.


The live link can be found here https://andrewneo82.github.io/Rock_Paper_Scissors/

## Credits   

### Content

* The code to make the buttons shake to simulate the shaking of a fist while playing rock paper scissors was taken from https://css-tricks.com/snippets/css/shake-css-keyframe-animation/.

## Media

The icons are from fontawesome.com.



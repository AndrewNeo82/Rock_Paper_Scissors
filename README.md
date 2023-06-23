# Rock Paper scissors

I created a web app for the game rock paper scissors for my second milestone project.

![responsive](https://user-images.githubusercontent.com/90483176/231429240-5adf36cc-c594-4e7f-b0bb-5366567dccb1.png)


## Features.

### Navigation.

* 

### Front Page

* 

![front](https://user-images.githubusercontent.com/90483176/230976497-e7a686c0-8b4f-4a4b-82b1-63cb0cafb11b.jpg)


### Media Page


### Review page

The review page contains one of the reviews of the film which was written by Mark Bartlett for Britflicks website along with a video of interviews with three of the cast members also for Britflicks website.=, the heading here links to the review on the britflicks website.

![review](https://user-images.githubusercontent.com/90483176/230976665-cc7dd213-f5ab-49f9-b1c1-3f0b5c8b356f.jpg)


### Footer

The footer contains links to all the films social media (Twitter, Facebook) as well as the IMDB page.

## Testing

* I tested the site worked in different browswers, eg Firefox, Edge and Chrome.

* I confirmed the site is responsive and works on all device types, i found the font I chose for the logo reverts to the secondary choice on some browsers and devices.

* I confirmed the links to outside sites are all correct and in working order.
* I confirmed that the videos play as intended and the user has control over when the videos play and can open them in full screen.

## Bugs

### solved

* When i first deployed the website to github pages the message displayed when a round is lost was not working. 

I realised when i had copy pasted the code from my Win message function i had neglected to change "const winMessage = winMessages[winIndex];" to loseMessages[loseIndex];. Once i made this change the function worked as intended.



## validator Testing

### HTML

I ran the code through the W3C checker and found the following error Error: Stray end tag i.From line 66, column 210; to line 66, column 213 526;"></i></i></a>

I solved this by deleting this tag.

### CSS

* I ran the code through the W3C CSS Validator and found the following error 213	#photos	wrap is not a flex value : wrap

I solved this by changing  flex: wrap ; to flex-wrap: wrap;

* 320	.trailer iframe	Value Error : width only 0 can be a unit. You must put a unit after your number : 512

I solved this by adding the unit "px" 

http://jigsaw.w3.org/css-validator/validator?lang=en&profile=css3svg&uri=https%3A%2F%2Fandrewneo82.github.io%2Fsmoking-guns%2F&usermedium=all&vextwarning=&warning=1





### Accessability

Running lighthouse confirmed that the colours and fonts were accesible and easy to read.

![lighthouse](https://user-images.githubusercontent.com/90483176/230979099-94499596-9d77-488c-9017-8c5bad418156.jpg)

## Deployment
The site was deployed to github pages. The steps to depoloy were as follows.


* In the Github repository navigate to the settings tab.
* From the source section drop-down menu, select the Main Branch.
* deploy from branch.


The live link can be found here https://andrewneo82.github.io/Rock_Paper_Scissors/

## Credits   

### Content

* The code to make the buttons shake to simulate the shaking of a fist while playing rock paper scissors was taken from codepen.io.

## Media

The icons are from fontawesome.com.



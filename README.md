# **Feed Reader Testing Udacity Project**
_This is the fifth project for frontend nanodegree track_
![feed reader testing](http://res.cloudinary.com/esraa/image/upload/v1530703692/feedReader.png)
## Description
In this project I am practasing unit testing using `Jasmine` which is javascript testing framework and the code is in `jQuery library`.
## what did I test ??
I tested some important features of my RSS fead reader ,I made 3 test suits each suit has some tests **:-**
* This is my first test - it tests to make sure that the allFeeds variable has been defined and that it is not
empty.
* A test that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.
* A test that ensures the menu element is hidden by default. 
* A test that ensures the menu changes visibility when the menu icon is clicked.
* A test that ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container.
* A test that ensures when a new feed is loaded by the loadFeed function that the content actually changes.
## How to run the feed reader?
* Open index.html and you will see the content on  the page 
* To see the hamburger menu content click on it ![menu content](http://res.cloudinary.com/esraa/image/upload/v1530795035/menu.png)  
* At the end of the page you will see all the `jasmine specs` I made and they are all succeeded and zero failures
![Jasmine specs](http://res.cloudinary.com/esraa/image/upload/v1530794823/jasmine_specs.png)
* To see the code of testing suits open feed-reader\jasmine\spec\feedreader.js




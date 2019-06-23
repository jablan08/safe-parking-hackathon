# Social Impact Safe Parking LA - 2 day Hackathon. 
Winner of Best in Category, with a team of 3 UX/UI designers and 3 software engineers.

**UX/UI Team:**
* Gilly Moon 
* Raphael Dacanay
* Daniel Sjarif

**Software Engineers:**
* Joshua Ablan
* Peter Nguyen
* Ethan Kaplan

## Prompt from Safe Parking LA: 

Design a tool that puts all possible resources for transitionally homeless people in one place.  

## Research Findings:
Day one of the hackathon the team conducted interviews with workers of the Safe Parking LA organization and the UX/UI team researched similar resources to SPLA. Here are the [findings](https://docs.google.com/document/d/1oOCQWYvEDx7PFJfUf1qqB0XFcKMsSk2ezSboMcW0LFM/edit?usp=sharing)


## Redefined Problem Statement:  

SPLA operators currently do not have an easy method to provide information about resources to transitionally homeless people. 

How might we provide all the resources together so that the SPLA operators, and homeless people alike, can easily search for resources near them?


## Planning & Wireframes

### The following [high fidelity designs](https://drive.google.com/drive/folders/18GJBYFHP2lqsDij6N5VAUf0hhn9Ja9PY?usp=sharing) were followed when developing SafeLAResources.

This application was built with a mobile first approach. 

### User Stories: 
As an SPLA operator, (or a transitional homeless person), I want to search for resources within a location so that I can help homeless people find resources close to their current location. 

As an SPLA operator, (or a transitional homeless person), I want to filter for specific resources by distance so that I can tell people where they can get things like food, laundry facilities, or a shower near them.  

As an SPLA operator, I want to be able to add and edit resources so that I have autonomy in keeping the database can stay current.  

As someone facing homelessness, I want to be able to see all the resources near me so I know where and when I can get a shower, food etc. 

As someone facing homelessness, I want to be able to filter for specific resources so I only see the things I need the most urgently. 

As someone facing homelessness, I want to see the phone number, address, and website information of the resources near me so I have immediate information about how and when I can access all of my survival needs.  

As an SPLA operator, I want to create an account in order to add or edit resources, so the SPLA has some control over all the information being submitted. (Versus giving homeless folks access to add/edit resources.)  

## Highlighted functions

For the Hackathon, a few resources were added to in the area of Little Tokyo, CA. To test the application please log in with:

Login: 8141013 | Password: 1

Google maps API was used to render the map and set markers for resources.

Geolocation API was used to capture users location if allowed.

Geocode API was used to translate addresses entered in the search bar and new addresses added by the user into latitude and longitude points rendering markers and the location on the map.


## Future development
* Integrate Google Maps so users can access directions to a desired location
* Filters by distance
* Test usability on smaller devices, like iPhone SE and Androids.
* Manage messages when error occur.

## Unsolved problems

* Window position as you click on a resource.



## Technologies used:
* JavaScript ES6
* React.JS
* MongoDB
* Mongoose
* Express
* HTML5
* Styled-Components
* CSS3
* Postman
* FontAwesome
* Google Fonts
* Google Maps API
* Geolocation API
* Geocode API
* Sketch
* Zeplin
# Unit2.PuppyBowl.Final
Team6
Based on Calliope's email:

You are working with the humane society to add a mini-game to their website
The game should allow visitors to create teams of puppies to compete in a "puppy bowl"
Someone has already built out the API and some of the front-end
Work with your team to plan and implement using GitHub Project 
You will be provided with the GitHub link to any existing work that has been done 

Requirements
GitHub Project
Detailed planning tickets with task descriptions for each one
Demonstration that each team member made some contribution on the planning of tickets.
Each student in the pair must have at least one commit towards the final result, in separate branches
A Github repository containing all relevant code for the project
Updated Github repository with new commits
HTML Front-end Requirements
A full HTML document with two divs in which to dynamically render content
One div as a new Puppy Bowl player form input
One div in which to render all current Puppy Bowl participants 
CSS Front-end Requirements
Form is styled and easy to use
All Puppy Bowl players are rendered on card elements with their information
JavaScript Requirements:
Use the DOM to generate and manipulate HTML and styles according to the requirements
Use functions to isolate and re-use code
Use ES6 modules to export and import methods and properties
Demonstrates the use of fetch, async, and await to leverage CRUD against a REST API to perform common functions of a website
Functionality Requirements:
Fetching and rendering all puppy players in the browser
Viewing a single puppy player and their details
Remove a puppy from the roster

Puppy Bowl API Documentation
Introduction
An API for all your Puppy Bowl roster needs. We strive to provide you with an easy to consume API, so you can build out beautiful front end experiences and leave the Data management to us.

We have a small handful of endpoints, each documented below.

API URL Format
All API urls are versioned by which cohort you are a part of. This is to give students the best experience possible (avoiding thousands of puppies to sift through), and to show you a form of versioning.

Our versioning works like this

The base URL is https://fsa-puppy-bowl.herokuapp.com
The first segment of path is /api, every endpoint available to you has that prefix. If you stop there (i.e. if you go to https://fsa-puppy-bowl.herokuapp.com/api) you will find this documentation.
The next segment of path is your cohort name, e.g. /2109-UNF-HY-WEB-PT or /2206-CPU-RM-WEB-PT
The last segment of path is based on the resource or action you are taking, e.g. /players to fetch all players.
So, for example, a call for all players for the class going by the name 2109-UNF-HY-WEB-PT would use the URL https://fsa-puppy-bowl.herokuapp.com/api/2109-UNF-HY-WEB-PT/players.

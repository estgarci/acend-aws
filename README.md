# Acend
[www.acend.site](www.acend.site) is a live airline web app.
Acend communicates with an API and displays the list of flights scheduled at any major airport. The project was built using the MERN stack (MongoDB, Express, React, Node) and deployed using AWS.
***
![Screenshot](acend-site.png)
***
# Purpose
I was inspired by travel websites like Volaris or Expedia, they have a responsive and minimalistic design. An interactive widget is a great way to challenge my knowledge of the MERN stack. 
The main goal of the project was to use it as vehicle for learning new technologies.

There are a few reasons why I think that a travel widget is a great way to learn more about the MERN stack:

1.	Animations in a responsive widget require careful state management
2.	The display of resources requires communication with a production-ready API
3.	Favoriting a resource requires user authentication and authorization
4.	Deploying a website requires secure HTTP communications and DNS configuration
5.	Hosting a modern web app requires the use of cloud technologies like AWS
6.	The project is unique 

# What's in the stack?
### Front
*	Used React + Boostrap
*	Managed state w/ React redux
*	Styled components w/ Bootstrap & managed CSS w/ SCSS
*	Managed animations w/ libraries like Tippy & Framer motion
*	Built a controlled form w/ validation using libraries like Formik & Yup
*	Ensured responsiveness and compatibility w/ mobile devices
### Middle
*	Deployed using an AWS EC2 instance
*	Configured the DNS and TLS with Cloudflare
### Back
*	Built a custom RESTful API using the Express library w/ Node
*	Built an endpoint that supplies resources from an external API
*	Added support for sign up, log in & adding/deleting favorites
*	Used Mongo as a non-relational database, w/ the help of libraries like Mongoose
*	Implemented Google’s O Auth 2.0 token strategy with Passport.js
*	Used JSON Web Tokens and signed cookies to handle all authorization on the server endpoints

# Future improvements
* Refactor SCSS, define a nomanclature for classes
* Rearange the folder structure
* Implement the use of a refresh token for server authorization
* Implement Twitter's and Github's O Auth 2.0 token strategy
* Build a card that shows more details about a selected flight
* Optimize for accesibility
* Improve flight recomendations

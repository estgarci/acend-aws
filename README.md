# [Acend](https://www.acend.site)

![Screenshot](acend-website.png)

An airline website that communicates with a proprietary API and displays the real-time list of flights scheduled at a selected airport. https://acend.site

The purpose of this project was to build a website that would showcase my abilities using the MERN stack (MongoDB, Express, React, Node). The goal was to create a production-ready, mobile friendly application and focus on the search-flights widget. The widget can be found in many travel websites such as [Expedia](https://www.expedia.com/).

## Technologies used and built:

### The Front
* Designed using AdobeXD
* Built w/ React & Bootstrap.js
* Managed state w/ Redux.js
* Managed animations w/ Popper.js and Framer Motion
* Handled CSS using SCSS and Styled-Components
* Implemented AirBnB's react-dates.js, a date picker library
* Built a recomendation search-bar
* Ensured compatability w/ mobile devices

### The Middle
* Deployed application using an AWS EC2 instance
* Configured server using Nginx
* Configured DNS and SSL/TLS with CloudFlare

### The Back
* Used Mongodb w/ mongoose as a database
* Configured a communication with FlightAware, a proprietary API that provides real-time flight tracking data
* Implemented user authentication through Github and Facebook using Passport.js to handle OAuth2.0
* Handled user sessions with JWT tokens
* Configured backend server to allow cross-origin requests

### CI/CD
* Utilised the SCRUM methodology
* Implemented automated testing

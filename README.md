# Auth guard + Nest.js

- in this app I want to make some user accounts, that can login
- guard routes for unsigned users
- give some roles, so that only some can edit 


## What I already have
- I have local-strategy on auth/login route, which receives username and password and returns JWT
- with this JWT I can send get request on /profile to access it
- setup configModule to make .env variables work
- I can create a new user in database


## What I wanna do now
- get users from mongodb rather than local
- bcrypt the passwords
- try to deploy it somewhere
- setup swagger
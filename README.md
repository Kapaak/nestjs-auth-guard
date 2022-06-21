# Auth guard + Nest.js

- in this app I want to make some user accounts, that can login
- guard routes for unsigned users
- give some roles, so that only some can edit

## What I already have

- I have local-strategy on auth/login route, which receives username and password and returns JWT via jwt-strategy
- with this JWT I can send get request on /profile to access it
- setup configModule to make .env variables work
- db connection
- setup swagger
- get data from mongoDb -> so that I can start fetching users from mongo rather than local
- get users from mongodb rather than local

## What I wanna do now

- authguard users routes
- bcrypt the passwords
- try to deploy it somewhere

## Weird behavior

- auth/login in appController is using type UserDto, that accepts also id, that is not necessary there -> is it even necessary at all to write it myself?

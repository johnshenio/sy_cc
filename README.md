# Full Stack Frontend Challenge

The point of this challenge is for interviewing candidates to show us how they
would work through a small frontend application with a pre-written "API" in Go.

This project translates to a real-life Shipyard application in that it bootstraps
itself with React and Redux and renders content fetched from a backend API.

# Project Layout

- `app` directory contains the Go code for the application.
It is a single `main.go` file that will run as a Go binary.

In order to run the backend (this Go script), you will need to have Go installed
on your machine.
You can find instructions for doing so [here](https://golang.org/doc/install).

The easiest way to run the Go program is to run, from the root of this repo,
`go run app/main.go`.

You may optionally run `go build -o server ./app/` and then `./server` to run the program
as well.

- `web` directory contains all of the frontend code.
This includes the Javascript for the application as well as a small Less file
for styling.
We currently have the application set up to compile `web/styles/app.less` into
CSS with a link to it in our index.html source.

The other miscellaneous files in the root of the repo are normal configuration
files for the technologies used in the application.

# Project Requirements

The goal of the challenge is to add some Javascript code to the existing
bootstrap using the React and Redux frameworks to build out two pages in
the application.
We've made a small Go program that serves an index.html and two API endpoints
for users. See below for the API specifications.

The first page should be at `/users`, listing all of the users in
the application in a table.
The table should include exactly the following fields for each user:
- `email`
- `first_name`
- `last_name`

The Email column in the table should link to the second page at `/users/:userID`
where `:userID` is the id of the user.
This second page should display all fields for the individual user, which include:
- `id`
- `email`
- `first_name`
- `last_name`
- `favorite_color`
- `number_of_pets`

## Specifics

### Prettiness
The application **DOES NOT** have to be pretty.
The purpose of the challenge is to evaluate functionality and code, not looks.

In addition to the general look and feel of the application,
the application **DOES NOT** need to be modile or tablet friendly.
Working on a landscape desktop browser is the only requirement for devices.

### Single Page
The application should be a single page application.
The browser should not refresh when clicking on links.
The application should be served at `http://127.0.0.1:8080`.
Please let us know if you change that address for any reason.

### NPM and installed packages
We currently have NPM as the package manager.
Feel free to change to Yarn if you'd like. If you do, then let us know during your
submission.

Also feel free to add or remove any packages that you do or do not need
while building out the solution.

### Webpack
The current setup is working with Webpack 4.46.0.
We know that there is another major version 5 that is also available.
You may upgrade to a newer version of Webpack but that will likely cause other
breaking changes with related packages.

### Code Changes
You are allowed to change any code already provided in this repo.
If you don't like the project layout, feel free to change that as well.
Again, you may add any packages and functionality to the project you see fit.

## Backend
The "API" for the backend is served by the `app/main.go` program.
There are two endpoints for fetching a collection of users and for fetching a
single user.

The endpoint `GET /api/users/` will return an array of user objects that look
something like this:
```
[
  {
    "id": "71dd1ac0-4c4b-4be0-a581-59954ca27512",
    "first_name": "Abe",
    "last_name": "Lincoln",
    "email": "pres16@unitedstates.com",
    "favorite_color": "Orange",
    "number_of_pets": 0
  },
  {
    "id": "d5496db1-28b1-4bb0-bdfd-65984acb3838",
    "first_name": "Eric",
    "last_name": "Elsken",
    "email": "eric@shipyardapp.com",
    "favorite_color": "Purple",
    "number_of_pets": 1
  },
  ...
]
```

The endpoint `GET /api/users/:userID` will return a single user object that looks
something like this:
```
{
  "id": "f0ac0f1b-caad-45fb-a174-dddd3d419c6f",
  "first_name": "Ada",
  "last_name": "Lovelace",
  "email": "ada.lovelace@computers.io",
  "favorite_color": "red",
  "number_of_pets": 0
}
```
where `:userID` is the exact `id` of a user.

If a user does not exist with `id`, then you will get a 400 status and a response
body that looks something like:
```
{"error":"user does not exist"}
```

### index.html
All other endpoints not described above will result in the contents of
`IndexHTML` in `app/main.go` to be served.

### Fetching the API
There are two functions available in `web/app/api/index.js` that return
Promise(s) of the parsed JSON for each of these endpoints.
You may use those directly, modify them, or use something else that you see fit.

# What if I have questions?

You can reach out to the person who gave you the challenge.

# How long should this take?

This should take around two hours and should be completed within
three business days of receiving the challenge.
We realize that extenuating circumstances can come up,
so if you spend more time on this or need more time to complete it - let us know.
We're constantly iterating on this project and are happy to work with you to
either adjust the project or the timeline.

Do your best work.
Your submission should be a very good indicator of your code in a real project.

# Submitting

You can submit your solution by emailing an archive (zip or tar) of the entire
repo directory to tech@shipyardapp.com or to the person who gave you the challenge.

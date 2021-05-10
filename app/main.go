package main

import (
	"encoding/json"
	"errors"
	"fmt"
	"net/http"
	"strings"

	"github.com/google/uuid"
)

const IndexHTML = `<!doctype html>
<html>
	<head>
		<link rel="stylesheet" href="http://127.0.0.1:8081/assets/stylesheets/app.css" />
	</head>
	<body>
		<div id="main" class="main"></div>

		<script type="text/javascript" src="http://127.0.0.1:8081/assets/javascripts/runtime.js"></script>
		<script type="text/javascript" src="http://127.0.0.1:8081/assets/javascripts/vendors.js"></script>
		<script type="text/javascript" src="http://127.0.0.1:8081/assets/javascripts/app.js"></script>
	</body>
</html>`

func main() {
	http.HandleFunc("/api/users/", func(w http.ResponseWriter, r *http.Request) {
		if r.URL.Path == "/api/users/" {
			sendData(w, users, http.StatusOK)
			return
		}

		id := strings.TrimPrefix(r.URL.Path, "/api/users/")
		var result *User
		for _, user := range users {
			if user.ID.String() == id {
				result = &user
				break
			}
		}

		if result == nil {
			sendError(w, errors.New("user does not exist"), http.StatusBadRequest)
			return
		}

		sendData(w, *result, http.StatusOK)
	})

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprint(w, IndexHTML)
	})

	http.ListenAndServe(":8080", nil)
}

func sendData(w http.ResponseWriter, data interface{}, status int) {
	w.Header().Add("Content-Type", "application/json")
	w.WriteHeader(status)

	e := json.NewEncoder(w)
	e.Encode(data)
}

func sendError(w http.ResponseWriter, err error, status int) {
	w.Header().Add("Content-Type", "application/json")
	w.WriteHeader(status)

	e := json.NewEncoder(w)
	e.Encode(map[string]interface{}{
		"error": err.Error(),
	})
}

var users = []User{
	{
		ID:            mustID(),
		FirstName:     "Abe",
		LastName:      "Lincoln",
		Email:         "pres16@unitedstates.com",
		FavoriteColor: "Orange",
		NumberOfPets:  0,
	},
	{
		ID:            mustID(),
		FirstName:     "Eric",
		LastName:      "Elsken",
		Email:         "eric@shipyardapp.com",
		FavoriteColor: "Purple",
		NumberOfPets:  1,
	},
	{
		ID:            mustID(),
		FirstName:     "Hiccup",
		LastName:      "Haddock",
		Email:         "hhh3@berk.gov",
		FavoriteColor: "#243f6f",
		NumberOfPets:  1,
	},
	{
		ID:            mustID(),
		FirstName:     "Trish",
		LastName:      "Person",
		Email:         "trish.person@gmail.com",
		FavoriteColor: "Quail Egg Blue",
		NumberOfPets:  12,
	},
	{
		ID:            mustID(),
		FirstName:     "Ada",
		LastName:      "Lovelace",
		Email:         "ada.lovelace@computers.io",
		FavoriteColor: "red",
		NumberOfPets:  0,
	},
	{
		ID:            mustID(),
		FirstName:     "John",
		LastName:      "Forstmeier",
		Email:         "john@shipyardapp.com",
		FavoriteColor: "plaid",
		NumberOfPets:  0,
	},
}

func mustID() uuid.UUID {
	id, err := uuid.NewRandom()
	if err != nil {
		panic(err)
	}
	return id
}

type User struct {
	ID uuid.UUID `json:"id"`

	FirstName string `json:"first_name"`

	LastName string `json:"last_name"`

	Email string `json:"email"`

	FavoriteColor string `json:"favorite_color"`

	NumberOfPets uint `json:"number_of_pets"`
}

Hyperlink : https://wmdd4936-parthkumarsoni.herokuapp.com/

How to build and run the project:
1. Download the project from git repository provided below.
2. Open the code in Visual Studio Code.
3. Open the terminal and type "npm install".
4. After that type "npm start".
5. Visit "http://localhost:3000/" or "http://localhost:8080/" to use the application.

Project Description: 
This project lets you to add your favourite WWE Superstar Card details to the database. You can also play Trump Card Game with these cards.

Features:
1. These project database has a virtual property named "winPercentage".


Instructions: 
1. You can add details of WWE Superstar by simply submitting the form.
2. Below the form there are two randomly selected cards. One is for you and other is for your opponent. You can see details  of your card while that of opponent is hidden.
3. Select the best criteria you think your card can defeat opponent's card. Criteria are weight, height, matches, win, defeats and Win Percentage.
4. Once you click any of these, result would be shown.
5. And you can play again always :)

APIs :
1. Endpoint : "/api/v1/stars/"
Method : GET
Description : This endpoint returns all the star details stored in the database.
Example: GET /api/v1/stars/ returns following
	[
    {
        "_id": "624207a65cdc9828a8ee32a4",
        "title": "The Great Khali",
        "weight": 193,
        "height": 2.18,
        "matches": 730,
        "wins": 444,
        "defeats": 259,
        "__v": 0,
        "winPercentage": "60.82",
        "id": "624207a65cdc9828a8ee32a4"
    },
    {
        "_id": "62421a5d2d9f5388d8d85810",
        "title": "The Undertaker",
        "weight": 45,
        "height": 2.01,
        "matches": 454,
        "wins": 56,
        "defeats": 213,
        "__v": 0,
        "winPercentage": "12.33",
        "id": "62421a5d2d9f5388d8d85810"
    }
]

2. Endpoint : "/api/v1/stars/:numberOfStars"
Method : GET
Description : This endpoint returns randomly selected number of stars provided in query parameter from the database. 
Example : GET "api/v1/stars/3" returns following
	[
    {
        "_id": "624221911268a75cd4c38847",
        "title": "Kenny Omega",
        "weight": 91,
        "height": 1.83,
        "matches": 1230,
        "wins": 703,
        "defeats": 486,
        "__v": 0,
        "winPercentage": "57.15",
        "id": "624221911268a75cd4c38847"
    },
    {
        "_id": "624207a65cdc9828a8ee32a4",
        "title": "The Great Khali",
        "weight": 193,
        "height": 2.18,
        "matches": 730,
        "wins": 444,
        "defeats": 259,
        "__v": 0,
        "winPercentage": "60.82",
        "id": "624207a65cdc9828a8ee32a4"
    },
    {
        "_id": "6242256d1268a75cd4c38857",
        "title": "Meiko Satomura",
        "weight": 66,
        "height": 1.57,
        "matches": 1006,
        "wins": 603,
        "defeats": 362,
        "__v": 0,
        "winPercentage": "59.94",
        "id": "6242256d1268a75cd4c38857"
    }
]

3. Endpoint : "/api/v1/stars/"
Method : POST
Description : This endpoint allows you to save star details to the database.
Example: POST /api/v1/stars with body request 
	{
    "title":"The Great Khali",
    "weight": 193,
    "height": 2.18,
    "matches": 730,
    "wins": 444,
    "defeats": 259
}
 
returns 

{
    "data": {
        "_id": "624cff0c64b4e7548cf10be8",
        "title": "The Great Khali",
        "weight": 193,
        "height": 2.18,
        "matches": 730,
        "wins": 444,
        "defeats": 259,
        "__v": 0,
        "winPercentage": "60.82",
        "id": "624cff0c64b4e7548cf10be8"
    }
}



4. Endpoint : "/api/v1/stars/validateStar"
Method : POST
Description : This endpoint returns errors if there is any mistake or missing request body sent for storing into the database.
Example: POST /api/v1/stars/validateStar with request body
{
    "title":"The Great Khali",
    "weight": 193,
    "height": 2.18,
    "matches": 730,
    "wins": 444,
    "defeats": 259
}

returns

{
    "errors": []
}


POST /api/v1/stars/validateStar with request body
{
    "title":"The Great Khali",
    "weight": 193,
    "height": 2.18,
    "matches": 730,
    "wins": 760,
    "defeats": 259
}

returns

{
    "errors": [
        "Wins are greater than matches"
    ]
}





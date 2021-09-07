
const { goodOrBad } = require("./utils")

const likeVar = process.argv[2]
const movie = process.argv[3]

goodOrBad(likeVar, movie)

/*const { yummyYuk } = require ("./utils") // "./utils" is pulling function yummyYuk from app.js - see app.js

const likeyVar = process.argv[2] // process.argv accesses what's ran in the CLI
const sweets = process.argv[3] // argv, comes up as an array automatically. 
const chocolate = process.argv[4] // the number starts at index 0 = node.js  1 = app.js ~ these first 2 are useless   2 = 

yummyYuk(likeyVar, sweets, chocolate)*/


/*const {series} = require ("./utils") // pulls the function 'series' from index.js in 'utils' folder - see line 25 in index.js

const watch = process.argv[2] // it assigns whats typed in the console at position 2 - to a variable/const called 'watch'

const thriller = process.argv[3] // pulls the third item and assigns that to a const 'thriller'
const horror = process.argv[4]
const comedy = process.argv[5]

series(watch, thriller, horror, comedy)*/

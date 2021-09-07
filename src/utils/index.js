exports.goodOrBad = (likeVar, movie) => {
    if (likeVar === "good") {
    //    console.log(`I think ${movie} is good`)

    const stringyObj = JSON.stringify({
        name: movie,
        like: likeVar,
    })
    fs.writeFileSync("./storage.json", stringyObj)
    console.log(fs.readFileSync("./storage.json"))
    } else if (likeVar === "bad"){
        console.log(` I think ${movie} is bad`)
    } else{
        console.log("incorrect input")
    }
}
module.exports = goodOrBad

 /*exports.yummyYuk = (likeyVar, sweets, chocolate) => {
  if (chocolate) {
    if (likeyVar === "delicious"){
        console.log(`These ${sweets} and ${chocolate} are good`)
    } else if (likeyVar === "disgusting"){
        console.log(`These ${sweets} and ${chocolate} are horrific`)
    } else {
        console.log("incorrect input")
    }
}
 }
*/
//
/*exports.series = (watch, thriller, horror, comedy) => {
    if ( watch === "super"){
        console.log(`This ${thriller} was absolutley great`)
    } else if (watch === "horror"){
        console.log(`Wow, ${horror} was super scary, think next time I'll watch ${comedy}`)
    }
}*/
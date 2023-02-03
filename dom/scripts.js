function compareVal() {
    let user_answer = document.querySelector("input").value
    let err = document.getElementById("err")
    let img = document.getElementById("my_img")
    if (user_answer == "") {
        err.innerHTML = "Please enter a number."
    } else if (user_answer > 9 || user_answer < 0) {
        img.src = "https://media.giphy.com/media/pK6k4BNalmx44CQj3v/giphy.gif"
        err.innerHTML = "Out of range!"
        err.style.color = "red"
    } else {
        if (user_answer == correct_answer) {
            img.src = "https://media.giphy.com/media/KEVNWkmWm6dm8/giphy.gif"
            err.innerHTML = "That's correct!"
            err.style.color = "green"
        } else if (user_answer > correct_answer) {
            img.src = "https://media.giphy.com/media/UX06yZ6erE0fQtU1Sd/giphy.gif"
            err.innerHTML = "Too high!"
            err.style.color = "red"
        } else if (user_answer < correct_answer) {
            img.src = "https://media.giphy.com/media/ibY7K8u0YSiqZpDjEO/giphy.gif"
            err.innerHTML = "Too low!"
            err.style.color = "red"
        } else {
            img.src = "https://media.giphy.com/media/F3BeiZNq6VbDwyxzxF/giphy.gif"
            err.innerHTML = "Incorrect Input!"
            err.style.color = "red"
        }
    }
}

// Random Number between 0 and 9 (both included)
let correct_answer = Math.floor(Math.random() * 10);
console.log(correct_answer)
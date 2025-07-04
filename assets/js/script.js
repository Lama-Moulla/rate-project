const stars = document.querySelectorAll(".stars i")
const alertBox = document.querySelector(".alart")

const messages = {
    1: "Bad",
    2: "Not Bad",
    3: "Good",
    4: "Very Good",
    5: "Excellent",
}

stars.forEach( (number, index) => {

    number.addEventListener("click", () =>{

        stars.forEach( (element) => {
            element.classList.remove("fa-solid")
        })

        for (let i = 0; i <= index; i++) {            
            stars[i].classList.add("fa-solid")
        }

        const rating = index + 1
        alertBox.textContent = messages[rating]

        /* setTimeout(() => {
            stars.forEach(star => {
                star.classList.remove("fa-solid")
            })
            alertBox.textContent = ""
        }, 5000) */
    })
})
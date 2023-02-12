const genBtn = document.querySelector(".new");
const clearBtn = document.querySelector(".clear");
let list = document.querySelector("li");

function getRandomDogImage() {
    fetch("https://dog.ceo/api/breeds/image/random")
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            let imageEl = document.querySelector(".dog-image");
            imageEl.src = data.message;

            list.appendChild(imageEl);

        })
        .catch((error) => console.log(error));
}

genBtn.addEventListener("click", getRandomDogImage);

clearBtn.addEventListener("click", function () {
    list.innerHTML("");
})


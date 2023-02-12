const buttonEl = document.querySelector(".new")

async function getImage() {
    fetch("https://xkcd.vercel.app/?comic=latest")
        .then((response) => response.json())
        .then((data) => {
            let imageEl = document.querySelector('.image');
            imageEl.src = data.img;

            list.appendChild(imageEL);
        })
        .catch((error) => console.log(error));
}

buttonEl.addEventListener("click", getImage)
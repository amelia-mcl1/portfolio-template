const winImg = document.getElementById("winImg")

fetch(url="https://source.unsplash.com/random/?plants/200").then((response) => winImg.src = (response.url));
const jokeContainer = document.getElementById('joke')
const btn = document.getElementById('btn')
const url = 'https://v2.jokeapi.dev/joke/Programming?type=single'
const risitas = new Audio('./sounds/risitas.mp3')

let getJoke = () => {
    jokeContainer.classList.remove("fade");
    fetch(url)
        .then(data => data.json())
        .then(item => {
            jokeContainer.innerHTML = `${item.joke}`;
            jokeContainer.classList.add("fade");
        })
        .catch(error => {
            console.log('Error', error)
        })
    risitas.play()
}
btn.addEventListener("click", getJoke);

fetch('https://icanhazdadjoke.com/slack')
.then(data => data.json())
.then(jokeData => {
    const jokeText = jokeData.attachments[0].text;
    const jokeElem = document.getElementById('jokeElem');

    jokeElem.innerHTML = jokeText;
})
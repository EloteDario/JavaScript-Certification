const footballTeam = {
  team: "Elote",
  year: 2000,
  headCoach: "Elotiño",
  players: [
    {name: "sigma", position: "forward", isCaptain: true},
    {name: "67", position: "midfielder", isCaptain: false},
    {name: "61", position: "defender", isCaptain: false},
    {name: "toilet", position: "goalkeeper", isCaptain: false},
    ] 
}

const coach = document.getElementById('head-coach');
const teamNameSpan = document.getElementById('team');
const yearSpan = document.getElementById('year');

coach.textContent = footballTeam.headCoach
team.textContent = footballTeam.team
year.textContent = footballTeam.year

const teamContainer = document.querySelector(`#player-cards`)
teamContainer.innerHTML = footballTeam.players.map((player) => {
  if (player.isCaptain) {
    return `<div class="player-card">
  <h2>(Captain) ${player.name}</h2>
  <p>Position: ${player.position}</p>
</div>`
  } else {return `<div class="player-card">
  <h2>${player.name}</h2>
  <p>Position: ${player.position}</p>
</div>`}
}).join("")

const options = document.querySelector(`#players`)

options.addEventListener("change", () => {
  
  const filtradoArr = footballTeam.players.filter((elemento) => {
  return elemento.position === options.value
  })

  
  teamContainer.innerHTML = filtradoArr.map((player) => {
  if (player.isCaptain) {
    return `<div class="player-card">
  <h2>(Captain) ${player.name}</h2>
  <p>Position: ${player.position}</p>
</div>`
  } else {return `<div class="player-card">
  <h2>${player.name}</h2>
  <p>Position: ${player.position}</p>
</div>`}
}).join("")
  if ("all" === options.value) {
    teamContainer.innerHTML = footballTeam.players.map((player) => {
  if (player.isCaptain) {
    return `<div class="player-card">
  <h2>(Captain) ${player.name}</h2>
  <p>Position: ${player.position}</p>
</div>`
  } else {return `<div class="player-card">
  <h2>${player.name}</h2>
  <p>Position: ${player.position}</p>
</div>`}
}).join("")
  }

}) 

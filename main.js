function createGame(team1, time, team2) {
    return `
    <li>
        <img src="./assets/icon-${team1}.svg" alt="Bandeira ${team1}">
        <strong>${time}</strong>
        <img src="./assets/icon-${team2}.svg" alt="Bandeira ${team2}">
    </li>
    `
}

let delay = -0.3;
function createCard(date, day, games) {
    delay = delay + 0.3;
    return `
        <div class="card" style="animation-delay: ${delay}s">
                <h2>${date} <spam>${day}</spam>
                </h2>
                <ul>
                    ${games}
                </ul>    
        </div>
    `
}

document.querySelector("#cards").innerHTML = 
    createCard("24/11", "quinta", createGame("switzerland", "07:00", "cameroon") + createGame("brazil", "16:00", "serbia")) +
    createCard("28/11", "segunda", createGame("cameroon", "07:00", "serbia") + createGame("brazil", "13:00", "switzerland")) +
    createCard("02/12", "sexta", createGame("cameroon", "16:00", "brazil") + createGame("serbia", "16:00", "switzerland")) 

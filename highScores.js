const highScoresList = document.getElementById('highScoresList');
const resetBtn = document.getElementById('bttn');
const highScores = JSON.parse(localStorage.getItem('highScores') || []);

highScoresList.innerHTML = highScores.map( score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`;
}).join("");


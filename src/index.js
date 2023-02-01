import './style.css';
import {
  refresh, form, player, score,
} from './modules/declare.js';
import getScores from './modules/getscore.js';

getScores();

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/kN0uEuCAtmzgUqRYuCdv/scores/', {
    method: 'POST',
    body: JSON.stringify({
      user: player.value,
      score: score.value,
    }),
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
  });
  // window.location.reload();
  player.value = '';
  score.value = '';
});

refresh.addEventListener('click', () => {
  window.location.reload();
});

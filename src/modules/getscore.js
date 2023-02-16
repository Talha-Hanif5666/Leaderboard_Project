import { scoreDiv } from './declare.js';
// Game id kN0uEuCAtmzgUqRYuCdv
const getScores = async () => {
  const scores = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/:Sc5sWqEYzJUlOl6Y7IlD/scores/');
  const res = await scores.json();
  const strObj = JSON.stringify(res.result);
  const parseObj = JSON.parse(strObj);

  parseObj.forEach((obj) => {
    scoreDiv.innerHTML += `
    <tr>
    <td>${obj.user}</td> 
    <td> ${obj.score}</td><br></tr>`;
  });
};

export default getScores;
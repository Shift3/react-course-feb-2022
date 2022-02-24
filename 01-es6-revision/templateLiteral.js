// Old way to use strings
const word1 = 'Mehdi';
const word2 = 'Aitbrahim';

const oldWayFullName = word1 + ' ' + word2;
console.log(oldWayFullName);

// New way to use strings
const newWayFullName = `${word1} ${word2}`;
console.log(newWayFullName);

// Old way for dealing with return to new line
const oldWaySentence = 'Learn \n React.js';
console.log(oldWaySentence);

// New way for dealing with return to new line
const newWaySentence = `Learn
React.js
`;
console.log(newWaySentence);

git branch -m ea-1-es6revision main
git fetch origin
git branch -u origin/main main
git remote set-head origin -a
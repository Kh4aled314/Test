const { greet } = require('./utils/greet');
const { getTasks } = require('./tasks');

function main() {
  console.log(greet('Git Learner'));
  const tasks = getTasks();
  console.log(`You have ${tasks.length} tasks.`);
}

main();

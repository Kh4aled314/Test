const { greet } = require('../src/utils/greet');
const { getTasks, addTask } = require('../src/tasks');

let passed = 0;
let failed = 0;

function assert(condition, message) {
  if (condition) {
    passed++;
    console.log(`  ✓ ${message}`);
  } else {
    failed++;
    console.log(`  ✗ ${message}`);
  }
}

console.log('Running tests...\n');

assert(greet('World').includes('World'), 'greet includes name');
assert(getTasks().length === 4, 'starts with 4 tasks');

const before = getTasks().length;
addTask('New task');
assert(getTasks().length === before + 1, 'addTask increases count');

console.log(`\n${passed} passed, ${failed} failed`);

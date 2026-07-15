const tasks = [
  { id: 1, title: 'Learn git init', done: true },
  { id: 2, title: 'Make your first commit', done: false },
  { id: 3, title: 'Create a branch', done: false },
  { id: 4, title: 'Push to GitHub', done: false },
];

function getTasks() {
  return tasks;
}

function addTask(title) {
  const id = tasks.length + 1;
  tasks.push({ id, title, done: false });
  return id;
}

module.exports = { getTasks, addTask };

/*Generate and print the multiplication tables(only 10) for the numbers 2, 3, and 4  using loops. Each table should be space-separated integers, and each table should start on a new line.*/
const prompt = require("prompt-sync")();
let n1 = 2, n2 = 3, n3 = 4;
for (let i = 1; i <= 10; i++)   process.stdout.write((i * n1) + " "); console.log();
for (let i = 1; i <= 10; i++)   process.stdout.write((i * n2) + " "); console.log();
for (let i = 1; i <= 10; i++)   process.stdout.write((i * n3) + " "); console.log();
const fs = require('fs');

/* fs.readFile('D:\\Node js\\code-with-harry\\file.txt', 'utf8', (err, data) => {
    console.log(err, data);
}); */

const a = fs.readFileSync('D:\\Node js\\code-with-harry\\file.txt');
console.log(a.toString());
console.log("Finished Reading file");

// fs.writeFile('D:\\Node js\\code-with-harry\\file.txt', "This is my data", () => {
//     console.log("Written to the file");
// });

const b = fs.writeFileSync('D:\\Node js\\code-with-harry\\file.txt', "Hello my name is himanshu");
console.log(b);
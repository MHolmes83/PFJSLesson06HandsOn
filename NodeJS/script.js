// const http = require('http');

// const hostname = '192.168.0.206';
// const port = 8080;

// const server = http.createServer((req, ) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello, World!');
// }); 

// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}`);
// });

var x = 33;
console.log(typeof x);

x = 'Powered by Woz';
console.log(typeof x);

x = true
console.log(typeof x);

x = undefined;
console.log(typeof x);

var company = {
    Name: 'Woz U',
    Address: 'Scottsdale, AZ',
    Contact: '(833) 228-7589',
    Email: 'info@woz-u.com'
};

console.log('Information of variable company: ', company);

console.log('Type of variable company: ', typeof company);

function multiply(num1, num2) {
    return num1 * num2;
}

var x = 5;
var y = 3;

console.log('Multiplication of ', x, 'and', y, 'is', multiply(x, y), '.');

var x = 'Welcome to Woz U';
var y = 'Node.js Basics';
var z = ['Woz U', 'for', 'Life'];

console.log(x);

console.log(y);

console.log('Concat Using (+) : ', x + y);

console.log('Concat Using Function : ', x.concat(y));

console.log('Split string: ' , x.split(' '));

console.log('Join string: ' , z.join(' '));

console.log('Char at Index 5: ', x.charAt(5));
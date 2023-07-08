import url from 'node:url';

const myURL = new URL('https://example.org');
myURL.pathname = '/a/b/c';
myURL.search = '?d=e';
myURL.hash = '#fgh';
myURL.password= "123";

console.log(myURL.href);
console.log(myURL.toString());

const myURL2 = new URL('https://example.com/?abc=123');
console.log(myURL2.searchParams.get('abc'));
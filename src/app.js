import 'bootstrap';

import './scss/app.scss';

import inline from 'inline-critical' ;

var html = fs.readFileSync('https://unisecure.dk/', 'utf8');

var critical = fs.readFileSync('https://unisecure.dk/wp-content/cache/min/1/wp-content/themes/pro/framework/dist/css/site/stacks/renew-a8671f2383c22dd3e3be71baf498c988.css', 'utf8');

var inlined = inline(html, critical);

console.log( inlined );
var fs = require('fs');
var Dataview = require('../');

var dv = new Dataview();

var data = [{
	name: 'rss',
	list: [3, 4, 5, 8, 9, 10, 2]
}, {
	name: 'vss',
	list: [1, 3, 2, 5, 10, 6, 5]
}];

var html = dv.generate(data);

fs.writeFileSync('./test.html', html);

console.log('over~');
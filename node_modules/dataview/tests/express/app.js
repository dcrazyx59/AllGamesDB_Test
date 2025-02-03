var http = require('http');
var path = require('path');
var express = require('express');
var app = express();

app.set('view engine', 'jade');
app.set('views', path.join(__dirname, 'views'));

app.get('*', function(req, res) {
	res.render('test', {
		title: '支付数据',
		height: 500,
		xAxis: ['1天', '2天', '3天', '4天', '5天', '6天', '7天'],
		datas: [{
			name: 'rss',
			list: [3, 4, 5, 8, 9, 10, 2]
		}, {
			name: 'vss',
			list: [1, 3, 2, 5, 10, 6, 5]
		}, ]
	})
})


var server = http.createServer(app);
server.listen(8866);

console.log('server started on http://127.0.0.1:' + 8866 + '/');
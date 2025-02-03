/*
 * Data view
 */

var fs = require('fs');
var util = require('util');
var jade = require('jade');
var path = require('path');

function DataView(opts) {
	this.init(opts);
}

module.exports = DataView;

DataView.prototype.init = function() {
	this['view engine'] = 'jade';
	this.views = path.join(__dirname, '../templates');
	this.graphic = 'echars';


};

DataView.prototype.generate = function(data, opts) {
	var template = fs.readFileSync(path.join(this.views, (opts.type || line) + '.jade'));
	var fn = jade.compile(template, {});
	var html = fn(datePreduce(data, opts));
	return html;
};

var datePreduce = function(content, opts) {
	var result = opts || {};
	var title = [];

	if (!result.height) {
		result.height = 500; // 500px height todo config
	}

	// 处理 x 轴
	if (result.xAxis) {
		result.xAxis = util.inspect(result.xAxis);
	} else {
		result.xAxis = util.inspect(getRange(getMaxLength(content)));
	}

	for (var i = 0; i < content.length; i++) {
		var item = content[i];
		item.list = util.inspect(item.list);
		title.push(item.name);
	}

	result.title = util.inspect(title);
	result.datas = content;

	return result;
};

var getMaxLength = function(content) {
	var max = 0;
	for (var i = 0; i < content.length; i++) {
		if (content[i].list.length > max) {
			max = content[i].list.length;
		}
	}
	return max;
};

var getRange = function(n) {
	var list = [];
	for (var i = 0; i < n; i++) {
		list.push(i + 1);
	};
	return list;
};
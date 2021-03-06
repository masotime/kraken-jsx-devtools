'use strict';

var babel = require('babel-core');

module.exports = function (options) {

	options.ext = options.ext || 'jsx';

	return function (data, args, callback) {
		try {
			var result = babel.transform(data.toString('utf8')).code;
			return callback(null, result);
		} catch (err) {
			return callback(err);
		}
	};

};
'use strict';

var chai = require('chai'),
	fs = require('fs'),
	jsxDev = require('../index'),
	path = require('path');

chai.should();

describe('kraken-jsx-devtools', function() {

	it('should correctly compile a JSX snippet', function simpleCompile(done) {
		var middleware = jsxDev({});
		var sourcePath = path.join(process.cwd(), 'test', 'files', 'fieldwidget.jsx');
		var targetPath = path.join(process.cwd(), 'test', 'files', 'fieldwidget.js');

		fs.readFile(sourcePath, 'utf8', function(err, jsx) {
			if (err) {
				return done(err);
			} else {
				fs.readFile(targetPath, 'utf8', function(err2, js) {
					if (err2) {
						return done(err2);
					} else {
						middleware(jsx, null, function(err3, compiled) {
							if (err) {
								return done(err3);
							} else {
								compiled.should.equal(js);
								done();
							}
						});
					}

				});
			}
		});

	});
});
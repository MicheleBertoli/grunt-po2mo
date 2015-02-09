'use strict';

var grunt = require('grunt');

exports.po2mo = {
  setUp: function(done) {
    done();
  },
  stage: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/fr.mo');
    var expected = grunt.file.read('test/expected/fr.mo');
    test.equal(actual, expected);

    test.done();
  },
  prod: function(test) {
    test.expect(1);

    var expected = grunt.file.exists('tmp/fixtures/fr.po');
    test.equal(expected, false);

    test.done();
  },
};

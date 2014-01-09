'use strict';

var grunt = require('grunt');

exports.po2mo = {
  setUp: function(done) {
    done();
  },
  files: function(test) {
    test.expect(1);

    setTimeout(function() {

      var actual = grunt.file.read('tmp/fr.mo');
      var expected = grunt.file.read('test/expected/fr.mo');
      test.equal(actual, expected);

      test.done();

    }, 500);

  },
};

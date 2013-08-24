/*
 * grunt-po2mo
 * https://github.com/MicheleBertoli/grunt-po2mo
 *
 * Copyright (c) 2013 Michele Bertoli
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  grunt.registerMultiTask('po2mo', 'Compile .po files into binary .mo files with msgfmt.', function() {

    this.files.forEach(function(file) {

      var dest = file.dest;
      if (dest.indexOf('.po') > -1) {
          dest = dest.replace('.po', '.mo');
      }
      grunt.file.write(dest);

      var exec = require('child_process').exec;
      var command = 'msgfmt -o ' + dest + ' ' + file.src[0];

      grunt.verbose.writeln('Executing: ' + command);
      exec(command);

    });

  });

};

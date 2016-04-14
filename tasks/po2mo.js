/*
 * grunt-po2mo
 * https://github.com/MicheleBertoli/grunt-po2mo
 *
 * Copyright (c) 2013 Michele Bertoli
 * Licensed under the MIT license.
 */

'use strict';

var path = require('path');
var exec = require('sync-exec');

module.exports = function(grunt) {

  grunt.registerMultiTask('po2mo', 'Compile .po files into binary .mo files with msgfmt.', function() {

    var options = this.options({
      deleteSrc: false,
    });

    this.files.forEach(function(file) {

      file.src.forEach(function(src) {

        var basename = path.basename(src);
        basename = basename.replace('.po', '') + '.mo';

        var dest = path.join(file.dest, basename);
        grunt.file.write(dest);

        var command = 'msgfmt -o ' + dest + ' ' + src;

        grunt.verbose.writeln('Executing: ' + command);
        var result = exec(command);
        grunt.verbose.writeln('Executed with status: ' + result.status);

        if (result.status !== 0) {
          grunt.log.error(result.stderr);
        }

        if (options.deleteSrc) {
          grunt.file.delete(src);
        }

      });

    });

  });

};

/*
 * grunt-json-templating
 * https://github.com/abused/grunt-json-templating
 *
 * Copyright (c) 2015 abusedmedia
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  grunt.initConfig({
    uglify: {
      dist:{
        options: {
        },
        files: {
          'CriticalPath.min.js': ['CriticalPath.js']
        }
      }
    }
  });

  // Actually load this plugin's task(s).
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['uglify:dist']);

};

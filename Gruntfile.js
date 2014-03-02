module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Tasks...
    sass: {
      options: {
        includePaths: ['bower_components/foundation/scss']
      },
      dev: {
        files: {
          'build/app.css': 'scss/app.scss'
        },
        options: {
          outputStyle: 'compressed'
        }
      }
    },

    // rubyHaml: {
    //   dev: {
    //     files: {
    //         'index.html': 'haml/index.haml'
    //     },
    //     options: {
    //         templatize: false
    //     }
    //   }
    // },

    // haml: {
    //   dev: {
    //     files: {
    //         'templates.js': ['haml/**/*.haml']
    //     },
    //     options: {
    //       target: 'js',
    //       placement: 'global'
    //     }
    //   }
    // },

    jade: {
      dev: {
        options: {
          data: {
            debug: true
          },
          client: true,
          pretty: true
        },
        files: {
          'templates.js': ['jade/*.jade']
        }
      },
      dev2: {
        options: {
          data: {
            debug: true
          },
          pretty: true
        },
        files: {
          'index.html': 'index.jade'
        }
      },
      dev3: {
        options: {
          data: {
            debug: true
          },
          pretty: true
        },
        files: [{
          expand: true,
          src: "*.jade",
          dest: "build/pages/",
          ext: ".html",
          cwd: 'jade/pages/'
        }]
      },
    },

    uglify: {
      options: {
        mangle: true,
        beautify: false
      },
      prod: {
        files: {
          'build/app.min.js':
            [
            'bower_components/fittext/fittext.js',
            'templates.js',
            'js/app.js'
            ]
        }
      }
    },

    concat: {
      dev: {
        files: {
          'build/app.min.js':
            [
            'bower_components/fittext/fittext.js',
            'templates.js',
            'js/app.js'
            ]
        }
      }
    },


    watch: {
      grunt: { files: ['Gruntfile.js'] },

      sass: {
        files: 'scss/**/*.scss',
        tasks: ['sass'],
        options: {
          livereload: true
        }
      },

      // haml: {
      //   files: 'haml/**/*.haml',
      //   tasks: ['haml'],
      //   options: {
      //     livereload: true
      //   }
      // },

      jade: {
        files: ['index.jade', 'jade/**/*.jade'],
        tasks: ['jade'],
        options: {
          // livereload: true
        }
      },

      concat: {
        files: 
          ['js/**/*.js', 'templates.js'],
        tasks: ['concat'],
        options: {
          livereload: true
        }
      }

      // rubyHaml: {
      //   files: 'haml/**/*.haml',
      //   tasks: ['rubyHaml']
      // }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  // grunt.loadNpmTasks('grunt-haml');
  grunt.loadNpmTasks('grunt-contrib-jade');
  // grunt.loadNpmTasks('grunt-ruby-haml');

  grunt.registerTask('build', ['sass', 'jade:dev2', 'jade:dev3', 'concat']);
  grunt.registerTask('default', ['build','watch']);
}
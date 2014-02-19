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

    haml: {
      dev: {
        files: {
            'templates.js': ['haml/**/*.haml']
        },
        options: {
          target: 'js',
          placement: 'global'
        }
      }
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

      haml: {
        files: 'haml/**/*.haml',
        tasks: ['haml'],
        options: {
          livereload: true
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
  grunt.loadNpmTasks('grunt-haml');
  // grunt.loadNpmTasks('grunt-ruby-haml');

  grunt.registerTask('build', ['sass', 'haml', 'concat']);
  grunt.registerTask('default', ['build','watch']);
}
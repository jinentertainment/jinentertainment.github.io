module.exports = function(grunt) {
    grunt.initConfig({  
        watch: {
            css: {
                files: ['less/**/*.less'],
                tasks: ['less']
            }
        },
        less: {
            dev: {
                options: {
                    yuicompress: true
                },
                files: {
                    'assets.css' : ['less/**/*.less']
                }
            }
        },
        concat: {
            options: {
              separator: ';'
            },
            dist: {
              src: ['lib/*.js'],
              dest: 'assets.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-concat');
    
    grunt.registerTask('default', ['watch' ,'concat']);
};
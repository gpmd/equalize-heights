module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            main: [
                'Gruntfile.js',
                'src/equalize-heights.js'
            ]
        },

        uglify: {
            main: {
                files: {
                    'dist/equalize-heights.min.js': ['src/equalize-heights.js']
                }
            }
        },

        copy: {
            main: {
                src: 'src/equalize-heights.js',
                dest: 'dist/equalize-heights.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', [
        'jshint',
        'uglify',
        'copy'
    ]);
};

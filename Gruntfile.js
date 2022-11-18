module.exports = function(grunt) {
    
    // Configuration.
    grunt.initConfig({
        less: {
            development: {
                options: {
                    paths: ["less"]
                },
                files: {
                    "css/style.css": "less/base.less"
                }
            }
        },

        
        watch: {
            less: {
                files: ["less/*.less"],
                tasks: ["less"]
            }
        }
    });

    // Load plugins
    // grunt.loadNpmTasks('');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
   // Les Tasks
}
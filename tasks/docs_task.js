// Lint and build CSS
module.exports = function(grunt) {
  grunt.registerTask('docs', ['clean:docs', 'scratchy:docs']);
};
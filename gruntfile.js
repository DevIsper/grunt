module.exports = function (grunt) {
    // Configuração do Grunt
    grunt.initConfig({
        // Compilação do LESS
        less: {
            development: {
                options: {
                    paths: ['src/styles'],
                },
                files: {
                    'build/styles/main.css': 'src/styles/main.less', // Destino:Fonte
                },
            },
        },

        // Minificação de JavaScript
        uglify: {
            build: {
                files: {
                    'build/scripts/main.min.js': ['src/scripts/*.js'], // Destino:Arquivos
                },
            },
        },
    });

    // Carrega os plugins necessários
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Registro de tarefas
    grunt.registerTask('default', ['less', 'uglify']);
};

const options = {
        swaggerDefinition: {
            info: {
                description: 'Order Api',
                title: 'Swagger Order Api',
                version: '1.0.0',
            },
            host: 'localhost:3000',
            basePath: '/',
            produces: [
                "application/json",
            ],
            schemes: ['HTTP'],
            securityDefinitions: {
                JWT: {
                    type: 'apiKey',
                    in: 'header',
                    name: 'Authorization',
                    description: "Authorization with JWT",
                },
                language: {
                    type: 'apiKey',
                    in: 'header',
                    name: 'language',
                    description: "language-lang",
                },

            }
        },
        basedir: __dirname,
        files: [
            '../../public/controllers/*.js',
            '../../private/controllers/*.js'
        ]
}
export default options

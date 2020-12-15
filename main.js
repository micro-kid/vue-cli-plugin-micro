module.exports = (api, options) => {
    // 修改已有的
    const { serve } = api.service.commands

    const serveFn = serve.fn

    serve.fn = (...args) => {
        
        return serveFn(...args).then(res => {
            if (res && res.url) {
                console.log(`👋 Project is running now at ${res.url}`)
            }
        })
    }

    // 注册新的
    api.registerCommand(
        'greet',
        {
            description: 'Writes a greeting to the console',
            usage: 'vue-cli-service greet [options]',
            options: { '--name': 'specifies a name for greeting' }
        },
        args => {
            if (args.name) {
                console.log(`👋 Hello, ${args.name}!`);
            } else {
                console.log(`👋 Hello!`);
            }
        }
    )
}
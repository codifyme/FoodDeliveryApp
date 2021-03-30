module.exports={
    project:{
        ios:{},
        android:{}
    },
    assets:["./assets/fonts/"],
    commands: require('./path-to-commands.js'),
    hooks: {
        prelink: './path-to-a-prelink-hook',
      },
}
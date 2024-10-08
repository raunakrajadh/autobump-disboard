const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('hello world')
})

app.listen(3000)

const { Client } = require('discord.js-selfbot-v13')
const client = new Client()

client.on('ready', async () => {
    console.log(`Logged in as ${client.user.tag}!`)

    const channel = await client.channels.fetch('1290619186753572928')
    
    async function bump() {
        await channel.sendSlash('302050872383242240', 'bump')
        console.count('Bumped!')
    }
    
    function loop() {
        // send bump message every 2-3 hours, to prevent detection.
        var randomNum = Math.round(Math.random() * (9000000 - 7200000 + 1)) + 7200000
        setTimeout(function () {
            bump()
            loop()
        }, randomNum)
    }
    
    bump()
    loop()

    // const mem = await client.channels.fetch('1287073269853458572')

    // async function memCmd() {
    //     await mem.send('!djoin 935046749498789979')
    //     console.count('MemberCMD!')
    // }

    // function lp(){
    //     var randomN = Math.round(Math.random() * (210000 - 330000 + 1)) + 330000
    //     setTimeout(function () {
    //         memCmd()
    //         lp()
    //     }, randomN)
    // }

    // lp()
})

client.login('MTI4MzM5MjMxMzA3MDE5NDc3MQ.G01o3k.lzL6pmEaWIM0i-sgld5AFDRsp_iB8Brj_qsFLA');
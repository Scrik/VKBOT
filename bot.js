const { VK } = require('vk-io')
const { HearManager } = require('@vk-io/hear')

const vk = new VK({
    token: 'вставьте-ваш-токен!'
})
const bot = new HearManager()

vk.updates.on('message_new', bot.middleware)

bot.hear(/здравуйствуте/i, msg => {
    msg.send(`приветствую!`)
})

bot.hear(/досвидание/i, msg => {
    msg.send(`удачных дней`)
})


console.log('Bot Started!');
vk.updates.start().catch(console.error)
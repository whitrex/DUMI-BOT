/* # Exclusively from Madhav
*/

const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const need = "type some word after command muthe\n🧚‍♂️🧚‍♂️"

if (Config.WORKTYPE == 'private') {

    Asena.addCommand({ pattern: 'dropwater ?(.*)', fromMe: true,dontAddCommandList: false }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.zeks.xyz/api/dropwater?apikey=2U6LNfrIDBoUTp93An2aX0pw6LK&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Made by Pikachu*' })

    }));
}

else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({ pattern: 'dropwater ?(.*)', fromMe: false,dontAddCommandList: false}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.zeks.xyz/api/dropwater?apikey=2U6LNfrIDBoUTp93An2aX0pw6LKg&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Made by Pikachu*' })

    }));
    
}

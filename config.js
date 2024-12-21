import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'

import dotenv from 'dotenv'
dotenv.config()

const defaultOwner = '916909297247';


// Check for the OWNERS environment variable; if not found, use the default
const ownervb = process.env.OWNERS || process.env.OWNER_NUMBER || 'your number';  // put your number here

const ownerlist = ownervb.split(';');

aglobal.owner = [];
for (let i = 0; i < ownerlist.length; i++) {
    global.owner.push([ownerlist[i], true]);
}
//
global.botname = process.env.BOTNAME || '𝓠𝓾𝓮𝓮𝓷 𝓑𝓲𝓷𝓭𝔂𝓪';
global.pairingNumber = process.env.BOT_NUMBER || '918787487369';  // put your number here
global.SESSION_ID = process.env.SESSION_ID || 'qUBHCYqB#kj7b4eJywJxNRStYHHd0NUkxVZLo6bphUds-SA5eUk8';  // put your session id here

global.mods = ['916909297247','918787487369']
global.prems = ['916909297247','918787487369']
global.allowed = ['916909297247', '918787487369']
global.keysZens = ['c2459db922', '37CC845916', '6fb0eff124']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = [
  '29d4b59a4aa687ca',
  '5LTV57azwaid7dXfz5fzJu',
  'cb15ed422c71a2fb',@
  '5bd33b276d41d6b4',
  'HIRO',
  'kurrxd09',
  'ebb6251cc00f9c63',
]
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = ['GataDios']

global.canal = 'https://whatsapp.com/channel/0029VarkfOSLikgHhXPsnA2B'


global.APIs = {
  // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz',
  dzx: 'https://api.dhamzxploit.my.id',
  lol: 'https://api.lolhuman.xyz',
  violetics: 'https://violetics.pw',
  neoxr: 'https://api.neoxr.my.id',
  zenzapis: 'https://zenzapis.xyz',
  akuari: 'https://api.akuari.my.id',
  akuari2: 'https://apimu.my.id',
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api.fgmods.xyz',
}
global.APIKeys = {
  // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://api.lolhuman.xyz': '85faf717d0545d14074659ad',
  'https://api.neoxr.my.id': `${keysneoxr}`,
  'https://violetics.pw': 'beta',
  'https://zenzapis.xyz': `${keysxxx}`,
  'https://api.fgmods.xyz': 'm2XBbNvz',
}

// Sticker WM
global.premium = 'true'
global.packname = '𝓠𝓾𝓮𝓮𝓷 𝓑𝓲𝓷𝓭𝔂𝓪'
global.author = '~V i Nㄷㅌ'
global.menuvid = 'https://cdn.ironman.my.id/i/vl7541.mp4'
global.igfg = ' Follow on Instagram\nhttps://www.instagram.com/craftastic_land_'
global.dygp = 'https://whatsapp.com/channel/0029VarkfOSLikgHhXPsnA2B'
global.fgsc = 'https://github.com/Vincenzo675/Bindya-V4'
global.fgyt = 'https://youtube.com/@CraftasticLand'
global.fgpyp = 'https://youtube.com/@CraftasticLand'
global.fglog = 'https://cdn.ironman.my.id/i/195mv0.jpeg'
global.thumb = fs.readFileSync('./assets/qasim.jpg')

global.wait = '⏳'
global.rwait = '⏳'
global.dmoji = '🤭'
global.done = '✔️'
global.error = '❌'
global.xmoji = '🤩'

global.multiplier = 69
global.maxwarn = '3'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})

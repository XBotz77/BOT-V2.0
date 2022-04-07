/**
   * Create By Saleh.
   * Contact Me on wa.me/6285822558496
   * Follow https://github.com/XBot77
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapi.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapi.xyz': '805a6c3fa9',
}

// Other
global.owner = ['6285741857464','6283127014833','6281365814200']
global.pemilik = ['6285822558496']
global.premium = ['6285787349774']
global.pengguna = 'SALEH GBOT'
global.botnma = 'RepsCengBotzz'
global.harga = '10k'
global.atasreply = 'Subscribe'//SM GAMING
global.atasreply2 = 'Follow Instagram' //salehmuhammad056_
global.webreply = 'https://youtube.com/c/GGBotz'
global.webreply2 = 'https://instagram.com/freefireburik'
global.melcanz = 'LehGanzz'
global.footer = 'LehSanz'
global.web = 'https://youtube.com/c/btsplastik'
global.web2 = 'https://github.com/XBotz77'
global.ganti = 'INFO NE MASSEH'
global.ganti2 = 'Github'
global.accestken = 'SalehLol'
global.ownernma = 'Saleh DF'
global.packname = 'LOLI Bot'
global.author = 'WhatsApp Bot'
global.sessionName = 'hisoka'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: '✓ S u c c e s s',
    admin: 'Fitur Khusus Admin Group!😞',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!❌',
    owner: 'Fitur Khusus Owner Bot❌',
    group: 'Fitur Digunakan Hanya Untuk Group!❌',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!❌',
    bot: 'Fitur Khusus Pengguna Nomor Bot❌',
    wait: 'W a i t . . . . ',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./media/Lycho.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})

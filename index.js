/*
* "Jangan modal nama doang bro!!!"
* (Scriptnya Y).
*/
const BotName = '**Y**'; // Nama Bot Whatsapp
const instagramlu = 'https://instagram.com/awsotoy'; // Nama Instagramlu cok
const whatsapplu = 'bit.ly/Bentol'; // Nomor whatsapplu cok
const kapanbotaktif = '*RANDOM*'; // Kapan bot lu aktif
const grupch1 = 'https://chat.whatsapp.com/FZmp5WLHurWLkme4zRK3Gk'; // OFFICIAL GRUP LU 1
const grupch2 = 'Cooming Soon'; // OFFICIAL GRUP LU 2
const grupch3 = 'https://instagram.com/awsotoy'; // OFFICIAL GRUP LU 3
//
const qrcode = require("qrcode-terminal");
const moment = require("moment");
const cheerio = require("cheerio");
const get = require('got')
const fs = require("fs");
const dl = require("./lib/downloadImage.js");
const fetch = require('node-fetch');
const urlencode = require("urlencode");
const axios = require("axios");
const imageToBase64 = require('image-to-base64');
const menu = require("./lib/menu.js");
const donate = require("./lib/donate.js");
const info = require("./lib/info.js");
//
const
{
   WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   waChatKey,
} = require("@adiwajshing/baileys");
var jam = moment().format("HH:mm");

// OCR Library
const readTextInImage = require('./lib/ocr')

function foreach(arr, func)
{
   for (var i in arr)
   {
      func(i, arr[i]);
   }
}
const conn = new WAConnection()
conn.on('qr', qr =>
{
   qrcode.generate(qr,
   {
      small: true
   });
   console.log(`[ ${moment().format("HH:mm:ss")} ] SCAN QR SEKARANG BRO!`);
});

conn.on('credentials-updated', () =>
{
   // save credentials whenever updated
   console.log(`credentials updated$`)
   const authInfo = conn.base64EncodedAuthInfo() // get all the auth info we need to restore this session
   fs.writeFileSync('./session.json', JSON.stringify(authInfo, null, '\t')) // save this info to a file
})
fs.existsSync('./session.json') && conn.loadAuthInfo('./session.json')
// uncomment the following line to proxy the connection; some random proxy I got off of: https://proxyscrape.com/free-proxy-list
//conn.connectOptions.agent = ProxyAgent ('http://1.0.180.120:8080')
conn.connect();

conn.on('user-presence-update', json => console.log(`[ ${moment().format("HH:mm:ss")} ] => ig : @febby28_`))
conn.on('message-status-update', json =>
{
   const participant = json.participant ? ' (' + json.participant + ')' : '' // participant exists when the message is from a group
   console.log(`[ ${moment().format("HH:mm:ss")} ] => ig : @febby28_`)
})

conn.on('message-new', async(m) =>
{
   const messageContent = m.message
   const text = m.message.conversation
   let id = m.key.remoteJid
   const messageType = Object.keys(messageContent)[0] // message will always contain one key signifying what kind of message
   let imageMessage = m.message.imageMessage;
   console.log(`[ ${moment().format("HH:mm:ss")} ] => Nomor: [ ${id.split("@s.whatsapp.net")[0]} ] => ${text}`);
   // Groups

if (text.includes(",buatgrup"))
   {
var nama = text.split(",buatgrup")[1].split("-nomor")[0];
var nom = text.split("-nomor")[1];
var numArray = nom.split(",");
for ( var i = 0; i < numArray.length; i++ ) {
    numArray[i] = numArray[i] +"@s.whatsapp.net";
}
var str = numArray.join("");
console.log(str)
const group = await conn.groupCreate (nama, str)
console.log ("created group with id: " + group.gid)
conn.sendMessage(group.gid, "hello everyone", MessageType.extendedText) // say hello to everyone on the group

}

// FF Y
if(text.includes(",cek")){
var num = text.replace(/,cek/ , "")
var idn = num.replace("0","+62");

console.log(id);
const gg = idn+'@s.whatsapp.net'

const exists = await conn.isOnWhatsApp (gg)
console.log(exists);
conn.sendMessage(id ,`${gg} ${exists ? " exists " : " does not exist"} on WhatsApp`, MessageType.text)
}

//Chat Y
else if (text == 'assalamualaikum'){
conn.sendMessage(id, 'Waalaikumsalam, Ketik ,menu/,info/,donasi Contoh ,menu' ,MessageType.text);
}
else if (text == 'salam'){
conn.sendMessage(id, 'Waalaikumsalam, Ketik ,menu/,info/,donasi Contoh ,menu' ,MessageType.text);
}
else if (text == 'asalamualaikum'){
conn.sendMessage(id, 'Waalaikumsalam, Ketik ,menu/,info/,donasi Contoh ,menu' ,MessageType.text);
}
else if (text == 'Assalamualaikum'){
conn.sendMessage(id, 'Waalaikumsalam, Ketik ,menu/,info/,donasi Contoh ,menu' ,MessageType.text);
}
else if (text == 'p'){
conn.sendMessage(id, 'Ya?, Ketik ,menu/,info/,donasi Contoh ,menu' ,MessageType.text);
}
else if (text == 'P'){
conn.sendMessage(id, 'Ya?, Ketik ,menu/,info/,donasi Contoh ,menu' ,MessageType.text);
}
else if (text == ',menu'){
conn.sendMessage(id, '*_Gabut gak ada temen chatan? chat aja bot ini, setiap chat awali dengan (,s)_*' ,MessageType.text);
}
else if (text == 'Halo'){
conn.sendMessage(id, 'Ya?, Ketik ,menu/,info/,donasi Contoh ,menu' ,MessageType.text);
}
else if (text == 'Asu'){
conn.sendMessage(id, 'Lu Asw' ,MessageType.text);
}
else if (text == ',owner'){
conn.sendMessage(id, '*Owner Bot *Y* :* *_bit.ly/Bentol_*' ,MessageType.text);
}
else if (text == ',grupwa'){
conn.sendMessage(id, '*Grup WhatsApp :* *_https://chat.whatsapp.com/FZmp5WLHurWLkme4zRK3Gk_*' ,MessageType.text);
}
else if (text == 'Bentol'){
conn.sendMessage(id, 'Apa? Jalanin Fitur ,menu' ,MessageType.text);
}
else if (text == 'Ngentod'){
conn.sendMessage(id, 'Jangan Kasar >:(' ,MessageType.text);
}
else if (text == 'Anjing'){
conn.sendMessage(id, 'Jangan toxic woi >:(' ,MessageType.text);
}
else if (text == 'Bacot'){
conn.sendMessage(id, 'lu bacot_-' ,MessageType.text);
}
else if (text == 'Test'){
conn.sendMessage(id, 'Test 1,2,3 ketik ,menu' ,MessageType.text);
}
else if (text == 'Hai'){
conn.sendMessage(id, 'Ya?, Ketik ,menu/,info/,donasi Contoh ,menu' ,MessageType.text);
}
else if (text == 'Woi'){
conn.sendMessage(id, 'Ya?, Ketik ,menu/,info/,donasi Contoh ,menu' ,MessageType.text);
}
else if (text == 'Eoy'){
conn.sendMessage(id, 'Ya?, Ketik ,menu/,info/,donasi Contoh ,menu' ,MessageType.text);
}
else if (text == 'Hi'){
conn.sendMessage(id, 'Ya?, Ketik ,menu/,info/,donasi Contoh ,menu' ,MessageType.text);
}
else if (text == 'Gan'){
conn.sendMessage(id, 'Ya?, Ketik ,menu/,info/,donasi Contoh ,menu' ,MessageType.text);
}
else if (text == 'Sis'){
conn.sendMessage(id, 'Ya?, Ketik ,menu/,info/,donasi Contoh ,menu' ,MessageType.text);
}
else if (text == 'Bro'){
conn.sendMessage(id, 'Ya?, Ketik ,menu/,info/,donasi Contoh ,menu' ,MessageType.text);
}
else if (text == 'Min'){
conn.sendMessage(id, 'Ya?, Ketik ,menu/,info/,donasi Contoh ,menu' ,MessageType.text);
}
else if (text == 'Sayang'){
conn.sendMessage(id, 'Ya?, Ketik ,menu/,info/,donasi Contoh ,menu' ,MessageType.text);
}
else if (text == 'I love u'){
conn.sendMessage(id, 'love you too' ,MessageType.text);
}
else if (text == ',hentai'){
conn.sendMessage(id, '*_Ngapain? wkwk. Ingin tau jalanin fitur ini? Chat Owner : bit.ly/Bentol_*' ,MessageType.text);
}
else if (text == 'Mas'){
conn.sendMessage(id, 'Ya?, Ketik ,menu/,info/,donasi Contoh ,menu' ,MessageType.text);
}
else if (text == 'Mba'){
conn.sendMessage(id, 'Ya?, Ketik ,menu/,info/,donasi Contoh ,menu' ,MessageType.text);
}
else if (text == 'Bre'){
conn.sendMessage(id, 'Ya?, Ketik ,menu/,info/,donasi Contoh ,menu' ,MessageType.text);
}
else if (text == 'Cuy'){
conn.sendMessage(id, 'Ya?, Ketik ,menu/,info/,donasi Contoh ,menu' ,MessageType.text);
}
else if (text == 'Euy'){
conn.sendMessage(id, 'Ya?, Ketik ,menu/,info/,donasi Contoh ,menu' ,MessageType.text);
}
else if (text == 'makasi'){
conn.sendMessage(id, 'Sama sama, semoga harimu menyenangkan :)' ,MessageType.text);
}
else if (text == 'Makasi'){
conn.sendMessage(id, 'Sama sama, semoga harimu menyenangkan :)' ,MessageType.text);
}
else if (text == 'makasih'){
conn.sendMessage(id, 'Sama sama, semoga harimu menyenangkan :)' ,MessageType.text);
}
else if (text == 'Makasih'){
conn.sendMessage(id, 'Sama sama, semoga harimu menyenangkan :)' ,MessageType.text);
}
else if (text == 'thank'){
conn.sendMessage(id, 'Sama sama, semoga harimu menyenangkan :)' ,MessageType.text);
}
else if (text == 'Thank'){
conn.sendMessage(id, 'Sama sama, semoga harimu menyenangkan :)' ,MessageType.text);
}
else if (text == 'thanks'){
conn.sendMessage(id, 'Sama sama, semoga harimu menyenangkan :)' ,MessageType.text);
}
else if (text == 'Thanks'){
conn.sendMessage(id, 'Sama sama, semoga harimu menyenangkan :)' ,MessageType.text);
}

// Fitur

if (text.includes(',nulis')){
  var teks = text.replace(/,nulis /, '')
    axios.get('https://bangandre.herokuapp.com/nulis?teks='+teks)
    .then((res) => {
      imageToBase64(res.data.result)
        .then(
          (ress) => {
            conn.sendMessage(id, '[TUNGGU] Sedang mencari...🔍', MessageType.text)
            var buf = Buffer.from(ress, 'base64')
            conn.sendMessage(id, buf, MessageType.image)
        })
    })
}
   
if (text.includes(',text2image')){
  var teks = text.replace(/,text2image /, '')
    axios.get('https://mhankbarbar.herokuapp.com/api/text2image?text=${teks}&apiKey=SLpvUgOcMYwIx0pFeELt')
    .then((res) => {
      imageToBase64(res.data.result)
        .then(
          (ress) => {
            conn.sendMessage(id, '[❗] Tunggu...', MessageType.text)
            var buf = Buffer.from(ress, 'base64')
            conn.sendMessage(id, buf, MessageType.image)
        })
    })
}

if (text.includes(',nekonime')){
  var teks = text.replace(/,nekonime /, '')
    axios.get('https://arugaz.herokuapp.com/api/nekonime')
    .then((res) => {
      imageToBase64(res.data.result)
        .then(
          (ress) => {
            conn.sendMessage(id, '[TUNGGU] Sedang mencari...🔍', MessageType.text)
            var buf = Buffer.from(ress, 'base64')
            conn.sendMessage(id, buf, MessageType.image)
        })
    })
}

if (text.includes(',waifu')){
  var teks = text.replace(/!waifu /, '')
    axios.get('https://st4rz.herokuapp.com/api/waifu')
    .then((res) => {
      imageToBase64(res.data.image)
        .then(
          (ress) => {
            conn.sendMessage(id, '[TUNGGU] Sedang mencari...🔍', MessageType.text)
            var buf = Buffer.from(ress, 'base64')
            conn.sendMessage(id, buf, MessageType.image)
        })
    })
}

if (text.includes(',loli')){
  var teks = text.replace(/,loli /, '')
    axios.get('https://st4rz.herokuapp.com/api/randomloli')
    .then((res) => {
      imageToBase64(res.data.result)
        .then(
          (ress) => {
            conn.sendMessage(id, '[TUNGGU] Sedang mencari...🔍', MessageType.text)
            var buf = Buffer.from(ress, 'base64')
            conn.sendMessage(id, buf, MessageType.image)
        })
    })
}

if (text.includes(',y,')){
  var teks = text.replace(/,y, /, '')
    axios.get('https://nekos.life/api/v2/img/hentai')
    .then((res) => {
      imageToBase64(res.data.url)
        .then(
          (ress) => {
            conn.sendMessage(id, '*BUKAN UNTUK COLI*', MessageType.text)
            var buf = Buffer.from(ress, 'base64')
            conn.sendMessage(id, buf, MessageType.image)
        })
    })
}

if (text.includes(",say")){
  const teks = text.replace(/,say /, "")
conn.sendMessage(id, teks, MessageType.text)
}

if (text.includes(",ytmp4")){
const teks = text.replace(/,ytmp4 /, "")
axios.get(`https://st4rz.herokuapp.com/api/ytv?url=${teks}`).then((res) => {
	conn.sendMessage(id, '[TUNGGU] Sedang mencari...🔍', MessageType.text)
    let hasil = `Silahkan Download, Link dibawah \n\n *Judul* : _${res.data.title}_ \n *Resolusi* : _${res.data.resolution}_ \n *Link* : _${res.data.result}_`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes(",seberapabucin")){
const teks = text.replace(/,seberapabucin /, "")
axios.get(`https://arugaz.herokuapp.com/api/howbucins`).then((res) => {
	conn.sendMessage(id, '[TUNGGU] Sedang mencari...🔍', MessageType.text)
    let hasil = `*Deskripsi* : _${res.data.desc}_ \n*Bucin* : _${res.data.persen}%_`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes(",puisi")){
const teks = text.replace(/,puisi /, "")
axios.get(`https://arugaz.herokuapp.com/api/puisi2`).then((res) => {
	conn.sendMessage(id, '[TUNGGU] Sedang mencari...🔍', MessageType.text)
    let hasil = `${res.data.result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes(",kbbi")){
const teks = text.replace(/,kbbi /, "")
axios.get(`https://mhankbarbar.herokuapp.com/api/kbbi?query=${teks}&lang=id&apiKey=SLpvUgOcMYwIx0pFeELt`).then((res) => {
	conn.sendMessage(id, '[TUNGGU] Sedang mencari...🔍', MessageType.text)
    let hasil = `${res.data.result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes(",cuaca")){
const teks = text.replace(/,cuaca /, "")
axios.get(`https://rest.farzain.com/api/cuaca.php?id=${teks}&apikey=O8mUD3YrHIy9KM1fMRjamw8eg`).then((res) => {
	conn.sendMessage(id, '[TUNGGU] Sedang mencari...🔍', MessageType.text)
    let hasil = `*Cek Cuaca ${teks} Dibawah ini* : \n\n *Tempat* : _${res.data.respon.tempat}_ \n *Cuaca* : _${res.data.respon.cuaca}_ \n *Suhu* : _${res.data.respon.suhu}_`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes(",ytmp3")){
const teks = text.replace(/,ytmp3 /, "")
axios.get(`https://st4rz.herokuapp.com/api/yta?url=${teks}`).then((res) => {
	conn.sendMessage(id, '[TUNGGU] Sedang mencari...🔍', MessageType.text)
    let hasil = `Silahkan Download, Link dibawah \n\n *Judul* : _${res.data.title}_ \n *Size* : _${res.data.filesize}_ \n *Link* : _${res.data.result}_`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes(",s")){
	const teks = text.replace(/,s/, "")
	axios.get(`https://st4rz.herokuapp.com/api/simsimi?kata=${teks}`).then((res) => {
    let hasil = `${res.data.result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes(",infoig")){
  const teks = text.replace(/,infoig /, "")
  axios.get(`https://alfians-api.herokuapp.com/api/stalk?username=${teks}`).then ((res) =>{
  conn.sendMessage(id, '[TUNGGU] Sedang mencari...🔍', MessageType.text)
  let hasil = `BIODATA INSTAGRAM ATAS NAMA _${teks}_ \n\n *Username✍️* : _${res.data.Username}_ \n *Nama✍️* : _${res.data.Name}_ \n *Jumlah Followers✍️* : _${res.data.Jumlah_Followers}_ \n *Jumlah_Following✍️* : _${res.data.Jumlah_Following}_ \n *Jumlah_Post✍️* : _${res.data.Jumlah_Post}_ `;
  conn.sendMessage(id, hasil, MessageType.text);
})
}
if (text.includes(",totalcovid")){
  const teks = text.replace(/,totalcovid /, "")
  axios.get(`https://api.terhambar.com/negara/World`).then ((res) =>{
  conn.sendMessage(id, '*Note : Jaga Kesehatan dan pakai Masker*', MessageType.text)
  let hasil = `*Total Kasus Covid didunia* \n\n *Negara* : _${res.data.negara}_ \n *Total* : _${res.data.total}_ \n *Kasus Baru* : _${res.data.kasus_baru}_ \n *Meninggal* : _${res.data.meninggal}_ \n *Sembuh* : _${res.data.sembuh}_ \n *Penanganan* : _${res.data.penanganan}_ \n *Terakhir* : _${res.data.terakhir}_ `;
  conn.sendMessage(id, hasil, MessageType.text);
})
}
if (text.includes(",infogempa")){
  const teks = text.replace(/,infogempa /, "")
  axios.get(`https://alfians-api.herokuapp.com/api/infogempa`).then ((res) =>{
  conn.sendMessage(id, '[TUNGGU] Sedang mencari...🔍', MessageType.text)
  let hasil = ` *INFO GEMPA* \n\n *Lokasi* : _${res.data.lokasi}_ \n *Kedalaman* : _${res.data.kedalaman}_ \n *Koordinat* : _${res.data.koordinat}_ \n *Magnitude* : _${res.data.magnitude}_ \n *Waktu* : _${res.data.waktu}_ \n *Potensi* : _${res.data.potensi}_ `;
  conn.sendMessage(id, hasil, MessageType.text);
})
}
if (text.includes(",chord")){
const teks = text.replace(/,chord /, "")
axios.get(`https://alfians-api.herokuapp.com/api/chord?q=${teks}`).then((res) => {
	conn.sendMessage(id, '[WAIT] Searching...⏳', MessageType.text)
    let hasil = `*Nih Chord Lagu ${teks}* \n\nChord: _${res.data.result}_ `;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}

if (text.includes(",twt")){
const teks = text.replace(/,twt /, "")
axios.get(`https://mhankbarbar.herokuapp.com/api/twit?url=${teks}&apiKey=lGjYt4zA5SQlTDx9z9Ca`).then((res) => {
	conn.sendMessage(id, 'Sedang Dalam Perbaikan', MessageType.text)
    let hasil = `âœ…Berhasil$ silahkan klik link di bawah untuk mendownload hasilnya$\nKlik link dibawahðŸ—¡ï¸\n\nSize: ${res.data.filesize}\n\nLink: ${res.data.result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}

if (text.includes(",tts")){
const teks = text.replace(/,tts /, "")
const gtts = (`https://rest.farzain.com/api/tts.php?id=${teks}&apikey=pressfstudio`)
    conn.sendMessage(id, gtts ,MessageType.text);
}

if (text.includes(",tiktok")) {
const tictoc = text.replace(/,tiktok /, "")
axios.get(`http://scrap.terhambar.com/tiktokfull?link=${tictoc}`).then((res) => {
	 conn.sendMessage(id, '[WAIT] Searching...❗', MessageType.text)
     let titoe = `âœ…Berhasil$$$ Silahkan klik link dibawah ini untuk mendownload hasilnya$ \nKlik link dibawahðŸ—¡ï¸\n\nJudul: ${res.data.deskripsi} \n\nDurasi: ${res.data.durasi}\n\nNama: ${res.data.nama}\n\nUrl: ${res.data.urlvideo}`;
conn.sendMessage(id, titoe, MessageType.text);
})
}

if (text.includes(",fb")){
const teks = text.replace(/,fb /, "")
axios.get(`http://scrap.terhambar.com/fb?link=${teks}`).then((res) => {
    let hasil = `Download sendiri melalui link dibawah ya. \n\n Judul : ${res.data.result.tittle} \n\n Link: ${res.data.result.linkVideo.sdQuality}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}

if (text.includes(",ig")){
const teks = text.replace(/,ig /, "")
conn.sendMessage(id, 'Maaf Fitur Ini Error', MessageType.text)
axios.get(`https://alfians-api.herokuapp.com/api/ig?url=${teks}`).then((res) => {
    let hasil = `Download sendiri,link error maaf\n\nLink: ${res.data.result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}

if (text.includes(",wiki")){
const teks = text.replace(/,wiki /, "")
axios.get(`https://alfians-api.herokuapp.com/api/wiki?q=${teks}`).then((res) => {
	conn.sendMessage(id, '[WAIT] Searching...❗', MessageType.text)
    let hasil = `*Menurut Wikipedia* :\n\n${res.data.result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}

if (text.includes(",sholat")){
  const teks = text.replace(/,sholat /, "")
  axios.get(`https://api.haipbis.xyz/jadwalsholat?daerah=${teks}`).then ((res) =>{
  conn.sendMessage(id, '[WAIT] Searching...❗', MessageType.text)
  let hasil = `Jadwal sholat di ${teks} hari ini adalah\n\n💫Imsyak : ${res.data.Imsyak}\n💫Subuh : ${res.data.Subuh} WIB\n💫Dzuhur : ${res.data.Dzuhur}WIB\n💫Ashar : ${res.data.Ashar} WIB\n💫Maghrib : ${res.data.Maghrib}\n💫Isya : ${res.data.Isya} WIB\n💫Tengah malam : ${res.data.Dhuha} WIB`;
  conn.sendMessage(id, hasil, MessageType.text);
})
}
if (text.includes(",harinasional")){
  const teks = text.replace(/,harinasional /, "")
  axios.get(`https://api.haipbis.xyz/harinasional?tanggal=${teks}`).then ((res) =>{
  conn.sendMessage(id, '[WAIT] Searching...â—', MessageType.text)
  let hasil = `menurut tanggal ${teks} adalah\n\n *Tanggal* : _${res.data.tanggal}_ \n *Keterangan* : _${res.data.keterangan}_ `;
  conn.sendMessage(id, hasil, MessageType.text);
})
}
else if (text == ',quran'){
axios.get('https://api.banghasan.com/quran/format/json/acak').then((res) => {
    const sr = /{(.*?)}/gi;
    const hs = res.data.acak.id.ayat;
    const ket = `${hs}`.replace(sr, '');
    let hasil = `[${ket}]   ${res.data.acak.ar.teks}\n\n${res.data.acak.id.teks}(QS.${res.data.surat.nama}, Ayat ${ket})`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes(",bitly")){
const teks = text.replace(/,bitly /, "")
axios.get(`https://api.haipbis.xyz/bitly?url=${teks}`).then((res) => {
	conn.sendMessage(id, '[WAIT] Searching...â—', MessageType.text)
    let hasil = `nih kak :) \n\n${res.data.result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes(",namaninja")){
const teks = text.replace(/,namaninja /, "")
axios.get(`https://api.terhambar.com/ninja?nama=${teks}`).then((res) => {
	conn.sendMessage(id, '[WAIT] Searching ', MessageType.text)
    let hasil = `Nama Ninja kamu \n\n ${res.data.result.ninja}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text == ',menu'){
const corohelp = await get.get('https://covid19.mathdro.id/api/countries/id').json()
var date = new Date();
var tahun = date.getFullYear();
var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
switch(hari) {
 case 0: hari = "Minggu"; break;
 case 1: hari = "Senin"; break;
 case 2: hari = "Selasa"; break;
 case 3: hari = "Rabu"; break;
 case 4: hari = "Kamis"; break;
 case 5: hari = "Jum'at"; break;
 case 6: hari = "Sabtu"; break;
}
switch(bulan) {
 case 0: bulan = "Januari"; break;
 case 1: bulan = "Februari"; break;
 case 2: bulan = "Maret"; break;
 case 3: bulan = "April"; break;
 case 4: bulan = "Mei"; break;
 case 5: bulan = "Juni"; break;
 case 6: bulan = "Juli"; break;
 case 7: bulan = "Agustus"; break;
 case 8: bulan = "September"; break;
 case 9: bulan = "Oktober"; break;
 case 10: bulan = "November"; break;
 case 11: bulan = "Desember"; break;
}
var tampilTanggal = "TANGGAL: " + hari + ", " + tanggal + " " + bulan + " " + tahun;
var tampilWaktu = "JAM: " + jam + ":" + menit + ":" + detik;
conn.sendMessage(id, menu.menu(id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2) ,MessageType.text);
}
else if (text == ',donate'){
const corohelp = await get.get('https://covid19.mathdro.id/api/countries/id').json()
var date = new Date();
var tahun = date.getFullYear();
var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
switch(hari) {
 case 0: hari = "Minggu"; break;
 case 1: hari = "Senin"; break;
 case 2: hari = "Selasa"; break;
 case 3: hari = "Rabu"; break;
 case 4: hari = "Kamis"; break;
 case 5: hari = "Jum'at"; break;
 case 6: hari = "Sabtu"; break;
}
switch(bulan) {
 case 0: bulan = "Januari"; break;
 case 1: bulan = "Februari"; break;
 case 2: bulan = "Maret"; break;
 case 3: bulan = "April"; break;
 case 4: bulan = "Mei"; break;
 case 5: bulan = "Juni"; break;
 case 6: bulan = "Juli"; break;
 case 7: bulan = "Agustus"; break;
 case 8: bulan = "September"; break;
 case 9: bulan = "Oktober"; break;
 case 10: bulan = "November"; break;
 case 11: bulan = "Desember"; break;
}
var tampilTanggal = "TANGGAL: " + hari + ", " + tanggal + " " + bulan + " " + tahun;
var tampilWaktu = "JAM: " + jam + ":" + menit + ":" + detik;
conn.sendMessage(id, donate.donate(id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2, grupch3) ,MessageType.text);
}
else if (text == ',donasi'){
const corohelp = await get.get('https://covid19.mathdro.id/api/countries/id').json()
var date = new Date();
var tahun = date.getFullYear();
var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
switch(hari) {
 case 0: hari = "Minggu"; break;
 case 1: hari = "Senin"; break;
 case 2: hari = "Selasa"; break;
 case 3: hari = "Rabu"; break;
 case 4: hari = "Kamis"; break;
 case 5: hari = "Jum'at"; break;
 case 6: hari = "Sabtu"; break;
}
switch(bulan) {
 case 0: bulan = "Januari"; break;
 case 1: bulan = "Februari"; break;
 case 2: bulan = "Maret"; break;
 case 3: bulan = "April"; break;
 case 4: bulan = "Mei"; break;
 case 5: bulan = "Juni"; break;
 case 6: bulan = "Juli"; break;
 case 7: bulan = "Agustus"; break;
 case 8: bulan = "September"; break;
 case 9: bulan = "Oktober"; break;
 case 10: bulan = "November"; break;
 case 11: bulan = "Desember"; break;
}
var tampilTanggal = "TANGGAL: " + hari + ", " + tanggal + " " + bulan + " " + tahun;
var tampilWaktu = "JAM: " + jam + ":" + menit + ":" + detik;
conn.sendMessage(id, donate.donate(id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2, grupch3) ,MessageType.text);
}
else if (text == ',DONATE'){
const corohelp = await get.get('https://covid19.mathdro.id/api/countries/id').json()
var date = new Date();
var tahun = date.getFullYear();
var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
switch(hari) {
 case 0: hari = "Minggu"; break;
 case 1: hari = "Senin"; break;
 case 2: hari = "Selasa"; break;
 case 3: hari = "Rabu"; break;
 case 4: hari = "Kamis"; break;
 case 5: hari = "Jum'at"; break;
 case 6: hari = "Sabtu"; break;
}
switch(bulan) {
 case 0: bulan = "Januari"; break;
 case 1: bulan = "Februari"; break;
 case 2: bulan = "Maret"; break;
 case 3: bulan = "April"; break;
 case 4: bulan = "Mei"; break;
 case 5: bulan = "Juni"; break;
 case 6: bulan = "Juli"; break;
 case 7: bulan = "Agustus"; break;
 case 8: bulan = "September"; break;
 case 9: bulan = "Oktober"; break;
 case 10: bulan = "November"; break;
 case 11: bulan = "Desember"; break;
}
var tampilTanggal = "TANGGAL: " + hari + ", " + tanggal + " " + bulan + " " + tahun;
var tampilWaktu = "JAM: " + jam + ":" + menit + ":" + detik;
conn.sendMessage(id, donate.donate(id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2, grupch3) ,MessageType.text);
}
else if (text == ',DONASI'){
  const corohelp = await get.get('https://covid19.mathdro.id/api/countries/id').json()
var date = new Date();
var tahun = date.getFullYear();
var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
switch(hari) {
 case 0: hari = "Minggu"; break;
 case 1: hari = "Senin"; break;
 case 2: hari = "Selasa"; break;
 case 3: hari = "Rabu"; break;
 case 4: hari = "Kamis"; break;
 case 5: hari = "Jum'at"; break;
 case 6: hari = "Sabtu"; break;
}
switch(bulan) {
 case 0: bulan = "Januari"; break;
 case 1: bulan = "Februari"; break;
 case 2: bulan = "Maret"; break;
 case 3: bulan = "April"; break;
 case 4: bulan = "Mei"; break;
 case 5: bulan = "Juni"; break;
 case 6: bulan = "Juli"; break;
 case 7: bulan = "Agustus"; break;
 case 8: bulan = "September"; break;
 case 9: bulan = "Oktober"; break;
 case 10: bulan = "November"; break;
 case 11: bulan = "Desember"; break;
}
var tampilTanggal = "TANGGAL: " + hari + ", " + tanggal + " " + bulan + " " + tahun;
var tampilWaktu = "JAM: " + jam + ":" + menit + ":" + detik;
conn.sendMessage(id, donate.donate(id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2, grupch3) ,MessageType.text);
}
else if (text == ',info'){
  const corohelp = await get.get('https://covid19.mathdro.id/api/countries/id').json()
var date = new Date();
var tahun = date.getFullYear();
var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
switch(hari) {
 case 0: hari = "Minggu"; break;
 case 1: hari = "Senin"; break;
 case 2: hari = "Selasa"; break;
 case 3: hari = "Rabu"; break;
 case 4: hari = "Kamis"; break;
 case 5: hari = "Jum'at"; break;
 case 6: hari = "Sabtu"; break;
}
switch(bulan) {
 case 0: bulan = "Januari"; break;
 case 1: bulan = "Februari"; break;
 case 2: bulan = "Maret"; break;
 case 3: bulan = "April"; break;
 case 4: bulan = "Mei"; break;
 case 5: bulan = "Juni"; break;
 case 6: bulan = "Juli"; break;
 case 7: bulan = "Agustus"; break;
 case 8: bulan = "September"; break;
 case 9: bulan = "Oktober"; break;
 case 10: bulan = "November"; break;
 case 11: bulan = "Desember"; break;
}
var tampilTanggal = "TANGGAL: " + hari + ", " + tanggal + " " + bulan + " " + tahun;
var tampilWaktu = "JAM: " + jam + ":" + menit + ":" + detik;
conn.sendMessage(id, info.info(id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2) ,MessageType.text);
}
else if (text == ',foto'){
conn.sendMessage(id, 'Kirim foto cewek/cowok\n\nContoh: ,foto cewek' ,MessageType.text);
}

  // Optical Character Recognition
  if (messageType == 'imageMessage')
   {
       let caption = imageMessage.caption.toLocaleLowerCase()
       if (caption == ',img2teks')
       {
           const img = await conn.downloadAndSaveMediaMessage(m)
           readTextInImage(img)
               .then(data => {
                   console.log(data)
                   conn.sendMessage(id, `*Read Data Text in Image* \n\nHasil: \n\n${data}`, MessageType.text);
               })
               .catch(err => {
                   console.log(err)
               })
       }
   }
   
   if (messageType == 'imageMessage')
   {
      let caption = imageMessage.caption.toLocaleLowerCase()
      const buffer = await conn.downloadMediaMessage(m) // to decrypt & use as a buffer
      if (caption == ',sticker')
      {
         const stiker = await conn.downloadAndSaveMediaMessage(m) // to decrypt & save to file

         const
         {
            exec
         } = require("child_process");
         exec('cwebp -q 50 ' + stiker + ' -o temp/' + jam + '.webp', (error, stdout, stderr) =>
         {
            let stik = fs.readFileSync('temp/' + jam + '.webp')
            conn.sendMessage(id, stik, MessageType.sticker)
         });
      }
   }

   if (messageType === MessageType.text)
   {
      let is = m.message.conversation.toLocaleLowerCase()

      if (is == ',pantun')
      {

         fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-pantun-pakboy.txt')
            .then(res => res.text())
            .then(body =>
            {
               let tod = body.split("\n");
               let pjr = tod[Math.floor(Math.random() * tod.length)];
               let pantun = pjr.replace(/pjrx-line/g, "\n");
               conn.sendMessage(id, pantun, MessageType.text)
            });
      }

   }
   if (text.includes(",covid"))
   {
const get = require('got')
    const body = await get.post('https://api.kawalcorona.com/indonesia', {

    }).json();
    var positif = (body[0]['positif']);
    var sembuh  = (body[0]['sembuh']);
    var meninggal = (body[0]['meninggal']);
    var dirawat = (body[0]['dirawat']);
    console.log(body[0]['name'])
    conn.sendMessage(id,`🔎*DATA WABAH COVID-19 TERBARU DI INDONESIA*🔍\n\n📈*Positif ==>* ${positif} \n📉*Sembuh ==>* ${sembuh} \n📋*Meninggal ==>* ${meninggal}\n🗒️*Dirawat ==>* ${dirawat}`, MessageType.text);
}
   if (text.includes(",quotes"))
   {
      var url = 'https://jagokata.com/kata-bijak/acak.html'
      axios.get(url)
         .then((result) =>
         {
            let $ = cheerio.load(result.data);
            var author = $('a[class="auteurfbnaam"]').contents().first().text();
            var kata = $('q[class="fbquote"]').contents().first().text();

            conn.sendMessage(
               id,
               `
_${kata}_
        
    
	*~${author}*
         `, MessageType.text
            );

         });
   }
   

if (text.includes(",pokemon"))
   {
    var items = ["anime pokemon"];
    var nime = items[Math.floor(Math.random() * items.length)];
    var url = "https://api.fdci.se/rep.php?gambar=" + nime;
    
    axios.get(url)
      .then((result) => {
        var n = JSON.parse(JSON.stringify(result.data));
        var nimek =  n[Math.floor(Math.random() * n.length)];
        imageToBase64(nimek) 
        .then(
            (response) => {
	var buf = Buffer.from(response, 'base64'); 
              conn.sendMessage(
            id,
              buf,MessageType.image)
       
            }
        )
        .catch(
            (error) => {
                console.log(error);
            }
        )
    
    });
    }

   else if (text.includes(",nama")) 
  {
    const cheerio = require('cheerio');
    const request = require('request');
    var nama = text.split(",nama ")[1];
    var req = nama.replace(/ /g,"+");
    request.get({
        headers: {'content-type' : 'application/x-www-form-urlencoded'},
        url:     'http://www.primbon.com/arti_nama.php?nama1='+ req +'&proses=+Submit%21+',
      },function(error, response, body){
          let $ = cheerio.load(body);
          var y = $.html().split('arti:')[1];
          var t = y.split('method="get">')[1];
          var f = y.replace(t ," ");
          var x = f.replace(/<br\s*[\/]?>/gi, "\n");
          var h  = x.replace(/<[^>]*>?/gm, '');
      console.log(""+ h);
      conn.sendMessage(id,
            `
      Arti dari namamu adalah



         Nama _*${nama}*_ ${h}
         


`,
 MessageType.text);
  });
  }
  else if (text.includes(",pasangan ")) {
    const request = require('request');
    var gh = text.split(",pasangan ")[1];
    var namamu = gh.split("&")[0];
    var pasangan = gh.split("&")[1];
    request.get({
        headers: {'content-type' : 'application/x-www-form-urlencoded'},
        url:     'http://www.primbon.com/kecocokan_nama_pasangan.php?nama1='+ namamu +'&nama2='+ pasangan +'&proses=+Submit%21+',

    },function(error, response, body){
        let $ = cheerio.load(body);
      var y = $.html().split('<b>KECOCOKAN JODOH BERDASARKAN NAMA PASANGAN</b><br><br>')[1];
        var t = y.split('.<br><br>')[1];
        var f = y.replace(t ," ");
        var x = f.replace(/<br\s*[\/]?>/gi, "\n");
        var h  = x.replace(/<[^>]*>?/gm, '');
        var d = h.replace("&amp;", '&')
      console.log(""+ d);
      conn.sendMessage(id, `



 *Kecocokan berdasarkan nama*


 ${d}



    `, MessageType.text);
  });
  }
   if (text.includes(",foto cewek"))
   {
    var items = ["ullzang girl", "cewe cantik", "hijab cantik", "korean girl", "remaja cantik", "cewek korea", "cewek jepang"];
    var cewe = items[Math.floor(Math.random() * items.length)];
    var url = "https://api.fdci.se/rep.php?gambar=" + cewe;
    
    axios.get(url)
      .then((result) => {
        var b = JSON.parse(JSON.stringify(result.data));
        var cewek =  b[Math.floor(Math.random() * b.length)];
        imageToBase64(cewek) // Path to the image
        .then(
            (response) => {
    conn.sendMessage(id, '[WAIT] Searching...❗', MessageType.text)
	var buf = Buffer.from(response, 'base64'); // Ta-da	
              conn.sendMessage(
            id,
              buf,MessageType.image)
       
            }
        )
        .catch(
            (error) => {
                console.log(error); // Logs an error if there was one
            }
        )
    
    });
    }

   if (text.includes(",foto cowok"))
   {
    var items = ["cowo ganteng", "cogan", "korean boy", "chinese boy", "japan boy", "cowok indo ganteng", "cowok korea"];
    var cowo = items[Math.floor(Math.random() * items.length)];
    var url = "https://api.fdci.se/rep.php?gambar=" + cowo;
    
    axios.get(url)
      .then((result) => {
        var z = JSON.parse(JSON.stringify(result.data));
        var cowok =  z[Math.floor(Math.random() * z.length)];
        imageToBase64(cowok) 
        .then(
            (response) => {
  conn.sendMessage(id, '[WAIT] Searching...❗', MessageType.text)
  var buf = Buffer.from(response, 'base64'); 
              conn.sendMessage(
            id,
              buf,MessageType.image)
       
            }
        )
        .catch(
            (error) => {
                console.log(error);
            }
        )
    
    });
    }

if (text.includes(",foto anime"))
   {
    var items = ["anime girl", "anime cantik", "anime", "anime aesthetic", "anime hd", "gambar anime hd"];
    var nime = items[Math.floor(Math.random() * items.length)];
    var url = "https://api.fdci.se/rep.php?gambar=" + nime;
    
    axios.get(url)
      .then((result) => {
        var n = JSON.parse(JSON.stringify(result.data));
        var nimek =  n[Math.floor(Math.random() * n.length)];
        imageToBase64(nimek) 
        .then(
            (response) => {
    conn.sendMessage(id, '[WAIT] Searching...❗', MessageType.text)
	var buf = Buffer.from(response, 'base64'); 
              conn.sendMessage(
            id,
              buf,MessageType.image)
       
            }
        )
        .catch(
            (error) => {
                console.log(error);
            }
        )
    
    });
    }
 
if (text.includes(",lirik")){
	const teks = text.split(",lirik")[1]
	axios.get(`http://scrap.terhambar.com/lirik?word=${teks}`).then ((res) => {
	     conn.sendMessage(id, '[WAIT] Searching...❗', MessageType.text)
	 	let hasil = `🎶lirik🎶 lagu ${teks} \n\n\n ${res.data.result.lirik}`
	conn.sendMessage(id, hasil, MessageType.text)
	})
}
if (text.includes(",alay")){
	const alay = text.split(",alay")[1]
	axios.get(`https://api.terhambar.com/bpk?kata=${alay}`).then ((res) =>
		{ let hasil = `${res.data.text}`
		conn.sendMessage(id, hasil, MessageType.text)
	})
}

//Tolonglah bro jangan di ubah ubah Y


})

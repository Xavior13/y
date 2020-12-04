exports.info = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2, grupch3) => {
	return `*INFO ${BotName}*
  
Hi, *${id.split("@s.whatsapp.net")[0]}* 👋️
Berikut adalah info pada bot ini!

📆 *${tampilTanggal}*
⏱️ *${tampilWaktu}*

         
*Info Bot*
➻ *AUTHOR*  : *${BotName}*
➻ *DESIGNER*: *${BotName}*
➻ *GITHUB*  : _https://github.com_
➻ *BOT AKTIF* : ${kapanbotaktif}

*Cita-cita ingin menjadi suami Anya Geraldine :)*

*SOSMED ADMIN*
➻ *Group WhatsApp* _${grupch1}_
➻ *YouTube* _https://www.youtube.com_
➻ *Instagram* _${instagramlu}_
➻ *Creator ${BotName}* _${whatsapplu}_


*MADE BY ${BotName}*`
}

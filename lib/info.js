exports.info = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2, grupch3) => {
	return `*MENU ${BotName}*
  
  Hi, *${id.split("@s.whatsapp.net")[0]}* 👋️

         ───
📆 *${tampilTanggal}*
⏱️ *${tampilWaktu}*
         ───
         
*About ${BotName}*
➻ *AUTHOR*: *Y*
➻ *DESIGNER*: *Y*
➻ *YOUTUBE*: ~

*${BotName}*

*SOSMED ADMIN*
➻ *Group WhatsApp* _${grupch1}_ _{grupch2}_
➻ *YouTube* ~
➻ *Instagram* _${instagramlu}_
➻ *Creator ${BotName}* _${whatsapplu}_


*MADE BOT Y*`
}
exports.donate = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2, grupch3) => {
	return `
  
  Hi, *${id.split("@s.whatsapp.net")[0]}* 👋️

         ───
📆 *${tampilTanggal}*
⏱️ *${tampilWaktu}*
         ───

 *Donasi Ke ${BotName}*

➻ *PULSA* : _087898728747_
➻ *DANA* : _087898728747_

*${BotName}*

*SOSMED ADMIN*
➻ *Group WhatsApp* _${grupch1}_ & _${grupch2}_
➻ *YouTube* ~
➻ *Instagram* _${instagramlu}_
➻ *Creator ${BotName}* _${whatsapplu}_

*MADE BOT Y*`
}


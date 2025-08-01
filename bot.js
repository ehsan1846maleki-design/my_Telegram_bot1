const TelegramBot = require('node-telegram-bot-api');

const token = '7971420438:AAFqm53T0-fIH0gPIuu_RVuLA7ds2PNlpGQ';  // توکن ربات تو اینجا هست

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, `سلام! ربات فعال است. دستورها:\n/buy برای خرید\n/sell برای فروش`);
});

bot.onText(/\/buy/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'لطفا مقدار و نوع ارزی که می‌خواهید بخرید را بفرستید:');
  bot.once('message', (msg2) => {
    if (msg2.chat.id === chatId) {
      bot.sendMessage(chatId, `درخواست خرید شما دریافت شد:\n${msg2.text}\nلطفا مبلغ را واریز کنید.`);
    }
  });
});

bot.onText(/\/sell/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'لطفا مقدار و نوع ارزی که می‌خواهید بفروشید را بفرستید:');
  bot.once('message', (msg2) => {
    if (msg2.chat.id === chatId) {
      bot.sendMessage(chatId, `درخواست فروش شما دریافت شد:\n${msg2.text}\nلطفا ارز را به کیف پول ارسال کنید.`);
    }
  });
});
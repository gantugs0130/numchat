module.exports = function(controller) {

    console.log('menu payload');
    
    controller.on('facebook_postback', function(bot, message) {
        switch (message.payload) {
            case 'menu_numRule':
                ans_menu_numRule(bot, message);
                break;
            case 'menu_ohvgJob':
                ans_menu_ohvgJob(bot, message);
                break;
            case 'menu_ohvgStExchange':
                ans_menu_ohvgStExchange(bot, message);
                break;
            case 'menu_ohvgVolunteer':
                ans_menu_ohvgVolunteer(bot, message);
                break;
            case 'menu_CultureAndHealthAndSport':
                ans_menu_CultureAndHealthAndSport(bot, message);
                break;
            case 'menu_ForeignStudent':
                ans_menu_ForeignStudent(bot, message);
                break;
            case 'menu_stcounselUnion':
                ans_menu_stcounselUnion(bot, message);
                break;
            case 'menu_stcounselBusiness':
                ans_menu_stcounselBusiness(bot, message);
                break;
            case 'menu_stcounselLegalAndSirpa':
                ans_menu_stcounselLegalAndSirpa(bot, message);
                break;
            case 'menu_stcounselSeasAndSas':
                ans_menu_stcounselSeasAndSas(bot, message);
                break;
            default:
                bot.reply(message, 'meh!');
        }
    });
  
  function ans_menu_numRule(bot, message) {
    bot.reply(message, '6');
  }

  function ans_menu_ohvgJob(bot, message) {
      bot.reply(message, '5');
  }
  function ans_menu_ohvgStExchange(bot, message) {
    bot.reply(message, '4');
  }
  function ans_menu_ohvgVolunteer(bot, message) {
    bot.reply(message, '3');
  }

  function ans_menu_CultureAndHealthAndSport(bot, message) {
      bot.reply(message, '2');
  }
  function ans_menu_ForeignStudent(bot, message) {
    bot.reply(message, '1');
  }
  function ans_menu_stcounselUnion(bot, message){
    bot.reply(message, '1.1');
  }
  function ans_menu_stcounselBusiness(bot, message){
      bot.reply(message, '1.2');
  }
  function ans_menu_stcounselLegalAndSirpa(bot, message){
      bot.reply(message, '1.3');
  }
  function ans_menu_stcounselSeasAndSas(bot, message){
      bot.reply(message, '1.4');
  }

}

/*
  **menu_numRule
  **menu_ohvgJob
  **menu_ohvgStExchange
  **menu_ohvgVolunteer
  **menu_ohvgCultureAndHealthAndSport
  **menu_ohvgForeignStudent
  **menu_stcounselUnion
  **menu_stcounselBusiness
  **menu_stcounselLegalAndSirpa
  **menu_stcounselSeasAndSas
  menu_stcounselOrkhonAndZawkhan
  menu_numScholar
  menu_numClub
  menu_numArmy
  num_numDorm
  menu_numLocation
  menu_infoEvent
  menu_infoNews
  menu_infoLiveChat
  menu_liveChat
*/
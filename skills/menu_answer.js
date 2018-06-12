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
            case 'menu_stcounselOrkhonAndZawkhan':
                ans_menu_stcounselOrkhonAndZawkhan(bot, message);
                break;
            case 'menu_numScholar':
                ans_menu_numScholar(bot, message);
                break;
            case 'menu_numClub':
                ans_menu_numClub(bot, message);
                break;
            case 'menu_numArmy':
                ans_menu_numArmy(bot, message);
                break;
            case 'num_numDorm':
                ans_num_numDorm(bot, message);
                break;
            case 'menu_numLocation':
                ans_menu_numLocation(bot, message);
                break;
            case 'menu_infoEvent':
                ans_menu_infoEvent(bot, message);
                break;
            case 'menu_infoNews':
                ans_menu_infoNews(bot, message);
                break;
            case 'menu_infoLiveChat':
                ans_menu_infoLiveChat(bot, message);
                break;
            case 'menu_liveChat':
                ans_menu_liveChat(bot, message);
                break;
            default:
                bot.reply(message, 'meh!');
        }
    });
  
  function ans_menu_numRule(bot, message) {
    bot.reply(message, 'Дараах линкээр орж мэдээллээ үзнэ үү http://news.num.edu.mn/wp-content/uploads/2017/12/%D0%A1%D1%83%D1%80%D0%B3%D0%B0%D0%BB%D1%82%D1%8B%D0%BD-%D0%B6%D1%83%D1%80%D0%B0%D0%BC-%D1%82%D3%A9%D1%81%D3%A9%D0%BB.pdf');
  }

  function ans_menu_ohvgJob(bot, message) {
      bot.reply(message, 'Оюутны албанаас хөдөлмөр эрхлэлтийг дэмжих хөтөлбөрийн хүрээнд чадавхжуулах сургалт, ажил олгогчдын үзэсгэлэн яармаг, мэргэжил сурталчлах мөн томоохон ажил олгогч байгууллагуудтай танилцах аялал, цагийн болон ажлын байранд зуучлах ажлыг зохион байгуулдаг дэлгэрэнгүй мэдээллийг дэраах линээр үзнэ үү http://student.num.edu.mn/?page_id=123');
  }
  function ans_menu_ohvgStExchange(bot, message) {
    bot.reply(message, 'Оюутнууд тус сургуульд суралцах хугацаандаа хамтын ажиллагаа, оюутан солилцооны гэрээтэй гадаадын их сургуульд нэг улирал эсвэл нэг жилийн хугацаанд оюутан солилцооны хөтөлбөрт хамрагдах боломжтой. Солилцооны хөтөлбөрт хамрагдсанаар оюутнууд гадаад хэлний мэдлэг, сурч буй мэргэжлийн дагуу мэдлэг чадвараа дээшлүүлэх, гадаад улс орны соёлоос суралцах давуу талтай дэлгэрэнгүй мэдээллийг дэраах линээр үзнэ үү http://student.num.edu.mn/?page_id=577');
  }
  function ans_menu_ohvgVolunteer(bot, message) {
    bot.reply(message, '3');
  }

  function ans_menu_CultureAndHealthAndSport(bot, message) {
      bot.reply(message, 'Дараах линкээр орж мэдээллээ үзнэ үү http://student.num.edu.mn/?page_id=131');
  }
  function ans_menu_ForeignStudent(bot, message) {
    bot.reply(message, 'Гадаад оюутнуудыг Монгол орны амьдрал, их сургуулийн амьдралд дасан зохицоход болон Монгол хэл сурахад туслах зорилгоор Монгол оюутнуудтай нөхөрлүүлэх, гадаад оюутнуудыг өдөр тутмын амьдралд нь туслах чиглүүлж өгөх зорилготой. Дэлгэрэнгүй мэдээллийг дараах линкээр орж үзнэ үү http://student.num.edu.mn/?page_id=242');
  }
  function ans_menu_stcounselUnion(bot, message){
    bot.reply(message, '1.1');
  }
  function ans_menu_stcounselBusiness(bot, message){
      bot.reply(message, 'Утасны дугаар:77307730-4101, Email:bs@num.edu.mn, Website:http://bs.num.edu.mn ');
  }
  function ans_menu_stcounselLegalAndSirpa(bot, message){
      bot.reply(message, ' Хууль зүйн сургуул: Утасны дугаар:77307730-312600, Email:lawschool@num.edu.mn, Website:http://law.num.edu.mn           ОУХНУС:  Утасны дугаар:77307730-5101, Email:sirparo@num.edu.mn, Website:http://sirpa.num.edu.mn');
  }
  function ans_menu_stcounselSeasAndSas(bot, message){
      bot.reply(message, 'ХШИУС: Утасны дугаар:325631, Email:contact@seas.num.edu.mn, Website:http://seas.num.edu.mn        ШУС: Утасны дугаар:77307730-2101, Email:sas@num.edu.mn, Website:http://sas.num.edu.mn');
  }
  function ans_menu_stcounselOrkhonAndZawkhan(bot, message){
      bot.reply(message, 'Эрдэнэт: Утасны дугаар:7035-2851, Email:erdenet@num.edu.mn, Website:http://www.muis-orkhon.mn Завхан: Утасны дугаар:70462233, Email:zavkhan_1974@yahoo.com , Website:za.num.edu.mn');
  }
  function ans_menu_numScholar(bot, message){
      bot.reply(message, '1.6');
  }
  function ans_menu_numClub(bot, message){
      bot.reply(message, '1.7');
  }
  function ans_menu_numArmy(bot, message){
      bot.reply(message, '1.8');
  }
  function ans_num_numDormnum_numDorm(bot, message){
      bot.reply(message, '1.9');
  }
  function ans_menu_numLocation(bot, message){
      bot.reply(message, '2.0');
  }
  function ans_menu_infoEvent(bot, message){
      bot.reply(message, '2.1');
  }
  function ans_menu_infoNews(bot, message){
      bot.reply(message, '2.2');
  }
  function ans_menu_infoLiveChat(bot, message){
      bot.reply(message, '2.3');
  }
  function ans_menu_liveChat(bot, message){
      bot.reply(message, '2.4');
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
  **menu_stcounselOrkhonAndZawkhan
  **menu_numScholar
  **menu_numClub
  **menu_numArmy
  **num_numDorm
  **menu_numLocation
  **menu_infoEvent
  **menu_infoNews
  **menu_infoLiveChat
  **menu_liveChat
*/
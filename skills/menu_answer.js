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
      bot.reply(message, 'Утасны дугаар:77307730-4101,\nEmail:bs@num.edu.mn,\nWebsite:http://bs.num.edu.mn');
  }
  function ans_menu_stcounselLegalAndSirpa(bot, message){
      bot.reply(message, 'Хууль зүйн сургуул:\nУтасны дугаар:77307730-312600,\nEmail:lawschool@num.edu.mn,\nWebsite:http://law.num.edu.mn\nОУХНУС:\nУтасны дугаар:77307730-5101,\nEmail:sirparo@num.edu.mn, \nWebsite:http://sirpa.num.edu.mn');
  }
  function ans_menu_stcounselSeasAndSas(bot, message){
      bot.reply(message, 'ХШИУС:\nУтасны дугаар:325631,\nEmail:contact@seas.num.edu.mn,\nWebsite:http://seas.num.edu.mn\nШУС:\nУтасны дугаар:77307730-2101,\nEmail:sas@num.edu.mn,\nWebsite:http://sas.num.edu.mn');
  }
  function ans_menu_stcounselOrkhonAndZawkhan(bot, message){
      bot.reply(message, 'Эрдэнэт:\nУтасны дугаар:7035-2851,\nEmail:erdenet@num.edu.mn,\nWebsite:http://www.muis-orkhon.mn\nЗавхан:\nУтасны дугаар:70462233,\nEmail:zavkhan_1974@yahoo.com,\n Website:http://za.num.edu.mn');
  }
  function ans_menu_numScholar(bot, message){
      bot.reply(message, 'Тайваний иргэн Wuni Wurta-ийн нэрэмжит тэтгэлэг зарлагдлаа\nТэтгэлгийн зорилго: Монголын ирээдүйг бүтээлцэхүйц МУИС-д суралцаж буй идэвхитэй, сурлага сайтай, манлайлагч, сургалтын төлбөрийн дэмжлэг шаардлагатай оюутнуудыг дэмжих, хөгжүүлэх зорилготой. Жил бүр бакалаврын түвшний 6 оюутанд тэтгэлэг олгодог. Тэтгэлгийн хэмжээ: Нэг улиралд 250 ам.доллар байна дэлгэрэгүй мэдээллийг дараах линкээр орж үзнэ үү\nhttp://news.num.edu.mn/?p=50989\nМУИС-ИЙН НЭРЭМЖИТ ТЭТГЭЛЭГ-2019” ЗАРЛАГДЛАА\nТэтгэлгийн зорилго нь: МУИС-д суралцаж буй бакалаврын түвшний суралцагчдын сурч боловсрох, өөрийгөө хөгжүүлэхэд дэмжлэг үзүүлэх, амжилттай суралцаж буй шилдэг суралцагчийг урамшуулах зорилготой. Дараах болзол хангасан суралцагч тэтгэлэгт нэрээ дэвшүүлэх боломжтой дэлгэрэнгүй мэдээллийг дараах линкээр орж үзнэ үү\nhttp://news.num.edu.mn/?p=50950');
  }
  function ans_menu_numClub(bot, message){
      bot.reply(message, 'Айсек NUM:\nХолбоо барих: 94949900\nTalent student:\nХолбоо барих: Номингэрэл 88566565\nУтгын чандмань:\nХолбоо барих: Бямбасүрэн 88968402\nGoogle:\nХолбоо барих: Б.Мөнхцэцэг 88176621\nМини парламент:\nХолбоо барих: Г.Тэмүүлэн 99758070\nГэрлэн дохио клуб:\nХолбоо барих:  Б.Мандахбаяр 90613232\nProbe клуб:\nХолбоо барих: 86838386\nЭнтимема клуб:\nХолбоо барих: 95975902\nHackum:\n Холбоо барих: 97121221\n дэлгэрэнгүй мэдээллийг дараах линкээр орж үзнэ үү\nhttp://student.num.edu.mn/?cat=5');
  }
  function ans_menu_numArmy(bot, message){
      bot.reply(message, '2018 онд “Оюутан цэрэг” хөтөлбөрт МУИС-иас 120 оюутан хамрагдана дэлгэрэнгүй мэдээллийг дараах линкээр орж үзнэ үү\nhttp://news.num.edu.mn/?p=50025');
  }
  function ans_num_numDorm(bot, message){
      bot.reply(message, 'МУИС нь Оюутны 6 дотуур байртай. Оюутан байранд амьдрах хүсэлт гаргахдаа Сиси мэдээллийн системд нэвтрэн бүртгүүлнэ. Бүртгүүлэгч нь МУИС-ийн бүх түвшний, идэвхитэй төлөвийн суралцагч байх бөгөөд МУИС-д шинээр элсэгчийн хувьд СиСи мэдээллийн системд нэвтрэх оюутны бүртгэлийн дугаар авсан байх шаардлагатай. Дэлгэрэнгүй мэдээллийг дараах линкээр орж үзнэ үү\nhttp://student.num.edu.mn/?page_id=125');
  }
  function ans_menu_numLocation(bot, message){
      bot.reply(message, 'ШУС:\n Монгол улс, Улаанбаатар хот 210646, ш/х 377, Сүхбаатар дүүрэг, Залуучуудын өргөн чөлөө 1\nХШУИС:\nМонгол улс, Улаанбаатар хот, Сүхбаатар дүүрэг, Их сургуулийн гудамж-3, МУИС-ийн хичээлийн III байр\nБС:\nИХ СУРГУУЛИЙН ГУДАМЖ - 1, БАГА ТОЙРУУ-4, СҮХБААТАР ДҮҮРЭГ, УЛААНБААТАР\nОУХНУС:\nМонгол улс, Улаанбаатар хот, Сүхбаатар дүүрэг, Бага тойруу 1 , МУИС-ийн хичээлийн V байр\nХЗС:\nМонгол улс, Улаанбаатар хот, Сүхбаатар дүүрэг, Нэгдсэн Үндэстний гудамж 17, Монгол Улсын Их Сургууль, Хичээлийн 3Б байр, Хууль зүйн сургууль\nЗавхан Сургууль:\nМонгол улс, Завхан аймаг, Улиастай хот\nЭрдэнэт сургууль:\nМонгол улс, Орхон аймаг, Эрдэнэт хот, Баян-Өндөр сум, Дэнж баг, Оюутны гудамж-4, МУИС-ийн Эрдэнэт сургууль');
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
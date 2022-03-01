const scriptName = "편의기능ver2";
const kalingModule = require('kaling').Kakao();
const Kakao = new kalingModule;
Kakao.init();
Kakao.login();

function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
  if (msg.indexOf("[") == 0) {
    let emoCount = 0;
    let emoValue = 0;
    for (let i = 0; i < emoText.length; i++) {
      if (emoText[i].indexOf("||") != -1) {
        let otherCount = 0;
        let otherCheck = emoText[i].split("||");
        for (let j = 0; j < otherCheck.length; j++) {
          if (msg == otherCheck[j]) {
            emoValue = i;
          } else {
            otherCount++;
          }
        }
        if (otherCount == otherCheck.length) {
          emoCount++;
        }
      } else {
        if (msg == emoText[i]) {
          emoValue = i;
        } else {
          emoCount++;
        }
      }
    }
    if (emoCount != emoText.length) {
      Kakao.send(room, {
        "link_ver": "4.0",
        "template_id": 45365 ,
        "template_args": {
          "title": "",
          "des": msg,
          "wid": emoWid[emoValue],
          "hei": emoHei[emoValue],
          "img": emoImg[emoValue]
        }
      }, "custom");
    }

    return 0;
  }
  
  if (msg.indexOf("!메뉴 ") == 0) {
    let order = msg.split("!메뉴 ")[1];
    let sw = 999;
    for (let i = 0; i < menu.length; i++) {
      if (order == menu[i]) {
        sw = i;
      } else if (order == "탕") {
        sw = 1;
      } else if (order == "술안주" || order == "안주") {
        sw = 6;
      } else if (order == "카테고리") {
        replier.reply("《추천 메뉴 카테고리 목록》\n밥 / 국(탕) / 분식 / 면 / 일식 / 중식 / 야식(술안주) / 아무거나(앞 항목들에 해당하지 않는 아무말)");

        return 0;
      }
    }

    switch (sw) {
      case 0: // 밥
        rnd = Math.floor(Math.random() * rice.length);

        Kakao.send(room, {
          "link_ver": "4.0",
          "template_id": 32925 ,
          "template_args": {
            "title": "《" + sender + "님의 추천 메뉴》",
            "des": rice[rnd],
            "img": riceImg[rnd]
          }
        }, "custom");

        break;

      case 1: // 국
        rnd = Math.floor(Math.random() * soup.length);

        Kakao.send(room, {
          "link_ver": "4.0",
          "template_id": 32925 ,
          "template_args": {
            "title": "《" + sender + "님의 추천 메뉴》",
            "des": soup[rnd],
            "img": soupImg[rnd]
          }
        }, "custom");

        break;

      case 2: // 분식
        rnd = Math.floor(Math.random() * koreanStyle.length);

        Kakao.send(room, {
          "link_ver": "4.0",
          "template_id": 32925 ,
          "template_args": {
            "title": "《" + sender + "님의 추천 메뉴》",
            "des": koreanStyle[rnd],
            "img": koreanStyleImg[rnd]
          }
        }, "custom");

        break;

      case 3: // 면
        rnd = Math.floor(Math.random() * noodle.length);

        Kakao.send(room, {
          "link_ver": "4.0",
          "template_id": 32925 ,
          "template_args": {
            "title": "《" + sender + "님의 추천 메뉴》",
            "des": noodle[rnd],
            "img": noodleImg[rnd]
          }
        }, "custom");

        break;

      case 4: // 일식
        rnd = Math.floor(Math.random() * japaneese.length);

        Kakao.send(room, {
          "link_ver": "4.0",
          "template_id": 32925 ,
          "template_args": {
            "title": "《" + sender + "님의 추천 메뉴》",
            "des": japaneese[rnd],
            "img": japaneeseImg[rnd]
          }
        }, "custom");

        break;

      case 5: // 중식
        rnd = Math.floor(Math.random() * chineese.length);

        Kakao.send(room, {
          "link_ver": "4.0",
          "template_id": 32925 ,
          "template_args": {
            "title": "《" + sender + "님의 추천 메뉴》",
            "des": chineese[rnd],
            "img": chineeseImg[rnd]
          }
        }, "custom");

        break;

      case 6: // 야식
        rnd = Math.floor(Math.random() * nightMenu.length);

        Kakao.send(room, {
          "link_ver": "4.0",
          "template_id": 32925 ,
          "template_args": {
            "title": "《" + sender + "님의 추천 메뉴》",
            "des": nightMenu[rnd],
            "img": nightMenuImg[rnd]
          }
        }, "custom");

        break;
    
      default: // 아무거나
        rnd = Math.floor(Math.random() * anything.length);

        Kakao.send(room, {
          "link_ver": "4.0",
          "template_id": 32925 ,
          "template_args": {
            "title": "《" + sender + "님의 추천 메뉴》",
            "des": anything[rnd],
            "img": anythingImg[rnd]
          }
        }, "custom");

        break;
    }
  }
}

// 배열
{
  var emoText = [
                  "[놀자에요]",
                  "[머쓱해요]",
                  "[뭐라구요]||[뭐라구요?]",
                  "[웃프네요]",
                  "[추천이요]||[최고에요]",
                  "[놀자에몽]",
                  "[머쓱환에요]",
                  "[정말이요]",
                  "[웃기구요]",
                  "[웃기네요]",
                  "[엄지척]||[엄지로아콘]",
                  "[모야호]||[야호로아콘]",
                  "[크크크]",
                  "[방긋방긋]",
                  "[이거줘]",
                  "[응안줘]",
                  "[빠직]",
                  "[슬퍼]",
                  "[기분좋은향기]||[향기로아콘]",
                  "[털썩]"
                ];
  var emoWid = [
                  /*[놀자에요]*/283,
                  /*[머쓱해요]*/283,
                  /*[뭐라구요]*/283,
                  /*[웃프네요]*/283,
                  /*[추천이요]*/283,
                  /*[놀자에몽]*/283,
                  /*[머쓱환에요]*/340,
                  /*[정말이요]*/283,
                  /*[웃기구요]*/255,
                  /*[웃기네요]*/255,
                  /*[엄지척]*/360,
                  /*[모야호]*/360,
                  /*[크크크]*/360,
                  /*[방긋방긋]*/360,
                  /*[이거줘]*/360,
                  /*[응안줘]*/360,
                  /*[빠직]*/360,
                  /*[슬퍼]*/360,
                  /*[기분좋은향기]*/360,
                  /*[털썩]*/360
                ];
  var emoHei = [
                  /*[놀자에요]*/283,
                  /*[머쓱해요]*/283,
                  /*[뭐라구요]*/283,
                  /*[웃프네요]*/283,
                  /*[추천이요]*/283,
                  /*[놀자에몽]*/283,
                  /*[머쓱환에요]*/255,
                  /*[정말이요]*/283,
                  /*[웃기구요]*/255,
                  /*[웃기네요]*/255,
                  /*[엄지척]*/360,
                  /*[모야호]*/360,
                  /*[크크크]*/360,
                  /*[방긋방긋]*/360,
                  /*[이거줘]*/360,
                  /*[응안줘]*/360,
                  /*[빠직]*/360,
                  /*[슬퍼]*/360,
                  /*[기분좋은향기]*/360,
                  /*[털썩]*/360
                ];
  var emoImg = [
    /*[놀자에요]*/"https://cdn.discordapp.com/attachments/778559127273734165/906563617170812949/i14275538961.png",
    /*[머쓱해요]*/"https://cdn.discordapp.com/attachments/778559127273734165/906563631263657984/i14726556752.png",
    /*[뭐라구요]*/"https://cdn.discordapp.com/attachments/778559127273734165/906563649588584498/i13566529069.png",
    /*[웃프네요]*/"https://cdn.discordapp.com/attachments/778559127273734165/906563668551020634/i15246737836.png",
    /*[추천이요]*/"https://cdn.discordapp.com/attachments/778559127273734165/906563725551603773/i16357392680.png",
    /*[놀자에몽]*/"https://cdn.discordapp.com/attachments/778559127273734165/906563800386404402/i16410971663.png",
    /*[머쓱환에요]*/"https://cdn.discordapp.com/attachments/778559127273734165/906563876773052426/i15916633816.png",
    /*[정말이요]*/"https://cdn.discordapp.com/attachments/778559127273734165/906563912936325180/i15436393927.png",
    /*[웃기구요]*/"https://cdn.discordapp.com/attachments/778559127273734165/906563938580324372/i14535754235.png",
    /*[웃기네요]*/"https://cdn.discordapp.com/attachments/778559127273734165/906563938580324372/i14535754235.png",
    /*[엄지척]*/"https://cdn.discordapp.com/attachments/778559127273734165/923749325719355452/01_1_01_.png",
    /*[모야호]*/"https://cdn.discordapp.com/attachments/778559127273734165/923749326210072596/01_1_03_.png",
    /*[크크크]*/"https://cdn.discordapp.com/attachments/778559127273734165/923749326650482758/01_1_06_.png",
    /*[방긋방긋]*/"https://cdn.discordapp.com/attachments/778559127273734165/923749326868602910/01_1_09_.png",
    /*[이거줘]*/"https://cdn.discordapp.com/attachments/778559127273734165/923749327078297620/01_1_13_.png",
    /*[응안줘]*/"https://cdn.discordapp.com/attachments/778559127273734165/923749327300624474/01_1_14__.png",
    /*[빠직]*/"https://cdn.discordapp.com/attachments/778559127273734165/923749327598387210/01_1_17_.png",
    /*[슬퍼]*/"https://cdn.discordapp.com/attachments/778559127273734165/923749327904595988/01_1_18_.png",
    /*[기분좋은향기]*/"https://cdn.discordapp.com/attachments/778559127273734165/923749328277864468/01_1_23_.png",
    /*[털썩]*/"https://cdn.discordapp.com/attachments/778559127273734165/923749328554696785/01_1_24_.png"
  ];

  var menu = ["밥", "국", "분식", "면", "일식", "중식", "야식"];
  var rice = ["제육덮밥", "비빔밥", "오므라이스", "카레덮밥", "야채볶음밥", "짜장밥", "회덮밥", "쌈밥", "김치볶음밥"];
  var soup = ["김치찌개", "부대찌개", "된장찌개", "육개장", "순두부찌개", "돼지국밥", "매운탕", "해물탕", "뼈해장국"];
  var koreanStyle = ["떡볶이", "핫도그", "김밥", "순대", "돈까스", "튀김", "어묵", "라볶이", "만두"];
  var noodle = ["라면", "냉면", "칼국수", "짜파게티", "비빔국수", "잔치국수", "스파게티", "막국수", "쫄면"];
  var japaneese = ["우동", "가츠동", "하이라이스", "오코노미야끼", "초밥", "규동", "라멘", "소바", "돈부리"];
  var chineese = ["짜장면", "짬뽕", "볶음밥", "탕수육", "마파두부", "깐풍기", "고추잡채", "팔보채", "깐쇼새우"];
  var nightMenu = ["치킨", "족발/보쌈", "피자", "닭발", "곱창/막창", "콘치즈", "골뱅이무침", "삼겹살", "오뎅탕"];
  var anything = ["삼각김밥", "햄버거", "토스트", "컵라면", "도시락", "밥버거", "빵", "샌드위치", "죽"];

  var riceImg = [
    // 제육덮밥
    "https://cdn.discordapp.com/attachments/778559127273734165/887274105756344350/caddf21e43f4e734ff3ee24b8b2a4d501.png",

    // 비빔밥
    "https://cdn.discordapp.com/attachments/778559127273734165/887276381086547978/7qmB9Y82JQpNv4hc57YB9JztwEieKDNnAhRq0GV1A5QsdJKFKVoQUM4Awl3vDkCyHwIPRgLHB_zWYKIc8wNFfX9-DL2IqgRk30a_.png",

    // 오므라이스
    "https://cdn.discordapp.com/attachments/778559127273734165/887276570589425704/093.png",

    // 카레덮밥
    "https://cdn.discordapp.com/attachments/778559127273734165/887276693058879498/e21d32797b804.png",

    // 야채볶음밥
    "https://cdn.discordapp.com/attachments/778559127273734165/887276826139959296/B002658232.png",

    // 짜장밥
    "https://cdn.discordapp.com/attachments/778559127273734165/887276914539122718/maxresdefault.png",

    // 회덮밥
    "https://cdn.discordapp.com/attachments/778559127273734165/887277305578262578/ED9A8CEB8DAEEBB0A5.png",

    // 쌈밥
    "https://cdn.discordapp.com/attachments/778559127273734165/887277646726185010/182525374D6170B405.png",

    // 김치볶음밥
    "https://cdn.discordapp.com/attachments/778559127273734165/887277784873963560/32b66f77ef969034adcbce3840d362f66470c1ade8b3b67e9859954467a61a77ffe24051fd4db50a6a5251acd242a9140df6.png"
  ];
  var soupImg = [
    // 김치찌개
    "https://cdn.discordapp.com/attachments/778559127273734165/887277883142320148/20200314_171845318_69942.png",

    // 부대찌개
    "https://cdn.discordapp.com/attachments/778559127273734165/887277971713458216/185A4C434D86861635.png",

    // 된장찌개
    "https://cdn.discordapp.com/attachments/778559127273734165/887278112159727616/ddd495fd432955701068e1a21a0d33211.png",

    // 육개장
    "https://cdn.discordapp.com/attachments/778559127273734165/887278209614368818/2e03da4a-73d2-444f-be2c-9faffcb60ffd.png",

    // 순두부찌개
    "https://cdn.discordapp.com/attachments/778559127273734165/887278341562974228/maxresdefault.png",

    // 돼지국밥
    "https://cdn.discordapp.com/attachments/778559127273734165/887278703946633276/KuhXo7DM51nwWN-a24yUPUDzNnc8EKQYAuWLuI_GYZp2Gv8T_1f2k44JV0eKt8xLT6lfyDFIGIyvolh0C-2N5ScXlBZ1vEPrPbTd.png",

    // 매운탕
    "https://cdn.discordapp.com/attachments/778559127273734165/887278808292556800/img.png",

    // 해물탕
    "https://cdn.discordapp.com/attachments/778559127273734165/887279055399956520/20210628015721683_photo_wP3KozDlpWwg.png",

    // 뼈해장국
    "https://cdn.discordapp.com/attachments/778559127273734165/887279220168990750/9918AB385C6577E324.png"
  ];
  var koreanStyleImg = [
    // 떡볶이
    "https://cdn.discordapp.com/attachments/778559127273734165/887279328218472469/20201210115150191474.png",

    // 핫도그
    "https://cdn.discordapp.com/attachments/778559127273734165/887279412066791445/2089237714_front_G8aAkU1P4i.png",

    // 김밥
    "https://cdn.discordapp.com/attachments/778559127273734165/887279609463341087/9985164F5DCC9CE623.png",

    // 순대
    "https://cdn.discordapp.com/attachments/778559127273734165/887279707052212224/81354_404725.png",

    // 돈까스
    "https://cdn.discordapp.com/attachments/778559127273734165/887280044773343272/17802878679b0fd03451fc02b1f4c0d8.png",

    // 튀김
    "https://cdn.discordapp.com/attachments/778559127273734165/887280318921465866/20190125170639_1295624_700_459.png",

    // 어묵
    "https://cdn.discordapp.com/attachments/778559127273734165/887280539437006848/oDmgxdsnxj7OcNrpAkwv.png",

    // 라볶이
    "https://cdn.discordapp.com/attachments/778559127273734165/887280678402686996/R800x0.png",

    // 만두
    "https://cdn.discordapp.com/attachments/778559127273734165/887280753996607528/EKiuBm_UcAMJ6E0.png"
  ];
  var noodleImg = [
    // 라면
    "https://cdn.discordapp.com/attachments/778559127273734165/887281108629200976/unknown.png",

    // 냉면
    "https://cdn.discordapp.com/attachments/778559127273734165/887281229844582440/01.png",

    // 칼국수
    "https://cdn.discordapp.com/attachments/778559127273734165/887281322203152384/2021021915160485251_1613715364.png",

    // 짜파게티
    "https://cdn.discordapp.com/attachments/778559127273734165/887281414045839430/4a85594c164f443a24a1579e381bd38a1.png",

    // 비빔국수
    "https://cdn.discordapp.com/attachments/778559127273734165/887281579884437524/1000000901_detail_28.png",

    // 잔치국수
    "https://cdn.discordapp.com/attachments/778559127273734165/887281961058566175/maxresdefault.png",

    // 스파게티
    "https://cdn.discordapp.com/attachments/778559127273734165/887282092906524682/9fcd9d1f17d90dad2e11340b46ecb3632b542c1f18b6bea09158daf69a604a26a9be20792de3c04d335d456bb801681c3b81.png",

    // 막국수
    "https://cdn.discordapp.com/attachments/778559127273734165/887282267137929226/99D11F405B5B31C60E.png",

    // 쫄면
    "https://cdn.discordapp.com/attachments/778559127273734165/887282527792943174/IMG_6437.png"
  ];
  var japaneeseImg = [
    // 우동
    "https://cdn.discordapp.com/attachments/778559127273734165/887282900507164702/img.png",

    // 가츠동
    "https://cdn.discordapp.com/attachments/778559127273734165/887282991058006026/d57991f21eba6b35e07f05f112fde972cdd5b4950dd6ed829644e0f92e06ee3ca12fb6e78d73df8d2b27b38dd01ef822ceb6.png",

    // 하이라이스
    "https://cdn.discordapp.com/attachments/778559127273734165/887283113829470238/7110000985_main.png",

    // 오코노미야끼
    "https://media.discordapp.net/attachments/778559127273734165/887283214689918976/a0003696_parts_5dca2e2aa2c34.png",

    // 초밥
    "https://cdn.discordapp.com/attachments/778559127273734165/887283788395188244/1908EE4C4FD97EA71C.png",

    // 규동
    "https://cdn.discordapp.com/attachments/778559127273734165/887284190708649994/maxresdefault.png",

    // 라멘
    "https://cdn.discordapp.com/attachments/778559127273734165/887284509815472148/unknown.png",

    // 소바
    "https://cdn.discordapp.com/attachments/778559127273734165/887284774916476929/a0093967_4d5c523c9680d.png",

    // 돈부리
    "https://cdn.discordapp.com/attachments/778559127273734165/887285658043973662/Butadon_Sukiya.png"
  ];
  var chineeseImg = [
    // 짜장면
    "https://cdn.discordapp.com/attachments/778559127273734165/887285800226652220/maxresdefault.png",

    // 짬뽕
    "https://cdn.discordapp.com/attachments/778559127273734165/887286177462358056/maxresdefault.png",

    // 볶음밥
    "https://cdn.discordapp.com/attachments/778559127273734165/887286347860160512/img.png",

    // 탕수육
    "https://cdn.discordapp.com/attachments/778559127273734165/887286723103563786/R720x0.png",

    // 마파두부
    "https://cdn.discordapp.com/attachments/778559127273734165/887286941819748362/Dsw4GzPU0AANqxN.png",

    // 깐풍기
    "https://cdn.discordapp.com/attachments/778559127273734165/887287112678907904/DSC_6182.png",

    // 고추잡채
    "https://cdn.discordapp.com/attachments/778559127273734165/887287721712820244/unknown.png",

    // 팔보채
    "https://cdn.discordapp.com/attachments/778559127273734165/887287989032615986/535a90131f0079a60409.png",

    // 깐쇼새우
    "https://cdn.discordapp.com/attachments/778559127273734165/887288302774939708/1542901253_4266_20181122_132132.png"
  ];
  var nightMenuImg = [
    // 치킨
    "https://cdn.discordapp.com/attachments/778559127273734165/887289527339733033/unknown.png",

    // 족발
    "https://cdn.discordapp.com/attachments/778559127273734165/887289969129975808/img.png",

    // 피자
    "https://cdn.discordapp.com/attachments/778559127273734165/887290480113635338/5bed0be3220000bc04de3cbc.png",

    // 닭발
    "https://media.discordapp.net/attachments/778559127273734165/887290611005272074/tudi_1574662390_2739_720.png?width=585&height=585",

    // 곱창
    "https://cdn.discordapp.com/attachments/778559127273734165/887291050165678100/unknown.png",

    // 콘치즈
    "https://cdn.discordapp.com/attachments/778559127273734165/887291210736205834/R720x0.png",

    // 골뱅이무침
    "https://cdn.discordapp.com/attachments/778559127273734165/887291375580749834/17ed085476.png",

    // 삼겹살
    "https://cdn.discordapp.com/attachments/778559127273734165/887291459500388372/IM_food02.png",

    // 오뎅탕
    "https://cdn.discordapp.com/attachments/778559127273734165/887291558167195648/08547fd50d9963c5cccf09b82e34251b1.png"
  ];
  var anythingImg = [
    // 삼각김밥
    "https://cdn.discordapp.com/attachments/778559127273734165/887291651796660244/EB8BA4EC9AB4EBA19CEB939C_28329.png",

    // 햄버거
    "https://cdn.discordapp.com/attachments/778559127273734165/887293280419717180/unknown.png",

    // 토스트
    "https://cdn.discordapp.com/attachments/778559127273734165/887293428264747048/1552640256511130.png",

    // 컵라면
    "https://cdn.discordapp.com/attachments/778559127273734165/887293598381522975/i15928285362.png",

    // 도시락
    "https://cdn.discordapp.com/attachments/778559127273734165/887293690211622952/coolpix_A_EAB8B0EC82ACEB8B98EB8F84EBB098ED959CEB8F84EC8B9CEB9DBD2019.png",

    // 밥버거
    "https://cdn.discordapp.com/attachments/778559127273734165/887293771098775623/aKoMaEv9oEr7jvq2vt5hJAz3Fv15cIYn7IHmzCSmEuSR2n9yjSqdegXAXy6RmsEfYRBLRr0LmWti_9Cu_egt5GniVFah-CDJnPVo.png",

    // 빵
    "https://cdn.discordapp.com/attachments/778559127273734165/887293933212807218/img_5fbc6d01c9efc.png",

    // 샌드위치
    "https://cdn.discordapp.com/attachments/778559127273734165/887294202541637632/unknown.png",

    // 죽
    "https://cdn.discordapp.com/attachments/778559127273734165/887294361765838878/9918E3365A2E82820E.png"
  ];
}
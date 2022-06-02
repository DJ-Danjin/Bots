const scriptName = "장난질";

var BotUpdateVersion = "8.95";
var AndroidVersion = Device.getAndroidVersionCode();
var CopyRight = "Copyright ⓒ 2019-2021 Danjin All Rights Reserved.";
{
  //var cow = new Array("음머어어어어", "음머어어어어어어어어");
  var rockpaper = new Array("가위", "바위", "보");
  //var nuni = new Array("느으으...", "니이이...");
  var evan = 0;
}

function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {

  /*var rnd = Math.floor(Math.random() * 100);
  var manujul = new Array("그래서?", "뭐", "어쩌라고", "와 정말 웃긴다 ㅋㅋ", "안물안궁", "ㄹㅇㅋㅋ", "ㅋㅋㄹㅃㅃ", "ㅇㅅㅇ", "ㅋㅋㅋㅋㅋ", "싫은데", "내가 왜?", "ㅇㅇ", "ㄴㄴ", "???", "바보야", "멍청한 멍청아!", "풋풋한 풋내기야!", "퇴색된 퇴물아!", "악독한 악당아!", "한심한 한량아!", "떨떠름한 떨거지야!", "굼뜬 굼벵아!", "쓸모없는 쓰레기야!", "심통난 심술쟁이야!", "불성실한 불한당아!", "촌스러운 촌뜨기야!", "얼타는 얼간아!", "거대한 거위야!", "깡마른 깡통아!", "느끼한 느림보야!", "배은망덕한 배신자야!", "비겁한 비렁뱅이야!", "천하의 천치야!", ";;", "그렇구나");
  if (rnd < 2 ) {
    var rnd2 = Math.floor(Math.random() * manujul.length);
    result = manujul[rnd2];
    replier.reply(result);
  }*/

  var result;

  //봇 정보
  if (msg == "!봇정보") {
    var BotName = room.replace(" 톡방", "") + "봇";
    result = "《" + BotName + " 정보》\n" + "업데이트 버전 : " + BotUpdateVersion + "\n안드로이드 버전 : " + AndroidVersion + "\n\n" + CopyRight;

    replier.reply(result);
    return 0;
  }

  msg = msg.trim();
  var babo = msg.replace(/[^a-zA-Zㄱ-ㅎㅏ-ㅣ가-힣]/g, "");
    
  //바보 화이트리스트
  var masterlist = new Array("단진", "주희", "힐더-DJ단진", "힐더섭 쓰레기", "방장봇"/*, "도비는 자유가없어요", "시로코-스트레인지."*/); //도비님 3월 까지
  var babolist = new Array("바보", "뱌뷰", "바부", "바뷰", "뱌부", "뱌보", "뱌뵤", "밥오", "뱌븁", "바뿌", "밥뷰", "뱝뷰", "뱝보", "뱝부", "볍뷰", "바뵤", "뱝ㅂ뷰", "뱞뷰", "あほ", "バカ", "바카", "アホ", "ばか");
  var daenglist = new Array("멍청", "댕청", "멍충");
  var babocheck = 0;
  var daengcheck = 0;
/*
  for (var i = 0; i < babolist.length; i++) {
    if (babo.indexOf(babolist[i]) != -1) {
      babocheck = 1;
    }
  }

  if ((room == "크리 톡방" || room == "1해라 12야" || room == "커맨더 톡방" || room == "런처 톡방") && babocheck == 1) {
    var nomaster = 0;
    for (i = 0; i < masterlist.length; i++) {
      if (sender != masterlist[i]) {
        nomaster++;
      }
      if (nomaster == masterlist.length) {
        result = sender + " 니가 더 바보야 ㅋㅋ";
      } else {
        result = "ㅇㅈ합니다";
      }
    }
    replier.reply(result);
    return 0;
  }

  for (i = 0; i < daenglist.length; i++) {
    if (babo.indexOf(daenglist[i]) != -1) {
      daengcheck = 1;
    }
  }

  if ((room == "크리 톡방" || room == "커맨더 톡방") && daengcheck == 1) {
    nomaster = 0;
    for (i = 0; i < masterlist.length; i++) {
      if (sender != masterlist[i]) {
        nomaster++;
      }
      if (nomaster == masterlist.length) {
        result = sender + " 니가 더 멍청해 ㅋㅋ";
      } else {
        result = "ㅇㅈ합니다";
      }
    }
    replier.reply(result);
    return 0;
  }*/

  //마법의크리봇
  var list = new Array("응", "아니");
  if (msg.indexOf("!마법의크리봇님 ") == 0 || msg.indexOf("!마법의루나봇님 ") == 0) {
    if (babo.indexOf("단진") != -1 && msg.indexOf("님") != -1) {
      return 0;
    } else if (msg.indexOf("vs") != -1) {
      var versus = msg.split("!마법의크리봇님 ")[1];
      var selectWin = versus.split("vs");
      var rannum = Math.floor(Math.random() * selectWin.length);

      replier.reply(selectWin[rannum]);
      return 0;
    } else {
      var rannum = Math.floor(Math.random() * list.length);
      replier.reply(list[rannum]);
      return 0;
    }
  }

  //크리봇 반응
  if (room == "크리 톡방" || room == "1해라 12야" || room == "라피니타" || room == "커맨더 톡방" || room == "런처 톡방") {
    if (msg.indexOf("크리") != -1 && msg.indexOf("봇") != -1 && msg.indexOf("!마법의크리봇님 ") != 0 && msg.indexOf("!크리봇") == -1 && sender != "방장봇") {
      if (msg.indexOf("?") != -1 && sender != "단진") {
        if (msg.indexOf("ㅗ") != -1) {
          replier.reply("?");
          return 0;
        } else {
          replier.reply("ㅗ");
          return 0;
        }
      } else {
        replier.reply("?");
        return 0;
      }
    }
  }

  if ((msg.indexOf("반사") != -1 || msg.indexOf("ㄷㅊ") != -1) && room == "크리 톡방" && sender != "단진") {
    replier.reply("반사");
    return 0;
  }

  //
  if (msg == "!크리에이터" || msg == "!크리") {
    result = "크리에이터 상향좀;;";
    replier.reply(result);
    return 0;
  }

  if (msg == "!방송") {
    result = "https://twitch.tv/gocaps";
    replier.reply(result);
    return 0;
  }

  if (msg == "!cpu" || msg == "!CPU" || msg == "!시피유" || msg == "!씨피유") {
    result = "인텔 빳다죠 쉬바 ㅎㅎ";
    replier.reply(result);
    return 0;
  }

  if (msg == "!기본") {
    result = "뭐";
    replier.reply(result);
    return 0;
  }

  if (msg == "!예의") {
    result = "하지마";
    replier.reply(result);
    return 0;
  }

  if (msg == "!4나병") {
    result = "없어 돌아가";
    replier.reply(result);
    return 0;
  }

  if (msg == "!킹하") {
    result = "안녕히 주무세요";
    replier.reply(result);
    return 0;
  }

  if (msg == "!기본콤보1") {
    result = "태엽1 태엽2 태엽1 태엽3";
    replier.reply(result);
    return 0;
  }

  if (msg == "!기본콤보2") {
    result = "하나! 둘! 셋! 야!";
    replier.reply(result);
    return 0;
  }

  if (msg == "!기본예의") {
    result = "하지말라고";
    replier.reply(result);
    return 0;
  }

  if (msg.indexOf("히토미") != -1) {
    result = "꺼라";
    replier.reply(result);
    return 0;
  }

  if (room == "크리 톡방"){ 
    /* if (msg == "!케이") {
      result = "케이 님은 지강든창입니다!";
      replier.reply(result);
      return 0;
    }
    
    if (msg == "!느니") {
      rnd = Math.floor(Math.random() * nuni.length);
      result = nuni[rnd];
      replier.reply(result);
      return 0;
    }
    
    if (msg == "!끄리") {
      result = "근데 끄리 쌤?";
      replier.reply(result);
      return 0;
    }
    
    if (msg == "!찬파") {
      result = "킁킁..어디서 썩은물 냄새가..";
      replier.reply(result);
      java.lang.Thread.sleep(3000);
      result = "뭐야 찬파님이었네!";
      replier.reply(result);
      return 0;
    }

    if (msg == "!찬") {
      result = "안커여움 ㅅㄱ";
      replier.reply(result);
      return 0;
    }

    if (msg == "!강화") {
      result = "그게 뭔데 씹덕아;;";
      replier.reply(result);
      return 0;
    }
    
    if (msg == "!하켄") {
      result = "하켄에몽";
      rnd = Math.floor(Math.random() * 30);
      for (i=0;i<rnd;i++) {
        result = result + " ! ";
      }
      replier.reply(result);
      return 0;
    }
    
    if (msg == "!수성") {
      result = "수성님은 미성의 공머장님입니다 ㅗㅜㅑ.....";
      replier.reply(result);
      return 0;
    }

    if (msg == "!숫엉") {
      result = "수성님은 미성의... 어라?";
      replier.reply(result);
      return 0;
    }
    
    if (msg == "!쿠리") {
      result = "구와";
      rnd = Math.floor(Math.random() * 30);
      for (i=0;i<rnd;i++) {
        result = result + "아";
      }
      result = result + "악";
      replier.reply(result);
      return 0;
    }
    
    if (msg == "!뀨") {
      result = "귀척 ㄴ";
      replier.reply(result);
      return 0;
    }
    
    if (msg == "!히익") {
      result = "븝ㅡ하!";
      replier.reply(result);
      return 0;
    }
    
    if (msg.indexOf("!치노") == 0) {
      result = "찍어먹어라... 헬스크림...";
      replier.reply(result);
      return 0;
    }

    if (msg == "!캔디빵") {
      result = "바움쿠헨 주세요";
      replier.reply(result);
      return 0;
    } */

    if (msg.indexOf("에반데") != -1) {
      evan++;
      if (evan == 3) {
        result = "삼진 에반으로 기각되었습니다.";
        replier.reply(result);
        evan = 0;
        return 0;
      }
    }
    
    if (msg.indexOf("!안경") == 0) {
      result = "안경 극혐;;";
      replier.reply(result);
      return 0;
    }
    /*
    if (msg.indexOf("!레타") == 0) {
      result = "목이 너무 길어요! 좀 내려와봐요!";
      replier.reply(result);
      return 0;
    }

    if (msg.indexOf("느넘강") != -1) {
      result = "느넘약! 느상필!! 느니 야캐요!!!";
      replier.reply(result);
      return 0;
    }

    if (msg.indexOf("프레이-이시스") != -1) {
      result = "프레이-이시스 님 만세!";
      replier.reply(result);
      return 0;
    }

    if (sender.indexOf("시로코") != -1 && sender.indexOf("평타") != -1 && sender.indexOf("흑우") != -1) {
      rnd = Math.floor(Math.random() * 100);
      rnd2 = Math.floor(Math.random() * cow.length);
      if (rnd >= 0 && rnd < 2) {
        result = cow[rnd2];
        replier.reply(result);
        return 0;
      }
    }

    if (msg == "!대자연") {
      result = "대자연 개사기임 짱조음 ㄱㄱ(끄피셜)";
      replier.reply(result);
      return 0;
    }

    if (msg == "!창천") {
      result = "창천 개사기임 짱조음 ㄱㄱ(끄피셜)";
      replier.reply(result);
      return 0;
    }
    
    if (msg == "!계절") {
      result = "계절 미만 잡 ㅅㄱ";
      replier.reply(result);
      return 0;
    }
    
    if (msg == "!억년") {
      result = "한방쾌감! 나무앤파이터!";
      replier.reply(result);
      return 0;
    }
    
    if (msg == "!온슬") {
      result = "아;; 어디서 찐따냄새 안나요?? 아 역겨워;;";
      replier.reply(result);
      return 0;
    }
    
    if (msg == "!오광") {
      result = "크리에이터에게 최고의 방어구!";
      replier.reply(result);
      return 0;
    } */
  }

  if (sender.indexOf("우쮸") != -1) {
    rnd = Math.floor(Math.random() * 100);
    if (rnd == 101) {
      result = "https://www.twitch.tv/hod933";
      replier.reply(result);
      return 0;
    }
  }

  if (msg.indexOf("!가위바위보 ") == 0 && msg.indexOf("단진") == -1) {
    rnd = Math.floor(Math.random() * rockpaper.length);
    replier.reply(rockpaper[rnd]);
    return 0;
  }
  
  if (msg == "!로또") {
    let base = [];
    let num = [];
    let rnd;

    for (let i = 1; i < 46; i++) {
      base.push(i);
    }

    for (let j = 0; j < 6; j++) {
      rnd = Math.floor(Math.random() * base.length);
      num.push(base[rnd]);
      base.splice(rnd, 1);
    }

    num.sort(function (f, s) { return f - s;});
    result = "《" + sender + " 님의 로또 번호 추천》\n\n" + num;
    replier.reply(result);
    return 0;
  }

  if (room != "허니꼬미" && room != "로아 톡방") {
    var noex = new Array("됬", "됀", "됍", "됄", "됌", "뵜", "봰", "봽", "봴", "봼");
    var yesex = new Array("됐", "된", "됩", "될", "됨", "뵀", "뵌", "뵙", "뵐", "뵘");
    result = "《맞춤법 지키미》";
    var checker = 0;
    for (i = 0; i < noex.length; i++) {
      if (msg.indexOf(noex[i]) != -1) {
        result = result + "\n" + noex[i] + " ☞ " + yesex[i];
        checker = 1;
      }
    }
    if (checker == 1) {
      replier.reply(result);
      return 0;
    }
  }

  if (msg.indexOf("법규") != -1) {
    result = "훠뀨!";
    replier.reply(result);
    return 0;
  }

  if (msg.indexOf("오늘") != -1 && msg.indexOf("생일") != -1) {
    result = sender + " 님 생일 축하해요!";
    replier.reply(result);
    return 0;
  }

  if (msg == "!관장" && room == "커맨더 톡방") {
    result = "재입대 ㅅㄱ";
    replier.reply(result);
    rnd = Math.floor(Math.random() * 5);
    if (rnd == 1) {
      java.lang.Thread.sleep(3000);
      replier.reply("...진짜 하나?");
    }
    return 0;
  }

  if (msg.indexOf("챔") != -1 && room == "히오스 톡방") {
    result = "췌에에에에에에에에에엠?????";
    replier.reply(result);
    return 0;
  }

  if (sender == "단진") {
    if (msg.indexOf("ㄴㄷㅆ") != -1 && room == "크리 톡방") {
      result = "네다씹;;";
      replier.reply(result);
      return 0;
    }

    if (msg == "나는") {
      result = "개똥벌레";
      replier.reply(result);
      return 0;
    }

    if (msg == "친구가") {
      result = "없네";
      replier.reply(result);
      return 0;
    }

    if (msg == "저기 저") {
      result = "개똥무덤이";
      replier.reply(result);
      return 0;
    }

    if (msg == "내") {
      result = "집인걸";
      replier.reply(result);
      return 0;
    }

    if (msg == "아무리") {
      result = "울어봐도";
      replier.reply(result);
      return 0;
    }

    if (msg == "어쩔 수") {
      result = "없네";
      replier.reply(result);
      return 0;
    }

    if (msg == "오늘 밤도") {
      result = "그 렇 게";
      replier.reply(result);
      return 0;
    }

    if (msg == "울다") {
      result = "잠이 든다";
      replier.reply(result);
      return 0;
    }
  }

  if (room == "로아 톡방") {
    if (msg == "!눈개") {
      replier.reply("귀요미");
      return 0;
    }
  }
}
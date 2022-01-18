const scriptName = "크리에이터 봇";

function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
  var result = "";

  if (msg == "!크리봇") {
    result = "《크리봇 괴롭히기 방》\n\n";
    result = result + "봇 명령어 사용 마음껏 할 수 있는 방입니다\n";
    result = result + "도배 눈치 없이 마음껏 사용 하시면 됩니다\n\n";
    result = result + "단, 다른 톡방 사람들을 만날 수도 있으니\n";
    result = result + "그럴땐 서로 멋쩍게 웃어주세요\n\n";
    result = result + "입장시 안내되는 규칙을 '반드시' 준수해주세요!\n\n";
    result = result + "https://open.kakao.com/o/gMqPceZc";
   
    replier.reply(result);
    return 0;
  }
  
  if (msg == "!분석") { /*
    result = "《스쿠스타 UR 성능 분석》\n";
    result = result + "페스 UR\n";
    result = result + "https://gall.dcinside.com/mgallery/board/view/?id=sunshine&no=3169930\n\n";
    result = result + "이벤트 UR\n";
    result = result + "https://gall.dcinside.com/mgallery/board/view/?id=sunshine&no=3169928\n\n";
    result = result + "통상 UR\n" + "​".repeat(495);
    result = result + "\n2019년\n";
    result = result + "https://gall.dcinside.com/mgallery/board/view/?id=sunshine&no=3169924\n\n";
    result = result + "2020년 상반기\n";
    result = result + "https://gall.dcinside.com/mgallery/board/view/?id=sunshine&no=3169925\n\n";
    result = result + "2020년 하반기\n";
    result = result + "https://gall.dcinside.com/mgallery/board/view/?id=sunshine&no=3384188\n\n";
    
    replier.reply(result);
    return 0;
  */}

  if (msg == "!이벤트") {/*
    result = "《글로벌 스쿠스타 이벤트》\n\n" + "​".repeat(495);
    result = result + "현재 진행중인 이벤트가 없습니다\n";
    result = result + "!스카우트 를 통해 진행중인 스카우트를 확인해보세요!";

    result = result + "SBL 스쿠스타 빅 라이브! 베타 이벤트\n\n";
    result = result + "이벤트 종류 : 빅라이브\n";
    result = result + "기간 : 7월 31일 15시 ~ 8월 4일 15시\n";

    result = result + "\n보너스 대상\n";
    result = result + "3학년 - 어필, 체력, 테크닉 10% 증가\n";

    result = result + "\n라이브 대상곡\n";
    result = result + "Arashi no Naka no Koi dakara - 아라코이\n";
    result = result + "Genki Zenkai DAY! DAY! DAY! - 원기전개\n";
    result = result + "Nemureru Mori ni Ikitai na - 네무모리\n";

    result = result + "\n메달 교환소 복각 목록\n";
    result = result + "시크릿 파티!\n";
    result = result + "└ UR호노카(스마일 SP) / SR치카(키미코코) / SR아유무(애니멀)\n";
    result = result + "기모노 모델은 우리가!\n";
    result = result + "└ UR루비(스마일 볼티지) / SR니코(스노하레) / SR카스미(애니멀)\n";
    result = result + "시타마치 관광 대모험\n";
    result = result + "└ UR카요(퓨어 스킬) / SR마리(키미코코) / SR아이(애니멀)";

    result = result + "\n보상\n";
    result = result + "UR카난 - 엘레강트 / 볼티지\n";
    result = result + "└ 7854 / 7405 / 7180 (+373)\n";
    result = result + "└ 다음 발동하는 SP특기의 획득 볼티지가 자기 테크닉의 30%만큼 증가\n";
    result = result + "└ 테크닉+ : 동속성\n";
    result = result + "└ 작전 변경시 20%로 모든 감소 효과 해제 / 전원\n\n";
    result = result + "SR요우 - 아오점프 의상\n";
    result = result + "SR카요 - 보쿠키미 의상";

    result = result + "드림 라이브 페스티벌 오픈베타 세컨드\n\n";
    result = result + "기간 : 11월 12일 15시 ~ 11월 16일 15시\n";
    result = result + "보너스 - 뮤즈\n";
    result = result + "교환소 라인업\n";
    result = result + "하트 벨트(쿨) - 게임 종료 시까지 SP특기로 획득 가능한 볼티지가 자신의 테크닉치 1%(스킬 만렙 시:5%)만큼 증가\n";
    result = result + "네잎클로버 초커(스마일) - 게임 종료 시까지 자신의 어필로 획득하는 볼티지의 상한이 1%(스킬 만렙 시: 10%)증가\n";
    result = result + "눈결정 뱅글(액티브) - 게임 종료 시까지, 남은 체력이 많을수록 자신의 기본 크리티컬치가 최대 5%(스킬 만렙 시: 20%)상승\n";
    result = result + "니지동 하이메모리\n\n\n";

    result = result + "리나의 오싹한 귀신의 집\n\n";
    result = result + "이벤트 종류 : 스토리\n";
    result = result + "기간 : 11월 14일 15시 ~ 11월 120일 15시\n";
    result = result + "\n보상\n";
    result = result + "UR루비 - 내츄럴 / 스킬\n";
    result = result + "└ 8210 / 5863 (+527) / 9384\n";
    result = result + "└ 다음 발동 SP특기 볼티지가 자기 테크닉의 30% 만큼 증가\n";
    result = result + "└ 체력+ : 자신\n";
    result = result + "└ 라이브시 30% 로 게임 종료까지 기본 크리티컬 4% 증가 / 전원\n\n";
    result = result + "SR리코 - 코이아쿠\n";
    result = result + "SR카스미 - 럽유마프";

    result = result + "둘이서 연주하는 소리\n\n";
    result = result + "이벤트 종류 : 교환소\n";
    result = result + "기간 : 7월 5일 15시 ~ 7월 15일 15시\n";
    
    result = result + "교환 기간 : 7월 5일 15시 ~ 7월 20일 15시\n";
    
    result = result + "HEART to HEART - μ's 선행공개\n";

    result = result + "\n보상\n";
    result = result + "UR리코 - 엘레강트 / 볼티지\n";
    result = result + "SR리코 - 아오점프 의상\n";
    result = result + "SR카린 - 레인보우 로즈\n";
    
    result = result + "\n랭킹곡\n";
    result = result + "PSYCHIC FIRE - μ's\n";
    result = result + "Mirai no Bokura wa Shitteru yo (미라보쿠) - Aqours\n";
    result = result + "Diamond - 카스미";

    replier.reply(result);
    return 0;
  */}

  if (msg == "!스카우트") {/*
    result = "《글로벌 스쿠스타 스카우트》\n\n" + "​".repeat(495);

    result = result + "스페셜 데이트 페스티벌\n\n";
    result = result + "기간\n"
    result = result + "11월 19일 15시 ~ 11월 26일 15시\n";
    //result = result + "[전편] 11월 14일 15시 ~ 11월 20일 15시\n";
    //result = result + "[후편] 11월 16일 15시 ~ 11월 20일 15시\n";
    
    result = result + "\n등장 아이돌\n";

    result = result + "[페스] UR다이아(4☆) - 퓨어 / 스킬\n";
    result = result + "└ 11820 (+614) / 6843 / 12444\n";
    result = result + "└ 5노트 동안 크리티컬 확률 18% 증가 / 동학년\n";
    result = result + "└ 어필+ : 동학년 +5.2%\n";
    result = result + "└ AC 성공시 50%로 5노트 동안 볼티지 8% 증가 / 동학년\n\n";

    result = result + "[페스] UR시즈쿠(4☆) - 쿨 / 가드\n";
    result = result + "└ 6732 / 14688 (+763) / 9180\n";
    result = result + "└ 자기 체력의 40%만큼 쉴드 획득\n";
    result = result + "└ 체력+ : 동속성 +5.2%\n";
    result = result + "└ AC 성공시 100%로 5노트 동안 어필 3.5% 증가 / 전원\n\n";

    result = result + "SR니코 - 원더러시\n";
    result = result + "SR요우 - 코이아쿠";
    

    result = result + "UR리나 - 엘레강트 / SP (0.5% / 0.5%)\n";
    result = result + "└ 스탯 - 어필 9458 / 체력 8649 / 테크닉 8918 (+463)\n";
    result = result + "└ 특기 - 자기 테크닉의 32%만큼 체력 회복\n";
    result = result + "└ 개성 - 테크닉+ : 동학년 / 시작시 30%로 자기 어필의 10% SP 게이지 획득\n";
    result = result + "SR니코 - 보쿠키미 의상 (10% / 1%)";

    result = result + "[전편] UR리나 - 스마일 / 볼티지\n";
    result = result + "└ 11780 / 6170 / 10098 (+525)\n";
    result = result + "└ 자기 어필의 37% 만큼 볼티지 획득\n";
    result = result + "└ 테크닉+ : 동속성\n";
    result = result + "└ 자기 크리티컬시 30% 로 2노트 동안 어필 9.5% 증가 / 동속성\n\n";
    result = result + "[후편] UR우미 - 엘레강트 / 가드\n";
    result = result + "└ 6283 / 12851 (+899) / 9424\n";
    result = result + "└ 자기 체력의 32%만큼 체력 회복\n";
    result = result + "└ 체력+ : 동작전\n";
    result = result + "└ 작전 변경시 20% 로 자기 체력의 10% 만큼 실드 획득\n\n";
    result = result + "[공통] SR코토리 - 원더러시\n\n";

    replier.reply(result);
    return 0;
  */}

  if (msg == "!미래시") { /*
    result = "《글로벌 스쿠스타 업데이트 예정》\n\n" + "​".repeat(495);
    result = result + "일쿠스타 기반 미래시\n\n";
    result = result + "글타 2월 ~ 3월\n";
    result = result + "https://gall.dcinside.com/mgallery/board/view/?id=sunshine&no=3695969\n\n";
    result = result + "글타 4월 ~\n";
    result = result + "https://gall.dcinside.com/mgallery/board/view/?id=sunshine&no=3883798";

    replier.reply(result);
    return 0;
  */}

  if (msg == "!서버") {
    var result;
    try {
      var checker = Utils.getWebText("https://api.neople.co.kr/df/servers/hilder/characters?characterName=Yang&apikey=W9k8OZjtGTQwxK4gmRRudQZ6maXHI8Uj");
      result = "《API 서버 상태》\nOn";
      replier.reply(result);
      return 0;
    } catch (error) {
      result = "《API 서버 상태》\n점검중";
      replier.reply(result);
      return 0;
    }
  }

  if (msg == "!디코" || msg == "!디스코드") {

    var result = "활성화된 디스코드 채팅방이 없습니다.";

    if (room == "크리 톡방") {
      result = "https://discord.gg/njDGuhr";
    }
    if (room == "1해라 12야") {
      result = "https://discord.gg/uvPDRKeADj";
    }
    if (room == "히오스 톡방") {
      result = "https://discord.gg/McJ2z8Y";
    }
    if (room == "무속성 톡방") {
      result = "https://discord.gg/DHpCjPV";
    }

    replier.reply(result);
    return 0;
  }

  /*if (msg.split(" ")[0] == "!테이") {
    var data = Utils.getWebText("http://dundam.xyz/statistics.jsp");
    var a = new Array(5);
    var b = new Array(a.length);
    var c = new Array("창천","계절","억년","온슬","오광");

    var spltvalue = msg.replace("!테이 ", "");
    var namevalue = msg.replace("!테이 ", "");
    if (spltvalue == ("크리" || "크리에이터")) {
      spltvalue = "크리에이터(자각2)";
      namevalue = "크리에이터";
    } else if (spltvalue == ("닼나" || "다크나이트")) {
      spltvalue = "다크나이트(자각2)";
      namevalue = "다크나이트"
    }
    var count = 0;
    for (var i=0; i<jobraw.length; i++) {
      if (spltvalue == jobraw[i]) {
        namevalue = jobraw[i];
      } else {
        count++;
      }
    }

    var sw = 0;
    if (count == jobraw.length) {
      sw = 1;
    }

    switch (sw) {
      case 0:
        var sum = data.split(spltvalue)[1];
        sum = sum.split("<td>")[1];
        sum = sum.split("</td>")[0];

        for (var i=0; i<a.length; i++) {
          var spl = "";
          spl = data.split(spltvalue)[1];
          spl = spl.split("<td>")[i+2];
          spl = spl.split("</td>")[0];
          spl = spl.replace(" ","");
          a[i] = parseInt(spl);
        }

        var rank = 1;
        for (var i=0; i<a.length; i++) {
          rank = 1;
          for (var j=0; j<a.length; j++) {
            if (a[i] < a[j]) rank++;
          }
          for (var j=0; j<b.length; j++) {
            if (b[j] == rank) rank++;
          }
          b[i] = rank;
        }

        var result = "《" + namevalue + " 테이베르스 방어구 순위》\n";
        var temp = 1;
        for (i=0;i<a.length;i++) {
          var themp = b.indexOf(i+1);
          result = result + temp + "위 : " + c[themp] + "(" + a[themp] + "명)\n";
          temp++;
        }
        result = result + "총 인구수 : " + sum + "명";

        replier.reply(result);
        break;
    
      default:
        replier.reply("직업의 2차각성명을 정확히 적어주세요!")
        break;
    }
  }*/

}